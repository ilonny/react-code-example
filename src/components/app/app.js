import React, {Component} from 'react'
import {Layout} from 'antd'
import Header from '../header'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Provider as I18nProvider} from '../../contexts/i18n'
import StaffListPage from '../routes/staff-list-page'
import StaffDetailPage from '../routes/staff-detail-page'
import './app.css'

class App extends Component {
  state = {
    lang: 'en',
  }
  setLang = lang => this.setState({lang})

  render() {
    const {lang} = this.state
    return (
      <I18nProvider value={lang}>
        <Layout>
          <Header lang={lang} setLang={this.setLang} />
          <main role="main">
            <Switch>
              <Route
                path={'/staff-list'}
                render={params => {
                  return <StaffListPage />
                }}
              />
              <Route
                path={'/staff/:id'}
                render={params => {
                  return <StaffDetailPage />
                }}
              />
              <Redirect from={'/'} exact to={'/staff-list'} />
              <Route render={() => <h4>not found</h4>} />
            </Switch>
          </main>
        </Layout>
      </I18nProvider>
    )
  }
}

export default App
