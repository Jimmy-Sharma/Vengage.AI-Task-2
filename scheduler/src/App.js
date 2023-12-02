import logo from './logo.svg';
import './App.css';
import Calender from './Components/Calender';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Calender/>
      <Toaster/>
    </div>
  );
}

export default App;
