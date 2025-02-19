import logo from './logo.svg';
// import './App.css';
import { connect } from "react-redux"
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"

import store from './redux/store';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

function App(props) {

  const newCount = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {

    dispatch(increaseCounter());



  }


  return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1>Hello world with React and Hoi Dan IT!</h1>
    //       <div>Count: {newCount}</div>

    //       <button onClick={() => handleIncrease()}>Increase Count</button>

    //       <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    //     </header>
    //   </div>


    // 
    <Home />

  );
}


export default App
