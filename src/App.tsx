
import './App.css'
import Header from './components/Layout/Header';
//import ClockArea from './components/Clock/ClockArea';
import FAQ from './components/Layout/FAQ';

function App() {
  return (
    <div className="max-w-3xl mx-auto">
    <Header />
    <div>
      <h1>Main Section</h1>
    </div>
      <FAQ />
    </div>
  );
}

export default App
