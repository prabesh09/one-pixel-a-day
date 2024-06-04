import Pixel from "./Pixel"

const PixelContainer = ({ name, days }) => {
    const pixel = [];
    for (let i = 0; i < days; i++) {
        pixel.push(<Pixel name={name} order={i} key={i} />)
    }
    return (
        <div className="flex justify-center flex-wrap w-[220px] gap-[1px] m-auto">
            {pixel}
        </div>
    )
}

export default PixelContainer