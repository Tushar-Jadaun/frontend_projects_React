import { useState } from "react";
import TodoItem from "../src/Todorum";
function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
        Text : input,
        completed : false
    }
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  const toggleTodo = (index)=>{
    const updatedTodos = todos.map((todo,i)=> i==index ? {...todo,completed:!todo.completed}:todo)
    setTodos(updatedTodos)
  };


  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          Todo App 📝
        </h2>

        {/* Input section */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a todo..."
            className="border p-2 flex-1 rounded"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              onDelete={() => deleteTodo(index)}
              onToggle={() => toggleTodo(index)}
            />
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No todos yet
          </p>
        )}
      </div>
    </div>
  );
}

export default Todo;