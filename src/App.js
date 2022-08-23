import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
     <div className="conatiner">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo img-fluid" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className='App-footer'>
        <small>Coded by Clara Mendes</small>
      </footer>
     </div>
    </div>
  );
}

