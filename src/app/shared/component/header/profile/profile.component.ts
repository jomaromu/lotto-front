import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private router: Router) { }

  public show: boolean = false;

  open() {
    this.show = !this.show
  }


  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login'])
  }

}
