import './App.css';
//Importing a file having rafc function with return type as const use {}
import { Navbar } from "./Components/Navbar";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
// import { TodosItem } from "./Components/TodosItem";
import react, { useState, useEffect } from "react"; // Hooks
import { Addtodos } from './Components/Addtodos';

function App() {

  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }


  const onDelete = (todo) => {
    console.log("I am Delete button...", todo)

    setTodos(todos.filter((e) => {
      return e !== todo
    }))

    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addtodo = (title, desc) => {
    console.log("Add todo", title, desc)
    let sno
    if (todos.length == 0) {
      sno = 1
    } else {
      sno = todos[todos.length - 1].sno + 1
    }
    // Adding the todo in a list
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo])
  }

  // Using useStates
  const [todos, setTodos] = useState(initTodo)

  useEffect(() => { 
    localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    

  return (
    <>
      <Navbar title="TodosList" search={true} />
      <Addtodos addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
      {/* <TodosItem/> */}
    </>
  );
}

export default App;
