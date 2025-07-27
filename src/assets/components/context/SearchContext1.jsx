import { Children, createContext, useReducer } from "react";

const INITIAL_STATE ={
    city:"undefined",
    date:[],
    options:{
        adult:"undefined",
        children:"undefined",
        room:"undefined",
    }
}

export const SearchContext1= createContext(INITIAL_STATE);

const SearchReducer=(state,action)=>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload;
            case "RESET_SEARCH":
                return INITIAL_STATE;
                default:
                    return state;
                
    }
}

export const SearchContext1Provider=({children})=>{
    const [state, dispatch]= useReducer(SearchReducer,INITIAL_STATE);
return(
    <SearchContext1.Provider value={{city:state.city, date:state.date,options:state.options,dispatch,

    }}>
{children}
    </SearchContext1.Provider>
)}

