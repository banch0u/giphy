import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { testActions } from './store/test';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.test.counter);

  const incrementHandler = () => {
    dispatch(testActions.increment());
  };

  return (
    <div>
      <div className='text-purple-700 text-5xl'>hello</div>
      <button
        className='px-6 py-3 bg-blue-600 rounded-lg text-white block'
        onClick={incrementHandler}>
        top up
      </button>
      {counter}
    </div>
  );
}

export default App;
