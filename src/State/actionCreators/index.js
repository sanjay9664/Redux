
export const dispositMoney = (amount)=>{ 
    return (dispatch)=>{
        dispatch({
            type : "deposit",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type:"withdraw",
            payload:amount
        })
    }
}


