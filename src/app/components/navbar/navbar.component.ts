import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
shoppingCart: any;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  signOut(){
    this.auth.logOut()
  }
}
