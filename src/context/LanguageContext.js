import React,{useState, createContext, useContext} from 'react'
import en from '../languages/en.json'
import es from '../languages/es.json'

export const LanguageContext = createContext()

export const LanguageProvider = (props) => {
    const [language, setLanguage] = useState(es)
    const [clicked, setClicked] = useState(false)

    const selectEsp = () => {
        setLanguage(es)
        setClicked(false)
    }
    const selectEng = () => {
        setLanguage(en)
        setClicked(true)
    }

    return(
        <LanguageContext.Provider value={{language,clicked, selectEsp, selectEng}}>
            {props.children}
        </LanguageContext.Provider>
    )
    

}


export default LanguageContext
