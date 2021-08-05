import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import { interval, Observable } from 'rxjs';
import {map} from 'rxjs/operators'

const clockObservable$ = interval(1000);

export default function BasicObserver() {

    const [time, setTime] = useState()

    
    let val1 = 0;
    useEffect(() => {
      clockObservable$.subscribe(setTime)
    },[])

    setTimeout(() => {
      console.log(val1)
      val1++
    } , 5000)


      return (
          <>
            SecondsWatch <br/>
            {time}
          </>
      )
}
