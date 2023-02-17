import { batch, Component, createSignal, For } from 'solid-js'
import { createLocalStore, removeIndex } from '../../utils/store'

import { FiTrash } from 'solid-icons/fi'

interface TodoItem {
  title: string
  done: boolean
}

export const TodoPage: Component = () => {
  const [newTitle, setNewTitle] = createSignal<string>('')
  const [todos, setTodos] = createLocalStore<TodoItem[]>('todos', [])

  const addTodo = (e: SubmitEvent) => {
    e.preventDefault()
    batch(() => {
      setTodos(todos.length, {
        title: newTitle(),
        done: false,
      })
      setNewTitle('')
    })
  }

  return (
    <div class="max-w-md mx-auto my-10 ">
      <h3 class="text-center text-2xl capitalize font-semibold mb-5 ">
        Todo Example - with SolidJS
      </h3>

      <form onsubmit={addTodo}>
        <div>
          <input
            type="text"
            required
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter todo ..."
            value={newTitle()}
            onInput={(e) => setNewTitle(e.currentTarget.value)}
          />
          <button class="mt-5 btn-primary">Add todo</button>
        </div>
      </form>
      <div class="max-w-full mx-auto mt-5 py-2 px-4  shadow-lg empty:mt-0 empty:py-0">
        <For each={todos}>
          {(t, i) => {
            return (
              <div class="mt-2 flex items-center justify-between">
                <div class="flex items-center gap-5">
                  <input
                    type="checkbox"
                    checked={t.done}
                    class="w-5 aspect-square text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) =>
                      setTodos(i(), 'done', e.currentTarget.checked)
                    }
                  />
                  <input
                    type="text"
                    value={t.title}
                    onChange={(e) =>
                      setTodos(i(), 'title', e.currentTarget.value)
                    }
                  />
                </div>

                <button
                  class="btn-icon-rounded"
                  onClick={() => setTodos((t) => removeIndex(t, i()))}
                >
                  <span class="sr-only"> Remove todo </span>
                  <FiTrash />
                </button>
              </div>
            )
          }}
        </For>
      </div>
    </div>
  )
}
