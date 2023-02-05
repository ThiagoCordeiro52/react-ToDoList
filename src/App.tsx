import { useState } from 'react';
import { Container, Header, Main } from './styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddTask } from './components/AddTask';
import { tasks as tasksList } from './data/tasks';

function App() {
  const [tasks, setTasks] = useState<Item[]>(tasksList);

  function handleAddTask(taskName: string) {
    let newList = [...tasks];
    newList.push({
      id: tasks.length + 1,
      name: taskName,
      done: false,
    });
    setTasks(newList);
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
}

export default App;
