import { Injectable } from '@angular/core';

export interface ITodo {
  description: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private notes: string[] = [
    `Let's make the first note!`,
    'Between the 1st and the 2nd - just a second!',
    'What did they say about the Trinity?',
    'Lorem ipsum, of course.',
    'The lowest note.',
    'Hidden note.',
  ];

  private todos: ITodo[] = [
    { description: 'eat', done: false },
    { description: 'sleep', done: true },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
    { description: 'mess around', done: false },
    { description: 'develop', done: true },
  ];

  constructor() {}

  public getNotes(): string[] {
    return this.notes;
  }

  public addNote(note: string): void {
    this.notes.unshift(note);
  }

  public editNote(index: number, editedNote: string): void {
    this.notes.splice(index, 1, editedNote);
  }

  public removeNote(index: number): void {
    this.notes.splice(index, 1);
  }

  public getTodos(): ITodo[] {
    return this.todos;
  }

  public addTodo(todo: ITodo): void {
    this.todos.unshift(todo);
  }

  public editTodo(index: number, newDescription: string): void {
    this.todos[index].description = newDescription;
  }

  public removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}
