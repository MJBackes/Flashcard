import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: props.word,
            definition: props.definition,
            wordIsShowing: props.wordIsShowing
        }
    }

    render(){
        const content = this.state.wordIsShowing ? this.state.word : this.state.definition;
        return (
            <div>
                <h3>
                    {content}
                </h3>
            </div>
        );
    }
}

export default Card;