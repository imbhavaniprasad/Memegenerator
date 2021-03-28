import './App.css';
import Header from './components/Header'
import Memes from './components/MemeGenerator';
function App() {
  return (
    <div>
      {/* <Cats source="./assets/cats.jpg" name="Sheeri"/>
      <Inform /> */}
      <Header/>
      <Memes/>
    </div>
  );
}

export default App;
