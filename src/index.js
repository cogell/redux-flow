// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import UI from './ui'
import createStore from './arch/create-store'

const App = () => {
  const store = createStore()

  return (
    <Provider store={store}>
      <UI />
    </Provider>
  )
}

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(<App />, root)
}
