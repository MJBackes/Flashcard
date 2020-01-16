import React from 'react';
import './Card.css';
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: props.word,
            definition: props.definition,
            wordIsShowing: props.wordIsShowing,
            onClick: props.onClick
        };
    }
    componentWillReceiveProps(props){
        this.setState({
            word: props.word,
            definition: props.definition,
            wordIsShowing: props.wordIsShowing
        })
    }
    componentDidUpdate(props){
        console.log(this.state.word + " " + this.state.definition);
    }

    render(){
        const content = this.state.wordIsShowing ? this.state.word : this.state.definition;
        return (
            <div onClick = {this.state.onClick}>
                <h3>
                    {content}
                </h3>
            </div>
        );
    }
}

export default Card;