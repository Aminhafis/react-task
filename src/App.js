import logo from './logo.svg';
import './App.css';


function App() {

  let data = [
    {
      id:1,
      name:"hello"
    },
    {
      id:2,
      name:'welcome'
    },
    {
      id:2,
      name:'welcome'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <h1>asdasjkhdkjasd</h1>
      {
        data.map((p)=>(
          <li key={p.id}>{p.name}</li> 
        ))
  }
      </header>
    </div>
  );
}

export default App;
