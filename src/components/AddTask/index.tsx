import { useState, useContext, KeyboardEvent } from 'react';
import { Container } from './styles';
import TaskStore from '../../stores/TaskStore';
import { observer } from 'mobx-react-lite';

export const AddTask = observer(() => {
  const [inputText, setInputText] = useState('');
  const { tasks, setTask } = useContext(TaskStore);

  function handleAddTask(taskName: string) {
    let newTask = {
      id: tasks.length + 1,
      name: taskName,
      done: false,
    };
    setTask(newTask);
  }

  function addTask() {
    handleAddTask(inputText);
    setInputText('');
  }

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === 'Enter' && inputText) {
      addTask();
    }
  }

  function handleClickButton() {
    if (inputText) {
      addTask();
    }
  }

  return (
    <Container>
      <div className="image" onClick={handleClickButton}>
        ➕
      </div>
      <input
        type="text"
        placeholder="Add a task and press Enter"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
});
