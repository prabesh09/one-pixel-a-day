import Habit from "./components/Habit"

const App = () => {
  return (
    <div className="p-5">
      <Habit habit={"habit"} days={150} />
    </div>
  )
}

export default App