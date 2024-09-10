import './App.css';
import Header from './components/header/Header';

function App() {
  var teste = 'teste';
  return (
    <>
      <Header name={teste}></Header>
      <div>
        Eu sou o bruno
      </div>
    </>
  );
}

export default App;
