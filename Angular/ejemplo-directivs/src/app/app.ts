import { Component, signal } from '@angular/core';
import { SetColor } from './directives/set-color-directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [SetColor, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejemplo-directivs');
  color = signal('yellow');
}
