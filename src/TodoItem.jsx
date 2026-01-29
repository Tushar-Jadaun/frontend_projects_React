function TodoItem({ text, completed, onDelete, onToggle }) {
  return (
    <li className="flex justify-between items-center bg-gray-200 p-2 rounded mb-2">
      <div className="flex items-center gap-2">
        <input type="checkbox" checked={completed} onChange={onToggle} />
        <span className={completed ? "line-through text-gray-500" : ""}>
          {text}
        </span>
      </div>
      <button onClick={onDelete} className="text-red-600 font-bold">
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
