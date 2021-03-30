import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <NavBar
        title='Strivestaurant'
        links={['Home', 'Contacts', 'Location', 'blabla', 'Flynn']}
      />
      <Home
        newTitle='This is the new title'
        newPayoff='The inner text are passed with props from App.jsx'
      />
    </div>
  );
}

export default App;
