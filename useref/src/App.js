import { useState,useRef } from 'react';

function App() {
  const [randomInput, setRandomInput] = useState('');
  const [seconds, setSeconds] = useState(0);

 /** diferentemete do useState o useRef não faz 
  * uma nova renderização toda vez que 
  * é usado
  */
  const renders = useRef(0)
  const timerId = useRef()

  const handleChange = (e) => {
    setRandomInput(e.target.value);
   //contador de renderizações
    renders.current++
  }

  const startTimer = () =>{
    timerId.current = setInterval(() => {
      renders.current++
      setSeconds(prev => prev + 1)
    },1000)
  }

  const stopTimer = () => {
    clearInterval(timerId.current)
    timerId.current = 0
  }

  const resetTimer = () => {
         stopTimer()
         if(seconds){
           renders.current++
           setSeconds(0)
         }
  }
 

  return (
    <main className="App">
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p>Renders: {renders.current}</p>
      <br /><br />
      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
      <br /><br />
      <p>Seconds: {seconds}</p>
      <br /><br />
    </main>
  );
}

export default App;

