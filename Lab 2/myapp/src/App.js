import logo from './logo.svg';
import './App.css';
import TaskList from './components/taskList.js';
import Tasks from './resources/data';

function App() {
  return (
    <div>
      <TaskList data={Tasks}/>
    </div>
  );
}

export default App;
