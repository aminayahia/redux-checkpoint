/*const initialState = 
   [
       {
            id: 1,
            description: "description1",
            isDone: true
        },
        {
            id: 2,
            description: "description2",
            isDone: true
        }
    ]*/


export const toDoReducer = (state=[], action) => {
    let toDoReducer = null;
    const {type} = action;
    switch (type) {
        case "ADD":
            toDoReducer = [...state,{id: Math.random(),description: action.description,isDone:action.isDone }]
             console.log(toDoReducer)
            return toDoReducer
        case "REMOVE":
            toDoReducer = [...state];
            toDoReducer = toDoReducer.filter(toDoReducer => toDoReducer.id !== action.id)
                console.log(toDoReducer)
            return toDoReducer
        default:
            return state
    }
}