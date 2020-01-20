import React from 'react';

class CreateUpdateCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: props.word,
            definition: props.definition,
            onClick: props.onClick,
            cancel: props.cancel
        };
    }

    render(){
        const color = "#ccffcc";
        if(!this.state.word || !this.state.definition)
            return (
                <div style={{backgroundColor: color}}>
                    <input id="wordInput" type="text" placeholder="Word"/>
                    <br/>
                    <br/>
                    <input id="definitionInput" type="text" placeholder="Definition"/> 
                    <br/>
                    <button onClick={this.state.onClick}>Submit</button>
                    <button onClick={this.state.cancel}>Cancel</button>
                </div>
            );
        else
            return (
                <div style={{backgroundColor: color}}>
                    <input 
                        id="wordInput" 
                        type="text" 
                        value={this.state.word}
                        onChange={(event) => {
                            this.setState({
                                word: event.target.value
                            });
                        }}
                        />
                    <br/>
                    <br/>
                    <input 
                        id="definitionInput" 
                        type="text" 
                        value={this.state.definition}
                        onChange={(event) => {
                            this.setState({
                                word: event.target.value
                            })
                        }}
                        /> 
                    <br/>
                    <button onClick={this.state.onClick}>Submit</button>
                    <button onClick={this.state.cancel}>Cancel</button>
                </div>
            );
    }
}

export default CreateUpdateCard;