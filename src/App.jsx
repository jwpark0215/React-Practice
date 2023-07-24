import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title';
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div className="App">
      <Title/>
      <div className='todo__wrapper'>
        <Todo title="Finish Frontend Simplified"
        paragraph = ""/>
        <Todo title="Finish Interview Section"/>
        <Todo title="Land a 100k job"/>
      </div>
      <Modal/>
    </div>
  );
}

export default App;
