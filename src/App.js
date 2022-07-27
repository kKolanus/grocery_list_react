import Header from './Header';
import './App.css';

function App() {

  const handleNameChange = () => {
    const names = [`Krzto`,`Krzemień`,`Mufasy`];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
