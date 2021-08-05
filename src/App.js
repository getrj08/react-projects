import logo from './logo.svg';
import './App.css';
import Basic from './components/Basic.js'
import Functional from './functional/Functional';
import UserApi from './api/UserApi';
import PhotosApi from './api/PhotosApi'

function App() {
  return (
    <div className="App">
        <Functional />
        <PhotosApi />
    </div>
  );
}

export default App;
