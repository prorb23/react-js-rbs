import './App.css'
import { useState } from 'react';
function App() {
  let [counter , setCounter] = useState(15)
  // let counter = 15
  
  const addValue = () => {
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1) --> This will not update simeltaneously as react diffing algo analyzes it all doing same task 
    //-> Instead of this , if the scenario persists we can use callback feature provided by the setter function in the use state 

    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    // this will work 
    
    /*
    IMPORTANT NOTE: React useState Updates

    1. React state updates are ASYNCHRONOUS and BATCHED.
      - Multiple setState calls in the same event read the SAME old state.

    2. This will NOT work as expected:
      setCounter(counter + 1)
      setCounter(counter + 1)
      // counter increases only once

    3. Reason:
      - React batches updates
      - All calls use the stale value of `counter`

    4. Correct approach (Callback form):
      setCounter(prev => prev + 1)

    5. Why callback works:
      - `prev` always contains the latest updated state
      - Updates are applied sequentially

    RULE TO REMEMBER:
    If new state depends on previous state → ALWAYS use callback form.
*/

  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
