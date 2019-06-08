import React from 'react';
import Counter from "./Counter";
import PropTypes from 'prop-types'

import style from '../pages/scoreboard/Scoreboard.module.css'


export class Player extends React.PureComponent {

  static propTypes = {
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func,
    id:PropTypes.number,
    name:PropTypes.string.isRequired
  }


  render() {
    // console.log(name, 'render')

    const {id, score, name, changeScore, removePlayer} = this.props


    return (
      <div className={style["player"]}>
        <span className={style["player-name"]}>
          <button className={style["remove-player"]}
                  onClick={() => removePlayer(id)}>x</button>
        </span>
        <span className={style["player-name"]}>{name}</span>
        <Counter score={score} id={id} changeScore={changeScore}/>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps)

  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log(nextProps)
    // 변경될 PROPS를 비교하여 TRUE OR FALSE를 리턴
    return nextProps.score !== this.props.score;
  }
}


