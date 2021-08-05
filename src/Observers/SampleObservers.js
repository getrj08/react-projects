import { useEffect, useState } from 'react';
import { of , Observable, timer , from } from 'rxjs';
import { delay, tap, mergeMap, repeat, map, concatMap ,exhaustMap , take, takeWhile , } from 'rxjs/operators';
import {ajax} from 'rxjs/ajax'
import { interval } from 'rxjs';


const SampleObservers = () => {

  const url = 'https://jsonplaceholder.typicode.com/users/'
  let errorCount = 0;
  let userSubscription;

  var observer = {
    next : function(val) {
      console.log(val.response);
    },
    error : function(val) {
      console.error(val)
    },
    complete : function() {
      console.log('completed')
    } 
 }
 
  async function getUser(id)  {
    let postUrl = url + id;
    const userObs$ = ajax(postUrl);
    userObs$
    .pipe(
      takeWhile((val,index) => {
        console.log(val.status)
          return val.status < 400
      }))
    .subscribe((val) => {
      if(val.status === 200) {
        console.log(val.response)
      }
    })
    
  }
  

    useEffect(() => {
      interval(5000)
        .subscribe((val) => {
          getUser(val)
      })
    } , [])
    
    

    return <></>


}

export default SampleObservers