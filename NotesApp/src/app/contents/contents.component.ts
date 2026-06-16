import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent {

  constructor(private router: Router) {}

  goHome(){
    this.router.navigate(['/']);
  }
}