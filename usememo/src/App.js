import { useState, useEffect, useMemo, useCallback } from 'react'
/**Função expensiva, que requer
 * grande quantidade de memoria, como por
 * exemplo uma função recursiva como abaixo 
const fib = (n) => {
	return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}*/

function App() {
	const [userNumber, setUserNumber] = useState('')
	const [randomInput, setRandomInput] = useState('')

	/**Função expensiva, que requer
	 * grande quantidade de memoria, como por
	 * exemplo uma função recursiva como abaixo */
	//como agora está dentro da função e ser recursivo precisa do usecallback
	const fib = useCallback((n) => {
		return n <= 1 ? n : fib(n - 1) + fib(n - 2)
	}, [])

	/** Sem o use memo o processo de calculo é lento */
	//const fibNumber = fib(userNumber)

	//o resultado é memorizado e não precisa ser recalculado toda vez
	const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib])

	//useeffect  - sempre que o fibnumber mudar o useeffect é renderizado
	useEffect(() => {
		console.log('New number')
	}, [fibNumber])

	return (
		<main className='App'>
			<label>Fibonacci Sequence:</label>
			<input
				type='number'
				value={userNumber}
				placeholder='Position'
				onChange={(e) => setUserNumber(e.target.value)}
			/>
			<p>Number: {fibNumber || '--'}</p>
			<br />
			<br />
			<label>Random Input:</label>
			<input
				type='text'
				value={randomInput}
				placeholder='Random Input'
				onChange={(e) => setRandomInput(e.target.value)}
			/>
			<p>{randomInput}</p>
		</main>
	)
}

export default App
