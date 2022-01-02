import './App.css';
import {Thisheader, Footer, Transactions, Services, Navbar, Welcome} from './Components';

function App() {
  return (
    <div>
      <div className='App'>
        <Navbar />
      </div>
      <Welcome />
      <Transactions sender="qewr" receiver="asdf" amount="9" message="test" />
    </div>
  );
}

export default App;
