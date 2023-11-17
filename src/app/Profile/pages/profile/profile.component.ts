import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public changeProfileForm!: FormGroup;
  isForm = false;
  isValid!: boolean;

  constructor(private profileService: ProfileService) { }


  ngOnInit(): void {
    this.changeProfileForm = new FormGroup({
      'email': new FormControl('', [Validators.email]),
      'firstName': new FormControl('', [Validators.required, Validators.maxLength(255)]),
      'lastName': new FormControl('', [Validators.required, Validators.maxLength(255)]),
      'phoneNumber': new FormControl('', Validators.required),
      'website': new FormControl('', [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])
    })
  }

  public sendDataUser() {
    if (!this.changeProfileForm.valid) {
      console.log(1)
      this.isValid = true;
      this.profileService.changeValid(this.isValid);
 
    }
    else {
      console.log(2)
      this.isValid = false;
      this.profileService.changeValid(this.isValid);
      this.profileService.getDataUser(this.changeProfileForm.value)
    }
    this.changeProfileForm.reset()
  }

}
