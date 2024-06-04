import { useEffect, useState } from 'react'
import HabitController from './components/HabitController'

const App = () => {
  const [habit, setHabit] = useState(() => {
    const storedHabit = localStorage.getItem('habit')
    return storedHabit ? JSON.parse(storedHabit) : [{ title: "code", days: 150 }]
  })

  useEffect(() => {
    localStorage.setItem('habit', JSON.stringify(habit))
  }, [habit])

  const addHabitHandler = () => {
    if (title && days) {
      setHabit([...habit, { title: `${title}`, days: `${days}` }])
    }
  }

  const [title, setTitle] = useState();
  const [days, setDays] = useState();

  return (
    <div className='p-2'>
      <div className='flex gap-2 bg-red-300 p-2'>
        <input type="text" onChange={e => setTitle(e.target.value)} />
        <input type="number" onChange={e => setDays(e.target.value)} />
        <button onClick={addHabitHandler}>Add</button>
      </div>


      <HabitController habits={habit} />
    </div>
  )
}

export default App