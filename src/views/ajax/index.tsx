import { Component, createEffect, createResource, createSignal } from 'solid-js'

const fetchUser = async (id: number) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json()

export const AjaxPage: Component = () => {
  const [userId, setUserId] = createSignal<number>()
  const [user] = createResource(userId, fetchUser)

  createEffect(() => {
    console.log(user())
  })

  return (
    <div class="max-w-md mx-auto py-5">
      <input
        type="number"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Numeric Id"
        onInput={(e: any) => setUserId(e.currentTarget.value)}
      />
      <span>{user.loading && 'Loading...'}</span>
      <div class="mt-5">
        <pre>{JSON.stringify(user(), null, 2)}</pre>
      </div>
    </div>
  )
}
