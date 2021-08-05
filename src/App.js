import logo from './logo.svg';
import './App.css';
import {from} from "rxjs";
import {delay, map, mergeMap} from "rxjs/operators"
import { useEffect, useState } from 'react';
import SampleStepChart from './components/SampleStepChart';
import ToggleComponents from './components/ToggleComponents';

function App() {
  const [number, setNumber] = useState(0)

  let numbersObservable = from([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29])
  let squareNumbers = numbersObservable.pipe(
    mergeMap(val => from([val]).pipe(delay(1000 * val))),
    map(val => val * val)
  )

  useEffect(() => {
    let numbers = squareNumbers.subscribe(sqnm => {
      setNumber(sqnm)
    });

    return() => numbers.unsubscribe()
  },[])
  

  return (
    <div className="App">
      Square Number : {number}<br/>
      <ToggleComponents />
    </div>
  );
}

export default App;
