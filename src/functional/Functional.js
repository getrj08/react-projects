import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

export default function Functional() {

    const [counter,setCounter] = useState(0)

    useEffect(() => {
        console.log(`use effect with current counter value  ${counter}`)
        document.getElementsByClassName('para').innerHTML = `current counter value  ${counter}`
    } , [counter])

    return (
        <div>
            <br/><br/>
            <Button variant='success' onClick={() => setCounter(counter+1)}>Counter</Button>{' '}
            <Button variant='danger' onClick={() => setCounter(0)} >Reset</Button>
            <br/><br/><br/>
            <p>{counter}</p>
            <p className='para'></p>
        </div>
    )
} 