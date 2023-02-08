import { observable, makeAutoObservable, action } from 'mobx';
import { createContext } from 'react';
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
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        this.tasks[i].done = !this.tasks[i].done;
      }
    }
  };
}

export default createContext(new TaskStore());
