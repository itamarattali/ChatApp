import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, 
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  isLogoutDisabled(): boolean {
    return !this.router.url.includes('chat');
  }
  
  handleLogout() {
    this.loginService.resetName();
    this.router.navigate(['../login']);
  }
}