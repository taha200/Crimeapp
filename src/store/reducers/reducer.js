import { 
    login,
    logout,
    insertCrime,
    insertComplain,
    insertMissPerson
} from "../actions/actionNames";
const initialState = {
    isLoggedIn:false,
    userName:'',
    crimes:[],
    complains:[],
    missingPersons:[]
}

export default (state = initialState,action)=>{
    switch(action.type){
        case login:
        return{
            ...state,
            isLoggedIn:true,
            userName:action.payload
        }
       
        case logout:
        return {
            ...state,
            isLoggedIn:false,
            userName:''
        }
        case insertCrime:
        return{
            ...state,
            crimes:[...state.crimes,action.payload]
        }
        case insertComplain:
        return{
            ...state,
            complains:[...state.complains,action.payload]
        }
        case insertMissPerson:
        return{
 ...state,
 missingPersons:[...state.missingPersons,action.payload]
        }
       
        default:
        return state
    }
}
