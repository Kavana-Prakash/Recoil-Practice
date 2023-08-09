import { useSetRecoilState } from "recoil";
import { todoState } from "../state/atoms/todoState";

export default function Todo({ text, id }) {
  const setTodos = useSetRecoilState(todoState);
  function deleteTodo() {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <br />
      <span>{text}</span> &nbsp;
      <button onClick={deleteTodo}>X</button>
    </div>
  );
}
