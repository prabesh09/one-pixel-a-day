import { useEffect, useState } from "react"

const Pixel = ({ name, order }) => {
    const id = `${name}_${order}`;

    const [bg, setBg] = useState(() => {
        const background = localStorage.getItem(id);
        return background ? JSON.parse(background) : true;
    })

    const backgroundColorHandler = () => {
        setBg(!bg)
    }

    useEffect(() => {
        localStorage.setItem(id, JSON.stringify(bg));
    }, [bg, id])

    return (
        <div className={`h-5 w-5 border-black cursor-pointer ${bg ? "bg-slate-200" : "bg-green-500"}`} onClick={backgroundColorHandler} >
        </div >
    )
}

export default Pixel