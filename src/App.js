import logo from './logo.svg';
import './App.css';
import Herosection from './components/Herosection';
import Oursection from './components/Oursection';
import Letsection from './components/Letsection';
import Makesection from './components/Makesection';
import Sunscribesec from './components/Sunscribesec';
import Footer from './components/Footer';
import Bestsection from './components/Bestsection';
import Booksection from './components/Booksection';
import Whatsectiom from './components/Whatsectiom';
import Loadersection from './components/Loadersection';
import Backtotop from './components/Backtotop';

function App() {
  return (
    <div >
      <Loadersection/>
      <Backtotop/>
<Herosection/>
<Oursection/>
<Letsection/>
<Booksection/>
<Bestsection/>
<Whatsectiom/>
<Makesection/>
<Sunscribesec/>
<Footer/>
    </div>
  );
}

export default App;
