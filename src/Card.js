import React from 'react';

function Card(props){
        const content = props.wordIsShowing ? props.word : props.definition;
        return (
            <div onClick={props.onClick}>
                <h3>
                    {content}
                </h3>
            </div>
        );
}

export default Card;