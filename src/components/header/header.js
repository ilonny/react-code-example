import React from 'react'
import {NavLink} from 'react-router-dom'
import {Menu} from 'antd'
import LangSelect from '../lang-select'
import i18n from '../../decorators/i18n'
import './header.css'

const Header = ({lang, setLang, t}) => (
  <header className="header">
    <Menu
      className="menu"
      theme="dark"
      mode="horizontal"
      style={{float: 'left', backgroundColor: 'transparent'}}
    >
      <Menu.Item>
        <NavLink to={'/staff-list'} activeStyle={{color: 'white'}}>
          {t('staff list')}
        </NavLink>
      </Menu.Item>
    </Menu>
    <LangSelect currentLang={lang} setLang={setLang} />
  </header>
)

export default i18n(Header)
