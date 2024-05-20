import { useEffect, useState } from "react"
import { BiSolidMoon } from "react-icons/bi";
import { BiSolidSun } from "react-icons/bi";

const DarkModeButton = () => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html')?.classList.add('dark')
        } else {
            document.querySelector('html')?.classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <>
            {theme === "dark" ? (
                <button onClick={handleChangeTheme}>
                    <BiSolidSun className=" text-teal-700 hover:text-teal-600 size-8" />
                </button>
            ) : (
                <button onClick={handleChangeTheme}>
                    <BiSolidMoon className=" text-teal-950 hover:text-teal-800 size-8" />
                </button>
            )}

        </>
    )
}

export default DarkModeButton