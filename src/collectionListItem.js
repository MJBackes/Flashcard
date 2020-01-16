import React from 'react';
import './collectionListItem.css';
class CollectionListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.collId,
            title: props.title,
            onClick: props.onClick,
            isActive: props.isActive
        };
    }
    componentWillReceiveProps(props){
        this.setState({
            id: props.collId,
            title: props.title,
            onClick: props.onClick,
            isActive: props.isActive
        });
    }
    render(){
        const color = this.state.isActive ? "#ff9999" : "#b3b3ff";
        return (
            <button style={{backgroundColor: color}} id = {this.state.id} onClick = {this.state.onClick}>{this.state.title}</button>
        );
    }
}

export default CollectionListItem;