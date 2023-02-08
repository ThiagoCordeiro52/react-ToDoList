import { useContext } from 'react';
import { Container, Header, Main } from './styles';
import { ListItem } from './components/ListItem';
import { AddTask } from './components/AddTask';
import { observer } from 'mobx-react-lite';
import TaskStore from './stores/TaskStore';

const App = observer(() => {
  const { tasks } = useContext(TaskStore);
  return (
    <Container>
      <Main>
        <Header>ToDo List</Header>
        <AddTask />
        {tasks.map((task, index) => (
          <ListItem key={index} item={task} />
        ))}
      </Main>
    </Container>
  );
});

export default App;
