import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService, ITodo } from '../data.service';

@Component({
  standalone: true,
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  imports: [NgIf, NgClass, FormsModule],
})
export class TodoComponent implements OnInit {
  @ViewChild('textarea')
  protected textarea!: ElementRef;
  protected textareaValue: string = '';
  protected todos: ITodo[] = [];
  protected chosenTodoIndex: number | null = null;

  constructor(private router: Router, private dataService: DataService) {}

  protected tuneSize(): void {
    if (!this.textareaValue) this.chosenTodoIndex = null;
    const maxHeight = parseInt(getComputedStyle(this.textarea.nativeElement).maxHeight);
    this.textarea.nativeElement.style.minHeight = 'auto';
    this.textarea.nativeElement.style.minHeight =
      this.textarea.nativeElement.scrollHeight > maxHeight ? maxHeight + 'px' : this.textarea.nativeElement.scrollHeight + 'px';
  }

  protected showTodo(index: number): void {
    this.chosenTodoIndex = index;
    const todo = this.todos[index];
    this.textareaValue = todo.description;
    setTimeout(() => this.tuneSize(), 10);
  }

  protected addTodo(): void {
    if (this.chosenTodoIndex !== null) {
      const newDescription: string = this.textareaValue;
      this.dataService.editTodo(this.chosenTodoIndex, newDescription);
    } else {
      const newTodo: ITodo = { description: this.textareaValue, done: false };
      this.dataService.addTodo(newTodo);
    }
    this.textareaValue = '';
    this.chosenTodoIndex = null;
    setTimeout(() => this.tuneSize(), 10);
  }

  protected removeTodo(index: number): void {
    this.textareaValue = '';
    this.chosenTodoIndex = null;
    this.dataService.removeTodo(index);
    setTimeout(() => this.tuneSize(), 10);
  }

  ngOnInit(): void {
    this.todos = this.dataService.getTodos();
  }
}
