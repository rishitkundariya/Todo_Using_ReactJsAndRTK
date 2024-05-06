import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("");
  const dispatch = useDispatch();
  const AddNotes = (e) => {
    e.preventDefault();
    if (todoMsg.trim() !== "") {
      dispatch(addTodo({ text: todoMsg, complete: false }));
    }
    setTodoMsg("");
  };
  return (
    <form className="flex">
      <input
        value={todoMsg}
        type="text"
        onChange={(e) => setTodoMsg(e.target.value)}
        placeholder="Write Notes..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        onClick={(e) => AddNotes(e)}
      >
        Add
      </button>
    </form>
  );
}
