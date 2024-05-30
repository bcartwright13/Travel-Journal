import './App.css';
import Card from './components/Card'
import Header from './components/Header'
import data from './data'

function App() {
  const cards = data.map(item => <Card item = {item}/>)
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
