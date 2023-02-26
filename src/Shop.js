import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {actionCreators} from "./State/index"
import { bindActionCreators } from 'redux'
const Shop = () => {
  const balance = useSelector(state=>state.amount)
  const dispatch = useDispatch()
  const{withdrawMoney,dispositMoney}  = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
     <h1>Deposit / Withdraw Money</h1>
       {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
         Update Balance : 
       <button className="btn btn-primary mx-2"  onClick={()=>{dispatch(actionCreators.dispositMoney(100))}}>+</button> */}
       <button className="btn btn-primary mx-2" style={{padding:"20px"}} onClick={()=>(withdrawMoney(100))}>-</button>
         Update Balance : ({balance})
       <button className="btn btn-primary mx-2"  style={{padding :"20px"}}  onClick={()=>(dispositMoney(100))}>+</button>
    </div>
  )
}

export default Shop
