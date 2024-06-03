import { useState } from "react"

const Pixel = () => {
    const [bg, setBg] = useState(true)
    const backgroundColorHandler = () => {
        setBg(!bg)
    }
    return (
        <div className={`h-5 w-5 border-black cursor-pointer ${bg ? "bg-slate-200" : "bg-green-500"}`} onClick={backgroundColorHandler} >
        </div >
    )
}

export default Pixel