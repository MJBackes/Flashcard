import React from 'react';

class AddTopicButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAddingTopic: props.isAddingTopic,
            onClick: props.onClick
        };
    }
    componentWillReceiveProps(props){
        this.setState({
            isAddingTopic: props.isAddingTopic,
            onClick: props.onClick
        })
    }
    render(){
        if(this.state.isAddingTopic){
            return (
                <div>
                    <input id = "topicTitleInput" type="text" placeholder="Title"/>
                    <button onClick = {this.state.onClick}>Submit</button>
                </div>
            );
        }
        else{
            return (
                <button onClick = {this.state.onClick}>Add</button>
            );
        }
    }
}

export default AddTopicButton;