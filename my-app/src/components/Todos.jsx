import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/todoState";
import Todo from "./Todo";

export default function Todos() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useRecoilState(todoState);
  let inputTextOnChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  let addTodo = () => {
    console.log(todos);
    setTodos((presTodo) => [
      ...presTodo,
      { id: Math.random(), text: inputText },
    ]);
    setInputText("");
  };
  function clearTodo() {
    setTodos([]);
  }

  return (
    <main>
      <input
        value={inputText}
        onChange={inputTextOnChangeHandler}
        type="text"
      />
      <button onClick={addTodo}>AddTodo</button>
      <button onClick={clearTodo}>ClearTodos</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} text={todo.text} id={todo.id} />;
      })}
    </main>
  );
}
