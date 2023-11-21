import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import MovieList from './components/movies/MovieList'

function App() {

  return (
    <>
      <h1>Awesome Todos</h1>
      {/* add todos component */}
      <AddTodo />

      {/* todo list component */}
      <TodoList />

      {/*  movies list component */}
      <MovieList />
    </>
  )
}

export default App
