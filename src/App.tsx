
import './App.css'
import Header from './components/Layout/Header';
import ClockArea from './components/Clock/ClockArea';
import FAQ from './components/Layout/FAQ';
import ToDoSection from './components/ToDo/ToDoSection';
function App() {
  return (
    <div className="max-w-3xl mx-auto">
    <Header />
    <div>
      <ClockArea />
    </div>
    <ToDoSection />
      <FAQ />
    </div>
  );
}

export default App
