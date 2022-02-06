import './App.css';
import {Thisheader, Footer, Transactions, Services, Navbar, Welcome} from './Components';

function App() {
  return (
    <div>
      <div className='App'>
        <Navbar />
      </div>
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
