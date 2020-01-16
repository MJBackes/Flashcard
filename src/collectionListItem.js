import React from 'react';

class CollectionListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.collId,
            title: props.title,
            onClick: props.onClick
        };
    }

    render(){
        return (
            <button id = {this.state.id} onClick = {this.state.onClick}>{this.state.title}</button>
        );
    }
}

export default CollectionListItem;