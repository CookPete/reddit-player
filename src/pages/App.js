import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import 'normalize.css/normalize.css'
import '../styles/defaults.scss'
import classNames from './App.scss'
import { updateFavicon } from '../utils'
import { APP_NAME, AUTHOR_URL, SOURCE_URL, SEPARATOR } from '../config'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };
  componentDidMount () {
    const { params, location } = this.props
    updateFavicon(params, location.pathname)
  }
  componentWillReceiveProps ({ params, location }) {
    updateFavicon(params, location.pathname)
  }
  render () {
    return (
      <div className={classNames.app}>
        <header className={classNames.header}>
          <h1 className={classNames.title}>
            <Link to='/'>
              {APP_NAME}
            </Link>
          </h1>
          {SEPARATOR}
          by <a href={AUTHOR_URL} target='_blank'>CookPete</a>
          {SEPARATOR}
          <a href={SOURCE_URL} target='_blank'>Source</a>
        </header>
        {this.props.children}
      </div>
    )
  }
}
