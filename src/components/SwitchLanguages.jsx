import React, {useState, useEffect} from 'react'
import './switch.styles.css'

function SwitchLanguages() {

   const en = {lang1: "English", lang2: "spanish"}
    const es = {lang1: "Ingles", lang2: "Espanol"}

    const switchLanguage = {lang: false,
                        on: {bg: '#eee', ui: '#ddd'},
                        off: {bg: '#ddd', ui: '#eee'}}



    const [language, setLanguage] = useState(switchLanguage)

    const {lang, on, off} = switchLanguage;
    const theme = lang ? on : off

    const setEng = () => {
      setLanguage(en)
    }

    const setSpa = () => {
        setLanguage(es)
    }


    return (
    <div className="switch">
            <button style={{background: theme.bg, color: theme.ui}}
                    onClick={setEng}> {language.lang1}
           </button>

            <button className={switchLanguage ? "on" : "off"}
                    onClick={setSpa}>{language.lang2}
           </button>
    </div>
    )
}

export default SwitchLanguages
