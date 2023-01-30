import React from 'react'
import { TodosItem } from "./TodosItem";

export const Todos = (props) => {
  return (
    <>
      <div className='ml-2 font-bold text-xl lg:text-2xl text-center underline'>TODOS</div>
      <div className='text-center '>
        {props.todos.length === 0 ? <p className='text-red-500 font-bold'>No todos available</p> :
          props.todos.map((todo) => {
            // While mapping we should give a unique key to the function
            return <TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        }
      </div>
    </>
  )
} 
