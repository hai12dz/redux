import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"

import store from './redux/store';

import { useSelector, useDispatch } from "react-redux";

function App(props) {

  const newCount = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    // props.increaseCounter();

    dispatch(increaseCounter());
    // store.dispatch(



    //   {
    //     type: "haideptrai",
    //     payload: {
    //       like: 'abc'
    //     }
    //   }

    // );

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and Hoi Dan IT!</h1>
        <div>Count: {newCount}</div>

        <button onClick={() => handleIncrease()}>Increase Count</button>

        <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
      </header>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App
