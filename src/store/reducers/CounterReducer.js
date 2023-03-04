let intialState={
    counter:0
}

export default function CounterReducer(state=intialState,action){
    
    if(action.type==='increment'){
        //if so,make a copy of 'state'
        return{
            ...state,
            //and update the copy with the new value
            counter: state.counter+1
        }
    }
    else if(action.type==='decrement'){
        //if so,make a copy of 'state'
        return{
            ...state,
            //and update the copy with the new value
            counter: state.counter-1
        }
    }
    //otherwise return the existing state unchanged
    return state
}