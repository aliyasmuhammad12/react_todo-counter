import Counter from './component/Counter';
import Header from './component/Header';
import ListItems from './component/ListItems';
import TodoButton from './component/TodoButton';
import './style.css'

function App() {
  return (
    <>
    <div className='both'>

    <div className="todo-container">
      <Header title="Counter"/>
      <Counter/>
    </div>
    <div className="todo-container">
      <Header title="Todo list"/>
      <ListItems completed={false} list="apple"/>
      <ListItems list="graps"/>
      <ListItems list="orange"/>
      <ListItems list="loki"/>
      <TodoButton btnName="Add Todo"/>
    </div>
    </div>
    </>
  );
}

export default App;
