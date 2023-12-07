
//counterの初期値を0に設定
import {useCallback, useReducer} from 'react'

export type logic = "-" | "+" | "x" | "÷" | "=" | "c" | "nothing"

type Electronic = {
  result: number
  cul: logic
  addValue: number
}

/**
 * Calculates the result based on the given count state.
 * @param {object} countState - The count state object.
 * @param {number} countState.result - The current result value.
 * @param {number} countState.addValue - The value to be added, subtracted, multiplied, or divided with the result.
 * @param {string} countState.cul - The calculation operator (+, -, x, ÷).
 * @returns {number} - The calculated result.
 */
const mathElectronic = (countState: Electronic) => {
  if (countState.result === 0) return countState.addValue
  switch (countState.cul){
    case '-':
      return countState.result - countState.addValue
    case '+':
      return countState.result + countState.addValue
    case 'x':
      return countState.result * countState.addValue
    case '÷':
      return countState.result / countState.addValue
    default:
      return countState.addValue
  }
}


/**
 * A reducer function that performs increment, decrement, reset operations based on the given action.
 *
 * @param {Electronic} countState - The current state of the count.
 * @param {Object} action - The action object containing the flag and num values.
 * @param {logic} action.flag - The flag indicating the type of operation to be performed.
 * @param {number} action.num - The number value to be used in the operation.
 * @return {Electronic} The updated state of the count.
 */
function reducerFunc(countState: Electronic, action: {flag: logic, num: number}):Electronic
{
  //reducer関数にincrement、increment、reset処理を書く
  //どの処理を渡すかはactionを渡すことによって判断する

  const state = {...countState, cul: action.flag, addValue: action.num}
  console.log(state)

  let result = mathElectronic(state)
  console.log(result)
  console.log({...state, result: result})
  switch (action.flag){
    case '=':
      return {...state, result: result}
    case 'c':
      return {...state, result: 0, addValue: 0, cul: action.flag}
    case 'nothing':
      return {...state, result: 0, addValue: 0, cul: action.flag}
    default:
      return {...state, result: result}
  }
}


type CulElectronic = {
  state: Electronic
  setState: (data: {flag: logic, num: number}) => void
}
export const useCulElectronic = (initializeState: Electronic): CulElectronic => {
  const [state, dispatch] = useReducer(reducerFunc, initializeState)
  const toggle = useCallback((data: {flag: logic, num: number}) => {
    dispatch({...state, flag: data.flag, num: data.num});
  }, []);
  return {
    state,
    setState: toggle
  };
}
