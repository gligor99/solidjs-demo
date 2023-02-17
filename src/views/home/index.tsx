import { Component, createEffect, createSignal, onCleanup } from 'solid-js'
import { FirstComponent } from '../../components'

export const HomePage: Component = () => {
  const [name, setName] = createSignal<string>('Luka')
  const [state] = createSignal<string>('BIH')
  const [count, setCount] = createSignal<number>(0),
    timer = setInterval(() => {
      setCount(count() + 1)
    }, 1000)

  onCleanup(() => clearInterval(timer))

  // Effects
  createEffect(() => {
    setInterval(() => {
      if (name() === 'Luka') setName('Test')
      else setName('Luka')
    }, 1000)
  })

  return (
    <div>
      <h1>Home Page</h1>
      <h1 class="text-4xl underline  font-bold">Hello, world! {state()}</h1>
      <FirstComponent name={name()} />
      <div>{count()}</div>
    </div>
  )
}
