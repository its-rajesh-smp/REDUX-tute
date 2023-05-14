const redux = require("redux")

// REDUCER FUNCTION
const reducer = (state = { count: 10 }, action) => {

    switch (action.type) {
        case "INCREAMENT": {
            return { count: state.count + 1 }
        }
        case "DECREAMENT": {
            return { count: state.count - 1 }
        }
        default: {
            return state
        }
    }
}

// STORE
const store = redux.createStore(reducer)

// SUBSCRIBE
const printData = () => {
    const data = store.getState()
    console.log(data);
}
store.subscribe(printData)


// ACTIONS
const increament = { type: "INCREAMENT" }
const decreament = { type: "DECREAMENT" }


store.dispatch(increament)
store.dispatch(increament)
store.dispatch(increament)
store.dispatch(decreament)
store.dispatch(decreament)
store.dispatch(decreament)
