import {useReducer } from 'react';


/** O userReducer é usado quando o userState 
 * se tornar muito complexo, ou se existirem 
 * muitos useStates no codigo
 */

//definição do reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state,count: state.count + 1}
    case 'decrement':
      return {...state,count: state.count - 1}
    case 'newUserInput':
      return {...state, userInput: action.payload}
    case 'tgColor':
      return {...state, color: !state.color}      
    default:
     throw new Error()
  }
}

//pode-se usar enumerais para as strings
const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TG_COLOR: 'tgColor' 
}

function App() {
  const [state,dispatch] = useReducer(reducer, {count: 0, userInput: '', color: false})
  
  /** foram colocadas no reducer acima */
  //const [userInput, setUserInput] = useState('')
  //const [color,setColor]= useState(false)

  return (
    <main className="App" style={{ color: state.color ? '#FFF' : '#FFF952' }}>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) => dispatch({type: ACTION.NEW_USER_INPUT,payload: e.target.value})}
      />
      <br /><br />
      <p>{state.count}</p>
      <section>
        <button onClick={(() => dispatch({type: ACTION.DECREMENT}))}>-</button>
        <button onClick={(() => dispatch({type: ACTION.INCREMENT}))}>+</button>
        <button onClick={(() => dispatch({type: ACTION.TG_COLOR}))}>Color</button>
      </section>
      <br /><br />
      <p>{state.userInput}</p>
    </main>
  );
}

export default App;
