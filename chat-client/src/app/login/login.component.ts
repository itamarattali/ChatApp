import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string = '';

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.name = this.loginService.getName();
  }

  onSubmit(input: HTMLInputElement) {
    this.loginService.changeName(input.value);
    this.router.navigate(['../chat'], {relativeTo: this.route})
  }
}