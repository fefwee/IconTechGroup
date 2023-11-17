import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService) { }

  public formAuthUSer!: FormGroup;

  ngOnInit(): void {
    this.formAuthUSer = new FormGroup({
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  public sendAuthData() {
    this.authService.getUser(this.formAuthUSer.value);
    this.formAuthUSer.reset();
  }


}
