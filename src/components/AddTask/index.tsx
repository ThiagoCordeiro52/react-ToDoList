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

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === 'Enter' && inputText) {
      handleAddTask(inputText);
      setInputText('');
    }
  }
  return (
    <Container>
      <div className="image">➕</div>
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
