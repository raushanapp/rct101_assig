import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add, div, multi, sub } from './Redux/action';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state=>state)
  const res = count.count +count.x
  return (
    <div className="App">
         <h2>Count : {res}</h2>
        <button onClick={() =>dispatch(add(1))}>Add</button>
        <button onClick={() =>dispatch(sub(1))}>Sub</button>
        <button onClick={() =>dispatch(multi(1))}>multi</button>
        <button onClick={() =>dispatch(div(1))}>div</button>
    </div>
  );
}

export default App;
