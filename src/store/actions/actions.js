import { 
    login,
    logout,
    insertCrime,
    insertComplain,
    insertMissPerson
} from "./actionNames";


export function LoginAction(username){
    return dispatch=>{
        dispatch({
            type:login,
            payload:username
        })
    }
}
export function insertCrimeAction(crime){
    return dispatch=>{
        dispatch({
            type:insertCrime,
            payload:crime
        })
    }
}
export function insertComplaint(comp){
    return dispatch=>{
        dispatch({
            type:insertComplain,
            payload:comp
        })
    }
}
export function insertMissingPerson(misperson){
    return dispatch=>{
        dispatch({
            type:insertMissPerson,
            payload:misperson
        })
    }
}
export function LogoutAction(){
    return dispatch=>{
        dispatch({
            type:logout
        })
    }
}
