import './App.css';
import { useRecoilValue } from 'recoil';
import Todos from './components/Todos';
import { totalTodos } from './state/selectors/totalTodos';

function App() {
  const total=useRecoilValue(totalTodos);
  return (
    <>
    <h3>Todos</h3>
     
      <Todos/>
      <h3>Total todos: {total}</h3>
   
    </>
  );
}

export default App;
