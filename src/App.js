import Header from './component/Header';
import Footer from "./component/Footer";
import Card from "./component/Card";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  <Header/>
  <Footer/>
  <Card/>
      </header>
    </div>
  );
}

export default App;
