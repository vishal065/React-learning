import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodohandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodohandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-grey-800 rounded-border border-grey-700 focus:border-indigo-500 focus:ring-2
         focus:ring-indigo-900 text-base outline-none texy-gray-100 
         py-1 px-3 leading-8 transaction-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 py-2 px-6 border-0
         focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
