import React, {useContext} from 'react'
import LanguageContext from '../context/LanguageContext'
import './switch.styles.css'

function SwitchLanguages() {

  const {clicked, selectEng, selectEsp} = useContext(LanguageContext)


    return (
    <div className="switch">
            <button className={clicked ? 'off' : 'on'} onClick={selectEsp}> 
            Español
           </button>

            <button className={clicked ? 'on' : 'off'} onClick={selectEng}>
            English
           </button>
    </div>
    )
}

export default SwitchLanguages
