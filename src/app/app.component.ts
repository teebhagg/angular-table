import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { UserService } from './utils/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, DataTableComponent, HttpClientModule],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css'
})
export class AppComponent {}
