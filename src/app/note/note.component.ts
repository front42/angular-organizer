import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
  imports: [NgFor, NgIf, FormsModule],
})
export class NoteComponent implements OnInit {
  @ViewChild('textarea') protected textarea!: ElementRef;
  protected textareaValue: string = '';
  protected searchString: string = '';
  protected notes: string[] = [];
  protected filteredNotes: string[] = [];
  protected chosenNoteIndex: number | null = null;

  constructor(private router: Router, private dataService: DataService) {}

  protected inputHandler() {
    if (!this.textareaValue.trim()) this.reset();
    if (this.searchString) this.searchNote();
    this.tuneSize();
  }

  protected searchNote() {
    this.chosenNoteIndex = null;
    this.searchString = this.textareaValue;
    this.textarea.nativeElement.focus();
    this.filteredNotes = this.notes.filter((note) => note.toLowerCase().includes(this.textareaValue.toLowerCase()));
  }

  protected saveNote() {
    if (this.chosenNoteIndex === null) {
      this.dataService.addNote(this.textareaValue);
    } else {
      this.dataService.editNote(this.chosenNoteIndex, this.textareaValue);
    }
    this.reset();
  }

  protected removeNote() {
    if (!this.searchString && this.chosenNoteIndex !== null) {
      this.dataService.removeNote(this.chosenNoteIndex);
    } else if (this.searchString && this.chosenNoteIndex !== null) {
      this.textareaValue = this.searchString;
      this.dataService.removeNote(this.notes.indexOf(this.filteredNotes[this.chosenNoteIndex]));
      this.searchNote();
    }
    this.reset();
    setTimeout(() => this.tuneSize(), 10);
  }

  protected showNote(note: string, index: number) {
    this.textareaValue = this.filteredNotes[index];
    this.chosenNoteIndex = index;
    setTimeout(() => this.tuneSize(), 10);
  }

  private reset(): void {
    this.textareaValue = '';
    this.textarea.nativeElement.style.minHeight = 'auto';
    this.chosenNoteIndex = null;
    this.searchString = '';
    this.notes = this.dataService.getNotes();
    this.filteredNotes = this.notes.slice();
  }

  private tuneSize(): void {
    const maxHeight = parseInt(getComputedStyle(this.textarea.nativeElement).maxHeight);
    this.textarea.nativeElement.style.minHeight = 'auto';
    this.textarea.nativeElement.style.minHeight =
      this.textarea.nativeElement.scrollHeight > maxHeight ? maxHeight + 'px' : this.textarea.nativeElement.scrollHeight + 'px';
  }

  ngOnInit(): void {
    this.notes = this.dataService.getNotes();
    this.filteredNotes = this.notes.slice();
  }
}
