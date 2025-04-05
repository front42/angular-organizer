import { Routes } from '@angular/router';

import { CalcComponent } from './calc/calc.component';
import { NoteComponent } from './note/note.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: 'calc', component: CalcComponent },
  { path: 'note', component: NoteComponent },
  { path: 'todo', component: TodoComponent },
  { path: '**', redirectTo: '' }, // With '/': Detected possible infinite redirect when redirecting from '/' to '/' - http://localhost:4200/
];
