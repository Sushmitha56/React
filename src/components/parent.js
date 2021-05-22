import REACT, { Component } from 'react';
import ChildComponent from './child';


class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            parentName:'parent'
        }
        this.parent=this.parent.bind(this)
    }
    parent(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
    render(){
        return (            
            <ChildComponent greetHandler={this.parent}/>            
        )
    }
}

export default Parent 