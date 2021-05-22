import REACT, { Component } from 'react';
class UserGreetings extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn:true
        }
    }
    render(){
        return this.state.isLoggedIn && <div>hello vishwas</div>
        // return this.state.isLoggedIn?<div>hello vishwas</div>:<div>hello guest</div>
    }
    // render(){
    //     let message
    //     if(this.state.isLoggedIn){
    //         message=<div>hello vishwas</div>
    //     }else {
    //         message=<div>hello guest</div>
    //     }
    //     return <div>{message}</div>
    // }
    // render(){            
    //     if (this.state.isLoggedIn){
    //         return <div>hello vishwas</div>
    //     } else{
    //         return <div>hello Guest</div>
    //     }
        
        
    // }
}
export default UserGreetings