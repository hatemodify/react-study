import {ADD_PLAYER, CHANGE_SCORE} from "../actionType";


const playerInitionalState = {
  title: 'redux scoreboard',
  players: [
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4},
  ],
}

const maxId = 4

export const playerReducer = (state = playerInitionalState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, {name:action.name, score:0, id: state.players.length + 1}]
      }
    case CHANGE_SCORE:
      state.players.forEach(item=>{
        if(item.id === action.id)
         item.score += action.delta
      })
      return{
        ...state,
        players:[...state.players]
      }
    default:
      return state
  }
}
