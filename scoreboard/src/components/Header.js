import React from 'react';
import {Statistics} from "./Statistics";
import {StopWatch} from "./StopWatch";
import PropTypes from 'prop-types'
import {connect} from "react-redux";

const Header = ({players , title}) => {

  // destruct assignment
  // const {players , title} = props;
  return (
    <header>
      <Statistics players={players}/>
      <h1>{title}</h1>
      <StopWatch/>
    </header>
  );
}


Header.propTypes ={
  title:PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    name:PropTypes.string,
    score:PropTypes.number,
    id:PropTypes.number
  }))
}

Header.defaultProps = {
  title:'default Title'
}


const mapStateTProps = (state) =>({
  title: state.playerReducer.title
})

export default connect(mapStateTProps)(Header)
