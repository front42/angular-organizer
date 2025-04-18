import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
  imports: [NgFor, NgIf, FormsModule],
})
export class NoteComponent {
  @ViewChild('textarea')
  protected textarea!: ElementRef;
  protected textareaValue: string = '';
  protected mode: 'create' | 'search' = 'create';
  protected filteredNotes: string[];
  protected chosenNoteIndex: number | null = null;
  protected notes: string[] = [
    `Let's make the first note!`,
    'Between the 1st and the 2nd - just a second!',
    'What did they say about the Trinity?',
    'Lorem ipsum, of course.',
    'The lowest note.',
    'Hidden note.',
  ];

  constructor(private router: Router) {
    this.filteredNotes = this.notes.slice();
  }

  protected goHome(): void {
    this.router.navigate(['/']);
  }

  protected inputHandler(): void {
    if (!this.textareaValue.trim()) {
      this.filteredNotes = this.notes.slice();
    }
    if (this.mode === 'search') {
      this.searchNote();
    }
    this.tuneSize();
  }

  protected tuneSize(): void {
    const maxHeight = parseInt(getComputedStyle(this.textarea.nativeElement).maxHeight);
    this.textarea.nativeElement.style.minHeight = 'auto';
    this.textarea.nativeElement.style.minHeight =
      this.textarea.nativeElement.scrollHeight > maxHeight ? maxHeight + 'px' : this.textarea.nativeElement.scrollHeight + 'px';
  }

  protected saveNote(): void {
    this.mode = 'create';
    if (this.chosenNoteIndex !== null) {
      this.notes.splice(this.chosenNoteIndex, 1, this.textareaValue);
      this.chosenNoteIndex = null;
    } else {
      this.notes.unshift(this.textareaValue);
    }
    this.filteredNotes = this.notes.slice();
    this.textareaValue = '';
    this.textarea.nativeElement.style.minHeight = 'auto';
  }

  protected showNote(note: string, i: number): void {
    this.textareaValue = note;
    this.chosenNoteIndex = i;
    setTimeout(() => this.tuneSize(), 10);
  }

  protected searchNote(): void {
    this.mode = 'search';
    this.filteredNotes = this.notes.filter((note) => note.toLowerCase().includes(this.textareaValue.toLowerCase()));
    this.textarea.nativeElement.focus();
  }

  protected removeNote(): void {
    if (this.chosenNoteIndex !== null) this.notes.splice(this.notes.indexOf(this.filteredNotes[this.chosenNoteIndex]), 1);
    this.filteredNotes = this.notes.slice();
    this.chosenNoteIndex = null;
    this.textareaValue = '';
    this.mode = 'create';
    setTimeout(() => this.tuneSize(), 10);
  }
}
