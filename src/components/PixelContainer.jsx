import Pixel from "./Pixel"

const PixelContainer = ({ days }) => {
    const pixel = [];
    for (let i = 0; i < days; i++) {
        pixel.push(<Pixel key={i} />)
    }
    return (
        <div className="flex justify-center flex-wrap w-[220px] gap-[1px] m-auto">
            {pixel}
        </div>
    )
}

export default PixelContainer