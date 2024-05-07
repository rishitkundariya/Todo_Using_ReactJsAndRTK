// TodoForm.js
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

const TodoForm = forwardRef((props, ref) => {
  const [todoMsg, setTodoMsg] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [todoId, setTodoId] = useState("");
  const inputRef = useRef(null);
  const list = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const AddNotes = (e) => {
    e.preventDefault();
    if (todoMsg.trim() !== "") {
      if (todoId === "") dispatch(addTodo({ text: todoMsg, complete: false }));
      else dispatch(updateTodo({ text: todoMsg, id: todoId }));
    }
    setTodoMsg("");
    setIsEdit(false);
    setTodoId("");
  };

  const editTodoClickEvents = (id) => {
    setTodoMsg(list.find((iteam) => iteam.id === id).text);
    setIsEdit(true);
    setTodoId(id);
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => ({
    editTodoClickEvents,
  }));

  return (
    <form className="flex">
      <input
        value={todoMsg}
        type="text"
        ref={inputRef}
        onChange={(e) => setTodoMsg(e.target.value)}
        placeholder="Write Notes..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        onClick={(e) => AddNotes(e)}
      >
        {isEdit ? "Update" : "Add"}
      </button>
    </form>
  );
});

export default TodoForm;
