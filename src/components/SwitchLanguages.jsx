import React, {useContext} from 'react'
import LanguageContext from '../context/LanguageContext'
import './switch.styles.css'

function SwitchLanguages() {

  const { selectEng, selectEsp} = useContext(LanguageContext)

    return (
    <div className="switch">
            <button className="on" onClick={selectEng}> 
               English
           </button>

            <button className='off' onClick={selectEsp}>
               Español
           </button>
    </div>
    )
}

export default SwitchLanguages
