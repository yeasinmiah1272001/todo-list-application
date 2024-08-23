"use client"
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleTodo } from "./Redux/todoSlice";
import toast from "react-hot-toast";


const TodoData = ({item}:any) => {
    const disPatch = useDispatch()
    return (
        <div>
           <p className="border-[1px] text-white text-start border-yellow-400 px-3 p-2 rounded-md hover:border-hovarColor duration-500 mt-3 border-l-8 border-l-hovarColor flex justify-between items-center">{item.todo} <FaTrash onClick={()=>disPatch(deleTodo(item._id), toast("Deleted todo success"))} className="hover:text-red-500 duration-500"/></p>
        </div>
    );
};

export default TodoData;