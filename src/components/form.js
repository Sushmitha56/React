import React, { Component } from 'react';
 
class Form extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            comments:'',
            topic:'react'
        }
    }
    nameChange=(event)=>{
        this.setState({
            name:event.target.value
        })

    }
    handleComments=(event)=>{
        this.setState({
            comments:event.target.value
        })

    }
    handleTopic=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    btnSubmit=(event)=>{
        alert(`${this.state.name} and ${this.statecomments} and ${this.state.topic}`)
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.btnSubmit}> 
                <div>
                    <label>Name</label>
                    <input type='text' value={this.state.name} onChange={this.nameChange}></input>                
                </div>
                <div>
                    <label>comments</label>
                    <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic}> onChange={this.handleTopicC}
                        <option value='angular'>Angular</option>
                        <option value='react'>react</option>
                        <option value='vue'>vue</option>
                    </select>
                </div>
                <button type='submit'>submit</button>

            </form>
            
        )
    }
    
}
export default Form