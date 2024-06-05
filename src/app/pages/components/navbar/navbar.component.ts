import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombrePersonal: any = 'Yorsh Ramos';
  isDropdownOpen = false;
  isHome = false;
  nombreProyecto: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isInHomeRoute();
    this.nombreProyecto = 'Proyecto DSI';
  }

  isInHomeRoute() {
    if (this.router.url === '/home') {
      this.isHome = false;
    } else {
      this.isHome = true;
    }
  }

  home() {
    this.router.navigate(['/home']);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
