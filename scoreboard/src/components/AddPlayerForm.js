import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

class AddPlayerForm extends React.Component {

  textInput = React.createRef();



  handleSubmit = (e)=>{
    e.preventDefault();
    //this.textInput.current = document.getElementById('id')
    this.props.addPlayer(this.textInput.current.value);
    e.currentTarget.reset();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" placeholder="enter a players name" ref={this.textInput} onChange={this.handleChange}/>
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}


const mapActionToProps = (dispatch) =>({
  addPlayer:(name)=>dispatch(addPlayer(name))
})


export default connect(null, mapActionToProps)(AddPlayerForm)
