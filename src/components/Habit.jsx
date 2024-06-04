import PixelContainer from './PixelContainer'

const Habit = ({ habit, days }) => {
    return (
        <div>
            <h1 className='text-center mb-2'>{habit}</h1>
            <PixelContainer name={habit} days={days} />
        </div>

    )
}

export default Habit