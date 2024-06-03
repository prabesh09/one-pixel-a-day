import Habit from "./Habit"

const HabitController = ({ habits }) => {
    return (
        <div className="p-5">
            {
                habits.map((habit, index) => (
                    <Habit key={index} habit={habit.title} days={habit.days} />
                ))
            }
        </div>
    )
}

export default HabitController