import { useState } from 'react';
import { Container, Header, Main } from './styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

function App() {
  const [tasks, setTasks] = useState<Item[]>([
    { id: 1, name: 'Buy bread at the bakery', done: false },
    { id: 2, name: 'Buy a cake at the bakery', done: false },
  ]);
  return (
    <Container>
      <Main>
        <>
          <Header>ToDo List</Header>
          {tasks.map((task, index) => (
            <ListItem key={index} item={task} />
          ))}
        </>
      </Main>
    </Container>
  );
}

export default App;
