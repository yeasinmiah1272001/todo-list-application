import { useDispatch, useSelector } from "react-redux";
import TodoData from "./TodoData";
import { removeTodo } from "./Redux/todoSlice";
import { State } from "../../type";
import Swal from "sweetalert2";

const TodoList = () => {
    const todoList = useSelector((state: State) => state.todo.todoList);
    const dispatch = useDispatch();

    const handleAllDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeTodo()); // Dispatch the action to remove all todos
                Swal.fire({
                    title: "Deleted!",
                    text: "All todos have been deleted.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <div>
            <div className="mt-3">
                {todoList.length ? (
                    <>
                        {todoList.map((item) => (
                            <TodoData key={item._id} item={item} />
                        ))}
                        <p
                            onClick={handleAllDelete}
                            className="border-[1px] text-center border-yellow-400 px-3 p-2 rounded-md hover:border-hovarColor duration-500 mt-3 text-hovarColor text-xl cursor-pointer"
                        >
                            Remove All Todos
                        </p>
                    </>
                ) : (
                    <p className="border-[1px] text-center border-yellow-400 px-3 p-2 rounded-md hover:border-hovarColor duration-500 text-hovarColor">
                        Sorry, no todos here.
                    </p>
                )}
            </div>
        </div>
    );
};

export default TodoList;
