import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './logo.svg';
import './App.css';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register />        
      </header>
    </div>
  );
}

export default App;
