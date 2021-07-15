const ADD = "ADD";
const EDIT = "EDIT";
const REMOVE = "REMOVE";
export const add = (description,isDone) => {
    const action={  
        type: ADD,
        description,
        isDone
    } 
    return action;
    console.log("ADD",action)
} 

export const edit = () => {
    return {
        type: EDIT
    }
}


export const remove = (id) => {
    const action={  
        type: REMOVE,
        id
    }
    return action;
    console.log("remo",action)
}


export const filter = () => {
    return {
        type: "FILTER"
    }
}