import axios from 'axios'

export default async function getLoanDetailsData(loanRequest, dispatch) {
  console.log('getting loan details')
  console.log(loanRequest)
  try {
   var details = await axios.post(
     "http://localhost:8080/generate-plan",loanRequest
   )

   dispatch({
    payload : details.data,
    type : "GET_LOAN_DETAILS"
    
   })
   

  } catch(err) {
    console.error(err)
  }

  
   
}