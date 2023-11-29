import logo from './logo.svg';
import './App.css';

function App() {

  const style = {
    color : 'red'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome To Portfolio Website !!</h1>
        <h1>Developed And Maintained By <strong style={style}>Ajay Kharat</strong></h1>
      </header>
    </div>
  );
}

export default App;
