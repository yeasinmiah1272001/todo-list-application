"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./Redux/todoSlice";
import TodoList from "./TodoList";
import toast from "react-hot-toast";

const FormField = () => {
  const [todo, setTodo] = useState("");
  const disPatch = useDispatch();
  console.log("this is dispatch", disPatch);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (todo === "") {
      toast.error("Pleace enter your todo")
    } else {
      disPatch(addTodo({ _id: Math.random().toString(), todo: todo }));
      setTodo("");
      toast("Todo added success")
    }
  };

  return (
    <div className="text-center justify-center items-center text-hovarColor py-10">
      <h1 className="mb-2 text-3xl text-hovarColor">Todo Form</h1>
      <div className="flex-col">
        <form onSubmit={handleSubmit} className="relative">
          <input
            placeholder="Enter your todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            className="bg-[#006CB7] border-2
         hover:border-[#49186A] outline-none text-white
          border-hovarColor rounded-md
           duration-500 px-3 p-2 w-1/3 mr-3"
          />
          {todo && (
            <span
              onClick={() => setTodo("")}
              className="absolute  mt-4 text-gray-600 hover:text-red-600 duration-500 -ml-8"
            >
              <IoClose />
            </span>
          )}
          <button
            className="px-3 p-2.5  bg-yellow-600 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-white 

        "
          >
            Add Todo
          </button>
          <div className=" lg:mx-[370px] text-start mx-16 mt-4">
            <TodoList />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormField;
