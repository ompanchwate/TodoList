import React, { useState } from 'react'

export const Addtodos = ({ addtodo }) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const submit = (e) => {
        e.preventDefault() // To prevent Reloading of page
        if (!title || !desc) {
            alert("Title of Description cannot be NULL...")
        } else {
            addtodo(title, desc)
            // Setting text in input field as blank, after submitting 
            settitle("")
            setdesc("")
        }
    }

    return (
        <>
            <h1 className='font-bold text-xl lg:text-2xl text-center text-blue-600 mt-2'>Add Todo</h1>
            <form className=' mx-5 xl:mx-64 text-center xl:text-left' onSubmit={submit}>
                <div className='lg:space-y-5 space-y-1'>
                    <label className='font-bold p-1 mr-5'>Enter Title</label>
                    <input type="text" value={title} placeholder="Enter Title" className='border-2 border-gray-400 rounded-lg p-1 sm:w-[30rem] xl:w-[50rem]' onChange={(e) => settitle(e.target.value)} />
                    <br />
                    <label className='font-bold p-1 mr-3  '>Description</label>
                    <input type="text" value={desc} placeholder="Description" className='border-2 border-gray-400 rounded-lg p-1 sm:w-[30rem] xl:w-[50rem]' onChange={(e) => setdesc(e.target.value)} />
                    <br />
                    <button type='submit' className='p-1  bg-green-600 border-2 text-white font-semibold border-green-600 rounded-lg text-left px-5 cursor-pointer hover:bg-transparent hover:text-black'>Submit</button>
                    <br />
                    <div className='h-1 bg-black'></div><br />
                </div>
            </form>

        </>
    )
}


// onChange={(e) => setdesc(e.target.value)} To enable typing as initially it sets null text