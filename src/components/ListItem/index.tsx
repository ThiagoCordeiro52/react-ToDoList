import React, { ChangeEvent, useContext, useState } from 'react';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { Container } from './styles';
import { Item } from '../../types/Item';

import { observer } from 'mobx-react-lite';
import TaskStore from '../../stores/TaskStore';

type ListItemProps = {
  item: Item;
};

export const ListItem = observer(({ item }: ListItemProps) => {
  const { setDone, deleteTask } = useContext(TaskStore);
  return (
    <Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => setDone(item.id)}
      ></input>
      <label>{item.name}</label>
      <div
        onClick={() => {
          deleteTask(item.id);
        }}
      >
        <AiFillDelete />
      </div>
      <div>
        <AiFillEdit />
      </div>
    </Container>
  );
});
