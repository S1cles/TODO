import React from "react";
import Check from "./Check";
import { BsTrash } from "react-icons/bs";
const TodoItem = ({ todo, changeTodos, isCompleted, removeTodos }) => {
  return (
    <div className=" flex w-full bg-gray-800 my-3 rounded-lg p-2 justify-between items-center cursor_on_item max-w-1000">
      <div
        className="flex m-2 items-center  "
        onClick={() => changeTodos(todo.id)}
      >
        <Check isCompleted={todo.isCompleted} />
        <span className={`${isCompleted ? "line-through" : ""}`}>
          {todo.name}
        </span>
      </div>
      <button
        onClick={() => removeTodos(todo.id)}
        className="border-0 active:border-0 focus:border-0"
      >
        <BsTrash
          size={33}
          className="text-gray-600 hover:text-red-600 transition-colors ease-in-out duration-500"
        />
      </button>
    </div>
  );
};

export default TodoItem;
