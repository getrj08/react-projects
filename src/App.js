import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/HeaderComponents/NavbarComponent'
import Dashboard from './components/HeaderComponents/Dashboard';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Dashboard />
    </div>
  );
}

export default App;
