import React from 'react'
import {Button} from 'antd'
import './lang-select.css'

function LangSelect({currentLang, langs = ['en', 'ru'], setLang}) {
  return (
    <div className="lang-select">
      {langs.map(lang => (
        <Button
          onClick={() => setLang(lang)}
          type={lang === currentLang ? 'ghost' : 'primary'}
          className="button"
          key={lang}
        >
          {lang}
        </Button>
      ))}
    </div>
  )
}

export default LangSelect
