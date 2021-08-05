

export default function(state , action) {
    console.log('received dispatch event')
    console.log(action)
    switch(action.type) {
        case "GET_LOAN_DETAILS" :  return {
            ...state,
            'loanData' : action.payload,
            'showValues' : true
        }
    }
}