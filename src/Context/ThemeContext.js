import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [lightTheme, setLightTheme] = useState(true) 

    const handleTheme = () => {
        setLightTheme(!lightTheme)
        console.log('Funcion por contexto')
    }

    const data = {
        lightTheme,
        handleTheme
    }

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider }
export default ThemeContext;