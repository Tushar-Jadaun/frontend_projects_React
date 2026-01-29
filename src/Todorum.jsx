function TodoItem({text,completed,onDelete,onToggle}){
      return(
        <li
        className="flex p-2 mb-2 items-center justify-between bg-gray-400"
        >
            <div>
                <input type="checkbox" checked={completed} onChange={onToggle}/>
                <span className={completed ? " line-through text-gray-500":""}>{text}</span>
            </div>
            <button onClick={onDelete} className="text-red-500 font-bold">X</button>
        </li>
      )
}
export default TodoItem;