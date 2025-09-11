import { Injectable } from '@angular/core';

export interface ITodo {
  description: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private defaultNotes: string[] = [
    `Let's make the first note!\nBut about what...\n...a stone, a leaf, an unfound door; of a stone, a leaf, a door. And of all the forgotten faces.`,
    'Tomorrow we will run faster, stretch out our arms farther... And then one fine morning -\nSo we beat on, boats against the current, borne back ceaselessly into the past.',
    `You rise, you fall, you're down then you rise again - what don't kill you makes you more strong.`,
    'Lorem ipsum, of course.',
    'The lowest note.',
    'Hidden note.',
  ];

  private defaultTodos: ITodo[] = [
    { description: 'eat', done: false },
    { description: 'sleep', done: true },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
    { description: 'mess around', done: false },
    { description: 'develop', done: true },
  ];

  constructor() {}

  public updateNotes(notes: string[]): void {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  public getNotes(): string[] {
    return JSON.parse(localStorage.getItem('notes') as string) || this.defaultNotes;
  }

  public addNote(note: string): void {
    const notes = this.getNotes();
    notes.unshift(note);
    this.updateNotes(notes);
  }

  public editNote(index: number, editedNote: string): void {
    const notes = this.getNotes();
    notes.splice(index, 1, editedNote);
    this.updateNotes(notes);
  }

  public removeNote(index: number): void {
    const notes = this.getNotes();
    notes.splice(index, 1);
    this.updateNotes(notes);
  }

  public updateTodos(todos: ITodo[]): void {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  public getTodos(): ITodo[] {
    return JSON.parse(localStorage.getItem('todos') as string) || this.defaultTodos;
  }

  public addTodo(todo: ITodo): void {
    const todos = this.getTodos();
    todos.unshift(todo);
    this.updateTodos(todos);
  }

  public editTodo(index: number, newDescription: string): void {
    const todos = this.getTodos();
    todos[index].description = newDescription;
    this.updateTodos(todos);
  }

  public removeTodo(index: number): void {
    const todos = this.getTodos();
    todos.splice(index, 1);
    this.updateTodos(todos);
  }

  public doneChange(index: number) {
    const todos = this.getTodos();
    todos[index].done = !todos[index].done;
    this.updateTodos(todos);
  }
}
