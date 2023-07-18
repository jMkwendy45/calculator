import React, { useReducer } from 'react'
import Button from './Button'
import calc from '../Style/calc.css'

// import{useReducer} from react
export const ACTIONS = {
  ADD_DIGIT:"add_digit",
  CHOOSE_OPERATION:"choose_operation",
  CLEAR:"clear",
  DELETE_DIGIT:"delete-digit",
  EVALUATE:"evaluate",
  SUBSTRACT_DIGIT:"substract-digti",
  MULTIPLY_DIGIT:"multiply_digit",
  DIVIDE_DIGTI:"divide_digit"
}

 function Calc() {
  // const[{currentOperand,previousOperand,operation},dispatch] =useReducer(reducer)
  return (
    <div className='mai'>
      <div className='main-container'>
        <div className="operands">
        <div className="previous-operand">
        </div>
        <div className="current-operand"></div>
        </div>
        <div className='first_button_div'>
            <Button/>
        </div>

      </div>
    </div>
  )
}
export default Calc