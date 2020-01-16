import React from 'react';
import axios from 'axios';
import './App.css';
import CollectionListItem from './collectionListItem'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collections: null
    };
  }
  componentDidMount(){
    axios.get('http://localhost:3001/collections')
    .then(res => {
      const collections = res.data;
      this.setState({
        collections: collections
      });
    });
  }

  renderTableRows(collections){

  }

  render(){
    return (
      <div className="App">
            <table>
              <tbody>
                <tr>
                  <th>
                    Topics
                  </th>
                </tr>
                {this.renderTableRows(this.state.collections)}
              </tbody>
            </table>
      </div>
    );
  }
}

export default App;
