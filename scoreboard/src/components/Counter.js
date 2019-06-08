import React from 'react';
import PropTypes from 'prop-types'
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";

import style from '../pages/scoreboard/Scoreboard.module.css';
import classNames from 'classnames';


const Counter = ({id, score, changeScore}) => {

    return (

        <div className={style.counter}>
            <button className={classNames(style["counter-action"], style.decrement)}
                    onClick={() => changeScore(id, -1)}> -
            </button>
            <span className={style["counter-score"]}>{score}</span>
            <button className={classNames(style["counter-action"], style.increment)}
                    onClick={() => changeScore(id, 1)}> +
            </button>
        </div>
    );
}

Counter.propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
}

const mapActionToProps = (dispatch) => ({
    changeScore: (id, delta) => dispatch(changeScore(id, delta))
})


export default connect(null, mapActionToProps)(Counter)
