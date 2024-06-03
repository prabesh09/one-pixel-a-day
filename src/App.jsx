import { useState } from 'react'
import HabitController from './components/HabitController'

const App = () => {
  const [habit, setHabit] = useState([
    { title: "workout", days: 150 },
    { title: "exercise", days: 150 }
  ])

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