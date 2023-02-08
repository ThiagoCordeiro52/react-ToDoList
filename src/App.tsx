import { useContext, useState } from 'react';
import { Container, Header, Main } from './styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddTask } from './components/AddTask';
import { tasks as tasksList } from './data/tasks';
import { observer } from 'mobx-react-lite';
import TaskStore from './stores/TaskStore';

const App = observer(() => {
  const { tasks, setTask } = useContext(TaskStore);
  // const [tasks, setTasks] = useState<Item[]>(tasksList);

  function handleAddTask(taskName: string) {
    let newTask = {
      id: tasks.length + 1,
      name: taskName,
      done: false,
    };
    setTask(newTask);
  }

  return (
    <Container>
      <Main>
        <>
          <Header>ToDo List</Header>
          <AddTask onEnter={handleAddTask} />
          {tasks.map((task, index) => (
            <ListItem key={index} item={task} />
          ))}
        </>
      </Main>
    </Container>
  );
});

export default App;
