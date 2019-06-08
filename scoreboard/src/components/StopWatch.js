import React from 'react';

export class StopWatch extends React.Component {
  tickRef;

  state = {
    timer: 0,
    isRunning: false
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stop Watch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopWatch}>{this.state.isRunning ? `Stop` : `Start`}</button>
        <button onClick={this.stopWatchStop}>Reset</button>
      </div>
    );
  }


  //dom 이 렌더링 된 직후에 호출
  //주로 네트워크 호출 3rd 라이브러리 로딩 등의 역할 수행
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }

  //dom이 파괴되기 직전에 호출
  //리소스 해제 등의 역할을 수행
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

  tick = () => {
    if (this.state.isRunning) {
      this.setState(prevState => ({
        timer: prevState.timer + 1
      }))
    }
  }
  handleStopWatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }))
  }
  stopWatchStop = () => {
    this.setState(prevState => ({
      timer:0,
      isRunning: false
    }))
  }
}
