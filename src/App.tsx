import { Component } from 'solid-js'
import { Route, Routes } from '@solidjs/router'

import { AjaxPage, HomePage, TodoPage } from './views'

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={HomePage} />
      <Route path="/todo" component={TodoPage} />
      <Route path="/ajax" component={AjaxPage} />
    </Routes>
  )
}

export default App
