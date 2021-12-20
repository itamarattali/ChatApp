import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: HTMLFormElement) {
    this.router.navigate(['../chat'], {relativeTo: this.route})
  }

  onHasAccount() {
    this.router.navigate(['../login'], {relativeTo: this.route});
  }
}
