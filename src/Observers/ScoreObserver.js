import { useState,useEffect, useReducer } from 'react';
import { of } from 'rxjs';
import { delay, tap, mergeMap, repeat, takeWhile } from 'rxjs/operators';
import { interval } from 'rxjs';
import ScoreTable from '../components/ScoreTable';

const initialState = {users : []}

const scoreReducer = (state = initialState , action) => {
  switch(action.type) {
    case 'add' : let currentUsers = state.users;
                const newUser = action.payload
                currentUsers.push(newUser)
                return {
                  ...state,
                  users : currentUsers
                }

  }
}

const Scores = () => {

    const [state , dispatch] = useReducer(scoreReducer , initialState)
    
    const [id , setId] = useState('')
    const [username , setUsername] = useState('')
    const [name , setName] = useState('')
    const [website , setWebsite] = useState('')

    const url = 'https://jsonplaceholder.typicode.com/users/'
    
    async function getUser(id)  {
      let userUrl = url + id;
      fetch(userUrl)
      .then(response => {
        if (response.ok) {
          response.json().then(user => {
            console.log(user);
            let newUserToAdd = {
              id : user.id,
              name : user.name,
              username : user.username,
              website : user.website
            }

            const action = {
              type : 'add',
              payload : newUserToAdd
            }

            dispatch(action)
            //setName(user.name)
            //setId(user.id)
            //setUsername(user.username)
            //setWebsite(user.website)
          });
        }
      }).catch(err => {
        console.error(err.message)
      }) 
    }

    const timeObs$ = interval(5000).pipe(
                              takeWhile(val => val < 11)
                      )

    useEffect(() => {
        const sub = timeObs$.subscribe((val) => {
          getUser(val)
      })
      return () => sub.unsubscribe()
     } , [])
     console.log('current users')
    console.log(state.users)
    return (<>
      <ScoreTable users = {state.users}/>
    </>)
}

function sampleUserBuild() {
  /*{state.users && state.users.length !== 0 && 
    state.users.map((user) => {
      let {id , name , username, website} = user;
      return (
        <div>
            id : {id} {' '}
            name : {name} {' '}
            username : {username} {' '}
            website : {website} {' '} 
        </div>
      )
      
    })
  }*/
}

export default Scores