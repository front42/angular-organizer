import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.scss',
  imports: [DatePipe],
})
export class WatchComponent implements OnInit, OnDestroy {
  public watch: Date = new Date();
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => (this.watch = new Date()), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
