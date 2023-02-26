
import {combineReducers} from "redux"
import reducerMoney from "./reducerMoney"

 const reducers = combineReducers({
    amount : reducerMoney
})

export default reducers