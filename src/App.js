import React from 'react';
import axios from 'axios';
import './App.css';
import CollectionListItem from './collectionListItem';
import Card from './Card';
import AddTopicButton from './AddTopicButton';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collections: null,
      activeCollectionIndex: null,
      activeCardIndex:null,
      wordIsShowing:true,
      isAddingTopic: false
    };
  }
  componentDidMount(){
    this.updateCollections();
  }

  updateCollections(){
    axios.get('http://localhost:3001/collections')
         .then(res => {
           this.setStateFromAPIGet(res);
         })
  }

  setStateFromAPIGet(res){
    const collections = res.data;
      let collectionIndex = null;
      let cardIndex = null;
      if(collections && collections.length > 0){
        collectionIndex = 0;
        if(collections[0].cards.length > 0)
          cardIndex = 0;
      }
      this.setState({
        collections: collections,
        activeCollectionIndex: collectionIndex,
        activeCardIndex: cardIndex,
        isAddingTopic: false
      });
  }
  handleTopicClick(index){
    this.setState({
      activeCollectionIndex: index,
      activeCardIndex: 0,
      wordIsShowing: true
    })
  }

  handleAddTopicClick(){
    if(!this.state.isAddingTopic){
      this.setState({
        isAddingTopic: true
      });
    }
      else{
        const title = document.getElementById("topicTitleInput").value;
        const id = this.state.collections.length + 1;
        axios.post('http://localhost:3001/collections', {id: id, title:title, cards: []})
             .then(res => {
               console.log("Good post.");
               this.updateCollections();
              })
              .catch(function(error){
                console.log(id);
                console.log(error.response);
              });
      }
  }

  flipCard(){
    this.setState({
      wordIsShowing: !this.state.wordIsShowing
    });
  }

  renderTableRows(collections){
    let tableRows = [];
    if(collections)
      for(let i = 0; i < collections.length; i++){
        const collectionId = collections[i].id;
        const collectionTitle = collections[i].title;
        tableRows.push(<tr key={i + 1}><td><CollectionListItem isActive = {i === this.state.activeCollectionIndex} 
                                                               collId={collectionId} 
                                                               title={collectionTitle} 
                                                               onClick = {() => this.handleTopicClick(i)}
                                                               /></td></tr>);
      }
    return tableRows;
  }

  renderCard(){
    let cards = this.state.activeCollectionIndex != null && this.state.activeCollectionIndex >= 0 ? this.state.collections[this.state.activeCollectionIndex].cards : null;
    let card = cards ? cards[this.state.activeCardIndex] : null;
    return card ? <Card word = {card.word} 
                        definition = {card.definition} 
                        wordIsShowing = {this.state.wordIsShowing}
                        onClick = {() => this.flipCard()}
                        cardNumber = {this.state.activeCardIndex + 1}
                  /> : null;
  }

  renderAddTopicButton(){
    return                   (<td>
    <AddTopicButton  isAddingTopic = {this.state.isAddingTopic}
                    onClick = {() => this.handleAddTopicClick()}/>
    </td>);
  }

  render(){
    return (
      <div className="App">
        <div className="topicsDiv">
            <table className="topicsTable">
              <tbody>
                <tr key="0">
                  <th>
                    Topics
                  </th>
                </tr>
                {this.renderTableRows(this.state.collections)}
                <tr>
                    {this.renderAddTopicButton()}
                </tr>
              </tbody>
            </table>
        </div>
        <div className="cardDiv">
          {this.renderCard()}
          <button onClick= {() => this.setState({activeCardIndex: getPrevCardIndex(this.state.activeCardIndex), wordIsShowing: true})}>Prev</button>
          <span>   {this.state.activeCardIndex + 1} / {this.state.collections ? getNumberOfCardsInCollection(this.state.collections[this.state.activeCollectionIndex]) : null}  </span>
          <button onClick={() => this.setState({activeCardIndex: getNextCardIndex(this.state.activeCardIndex, this.state.collections[this.state.activeCollectionIndex].cards), wordIsShowing: true})}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;

function getPrevCardIndex(currentIndex){
  return currentIndex > 0 ? --currentIndex : 0;
}
function getNextCardIndex(currentIndex,cards){
  return currentIndex < (cards.length - 1)? ++currentIndex : currentIndex;
}
function getNumberOfCardsInCollection(collection){
  return collection ? collection.cards.length : null;
}
