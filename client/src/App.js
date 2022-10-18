import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const user=useSelector(state=>state.authReducer)
  return (
    <div className="App">
      <header className="App-header">
        <h1>{user}</h1>
      </header>
    </div>
  );
}

export default App;
