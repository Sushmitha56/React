import REACT, { Component } from 'react';
class EventBind extends Component{
    constructor(){
        super()
        this.state={
            message:'hello'
        }
        // this.eventBind=this.eventBind.bind(this)
    }
    // eventBind(){
    //     this.setState({
    //         message:'Good bye!'
    //     })
    //     console.log(this)

    // }
    eventBind=()=>{
        this.setState({
            message:'Good bye!'
        })
    }
    render(){
        return(
            <div>
                <h4>{this.state.message}</h4>
                {/* <button onClick={this.eventBind.bind(this)}>click</button> */}
                {/* <button onClick={()=>this.eventBind()}>click</button> */}
                <button onClick={this.eventBind}>click</button>
                
            </div>
        )
    }
}
export default EventBind