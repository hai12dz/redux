import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { use } from 'react';
import { increment, decrement } from './redux/slices/counterSlice'



function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and Hoi Dan IT!</h1>

        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <br />
        <div> <h1>Counter: {`${count}`}</h1></div>







      </header>
    </div>
  );
}

export default App;
