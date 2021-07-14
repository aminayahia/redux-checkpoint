export const add = (description,isDone) => {
    const action={  
        type: "ADD",
        description,
        isDone
    } 
    return action;
    console.log("ADD",action)
} 

export const edit = () => {
    return {
        type: "EDIT"
    }
}


export const remove = () => {
    return {
        type: "REMOVE"
    }
}


export const filter = () => {
    return {
        type: "FILTER"
    }
}