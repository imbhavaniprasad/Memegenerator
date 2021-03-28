import React, {Component} from 'react';
class Inform extends Component{
constructor(){
    super();
    this.state ={
        firstName : "",
        lastName : "",
        isChecked : true
    }
    this.handleChange = this.handleChange.bind(this);
}
handleChange(event){
    let target = event.target;
    let value = target.type==='checkbox' ? target.checked : target.value;
    let name = target.name;
    // console.log(target.checked);
    this.setState({
        [name] : value
    })
}
render(){
    return(
        <div>
            <form>
                <input type="text" value={this.state.firstName} name='firstName' onChange={this.handleChange}/>
                <input type="text" value={this.state.lastName} name='lastName' onChange={this.handleChange}/>
                <input type="checkbox" name = "isChecked" checked = {this.state.isChecked} onChange={this.handleChange}/>Accept T&C
            </form>
        </div>
    )
}
}
export default Inform;