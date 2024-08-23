"use client"

import TodoList from '@/Component/TodoList'
import Link from 'next/link'
import React from 'react'

const TodoPages = () => {
  return (
    <div className='text-center justify-center items-center text-white py-10 lg:mx-96'>
       <h1 className='text-xl font-semibold text-yellow-600'>Todo Page</h1>
     
       <TodoList/>
     

       <Link href={"/"}> <p className="border-[1px] text-center mt-3 border-yellow-400 px-3 p-2 rounded-md hover:border-sky-600 duration-500">Back Home Page</p></Link>
        
        </div>
  )
}

export default TodoPages