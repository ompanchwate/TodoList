import React from 'react'

export const TodosItem = ({ todo, onDelete }) => {
  return (
    <>

      <div className='m-3 text-center mx-10 lg:mx-64 border-dashed border-b-2 border-black  p-3 '>
        <div className='text-left'>
          <div className="font-bold align-left ">{todo.sno}. {todo.title}</div>
          <p className='ml-4 text-ellipsis overflow-hidden'>{todo.desc}</p>
          {/* used arrow function beacuse we just  want to pass the function, dont want to call. Otherwise the function is called while rendering */}
          <button onClick={() => onDelete(todo)} className='bg-red-500 p-1 px-2 rounded-lg text-white ml-3 mt-3'>Delete</button>
        
        </div><br />
      </div>


    </>
  )
}
