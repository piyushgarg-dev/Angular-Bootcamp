import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];

  constructor() { 
    this.todos = [
      {
        id: '111',
        title: 'Learn Cpp',
        isComplete: false,
        date: new Date()
      },
      {
        id: '222',
        title: 'Learn Java',
        isComplete: false,
        date: new Date()
      },
      {
        id: '333',
        title: 'Learn Angular',
        isComplete: true,
        date: new Date()
      }
    ];
  } 

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo) {
    this.todos.map(_todo => {
      if (_todo.id === todo.id) {
        _todo.isComplete = !_todo.isComplete;
      }
    })
  }

  deleteTodo(todo: Todo) {
    const indexOfTodo = this.todos.findIndex(val => val.id === todo.id);
    this.todos.splice(indexOfTodo, 1);
  }


}
