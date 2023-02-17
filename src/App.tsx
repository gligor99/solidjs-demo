import { Component } from 'solid-js'
import { Route, Routes } from '@solidjs/router'

import { HomePage, TodoPage } from './views'

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={HomePage} />
      <Route path="/todo" component={TodoPage} />
    </Routes>
  )
}

export default App
