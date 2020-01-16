import React from 'react';
import './Card.css';
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: props.word,
            definition: props.definition,
            wordIsShowing: props.wordIsShowing,
            onClick: props.onClick,
            cardNumber: props.cardNumber
        };
    }
    componentWillReceiveProps(props){
        this.setState({
            word: props.word,
            definition: props.definition,
            wordIsShowing: props.wordIsShowing,
            cardNumber: props.cardNumber
        })
    }
    componentDidUpdate(props){
        console.log(this.state.word + " " + this.state.definition);
    }

    render(){
        const content = this.state.wordIsShowing ? this.state.word : this.state.definition;
        const color = getCardColor(this.state.cardNumber);
        return (
            <div onClick = {this.state.onClick}
                 style={{backgroundColor: color}}>
                <h3>
                    {content}
                </h3>
            </div>
        );
    }
}

export default Card;

function getCardColor(cardNumber){
    switch(cardNumber % 6){
        case 0:
            return "#ffcccc";
        case 1:
            return "#ffffcc";
        case 2:
            return "#ccffcc";
        case 3:
            return "#ccffff";
        case 4:
            return "#ccccff";
        case 5:
            return "#ffccff";
        default:
            return "#ffcccc";
    }
}