import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './common/shared.module';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stackoverflow';
}
