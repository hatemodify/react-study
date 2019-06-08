import React from 'react';

import style from './Scoreboard.module.css';
import Header from "../../components/Header";
import {Player} from "../../components/Player";
import AddPlayerForm from "../../components/AddPlayerForm";
import {connect} from "react-redux";


class ScoreBoard extends React.Component {

  // 1) player 삭제 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log(id);

    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  // handleChangeScore = (id, delta) => {
  //   console.log(id, delta);
  //
  //
  //   this.setState(prevState => {
  //     this.state.players.forEach(item => {
  //       if (item.id === id) {
  //         item.score += delta;
  //       }
  //     });
  //     return {
  //       players: [...prevState.players]
  //     }
  //   })
  // }

  // handleAddPlayer = (name) => {
  //   console.log(name);
  //   this.setState(prevState=>({
  //
  //     players:[...prevState.players, {name, score:0, id: prevState.players.length + 1 }]
  //   }))
  //
  // }

  render() {
    return (
        <div className={style.scoreboard}>
          <Header players={this.props.players} />

          {
            this.props.players.map(player => (
                <Player name={player.name} key={player.id} id={player.id}
                        score={player.score}
                        removePlayer={this.handleRemovePlayer}
                        changeScore={this.handleChangeScore}/>
            ))
          }
          <AddPlayerForm addPlayer={this.handleAddPlayer}/>
        </div>
    );
  }
}

const mapStateToProps = (state) =>({
  players:state.playerReducer.players
})




export default connect(mapStateToProps)(ScoreBoard);