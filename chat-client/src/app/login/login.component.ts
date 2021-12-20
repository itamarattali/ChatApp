import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onNoAccount() {
    this.router.navigate(['../signup'], {relativeTo: this.route});
  }

  onSubmit(form: HTMLFormElement) {
    this.router.navigate(['../chat'], {relativeTo: this.route})
  }
}