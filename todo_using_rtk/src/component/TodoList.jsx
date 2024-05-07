import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function TodoList({ todo, editTodoClickEvent }) {
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const dispatch = useDispatch();
  const toggleCompletedEvent = () => {
    //toggleCompleted(todo.id);
    setIsTodoEditable();
  };
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.complete}
        onChange={toggleCompletedEvent}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.complete ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          editTodoClickEvent(todo.id);
        }}
        disabled={todo.complete}
      >
        {"✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(removeTodo({ id: todo.id }))}
      >
        ❌
      </button>
    </div>
  );
}
