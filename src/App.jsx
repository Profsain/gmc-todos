import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <h1>Awesome Todos</h1>
      {/* add todos component */}
      <AddTodo />

      {/* todo list component */}
      <TodoList />
    </>
  )
}

export default App
