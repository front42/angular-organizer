import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { WatchComponent } from './watch/watch.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NgIf, RouterOutlet, RouterLink, RouterLinkActive, WatchComponent],
})
export class AppComponent implements OnInit {
  protected isMainPage: boolean = true;

  constructor(private router: Router) {}

  protected goMainPage(): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => (this.isMainPage = this.router.url === '/'));
  }
}
