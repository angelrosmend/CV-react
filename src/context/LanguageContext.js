import React,{useState, useEffect,createContext} from 'react'
import en from '../languages/en.json'
import es from '../languages/es.json'

export const LanguageContext = createContext()

export const LanguageProvider = (props) => {
    const [language, setLanguage] = useState(es)
    const [clicked, setClicked] = useState(false)
    const localData = localStorage.getItem('lang');
        
    const selectEsp = () => {
        setLanguage(es)
        setClicked(false)
    }

    const selectEng = () => {
        setLanguage(en)
        setClicked(true)
    }

    useEffect(() => {
        window.localStorage.setItem('lang', JSON.stringify(language))
    }, [language])

    return(
        <LanguageContext.Provider value={{language,clicked, selectEsp, selectEng}}>
            {props.children}
        </LanguageContext.Provider>
    )
    

}


export default LanguageContext
