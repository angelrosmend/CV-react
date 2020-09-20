import React,{useState, createContext, useContext} from 'react'
import en from '../languages/en.json'
import es from '../languages/es.json'




export const LanguageContext = createContext()

export const LanguageProvider = (props) => {
    const [language, setLanguage] = useState(en)
    
    const selectEng = () => setLanguage(en)
    const selectEsp = () => setLanguage(es)


    return(
        <LanguageContext.Provider value={{language, selectEsp, selectEng}}>
            {props.children}
        </LanguageContext.Provider>
    )
    

}






export default LanguageContext
