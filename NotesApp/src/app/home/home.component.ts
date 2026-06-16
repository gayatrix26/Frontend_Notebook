import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToContents(){
    this.router.navigate(['/contents']);
  }

  goToClassNotes(){
    alert('Class Notes will be available soon');
  }

  personalNotes(){
    alert('Personal Notes will be available soon 🚧');
  }
}