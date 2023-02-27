import { observable, makeAutoObservable, action } from 'mobx';
import { createContext } from 'react';
import { searchPosition } from '../helpers/searchPosition';
import { Item } from '../types/Item';

class TaskStore {
  tasks: Item[] = [];
  constructor() {
    makeAutoObservable(this, {
      tasks: observable,
      setTask: action,
      setDone: action,
    });
  }

  setTask = (task: Item) => {
    this.tasks.push(task);
  };

  setDone = (id: number) => {
    let position = searchPosition(this.tasks, id);
    this.tasks[position].done = !this.tasks[position].done;
  };
}

export default createContext(new TaskStore());
