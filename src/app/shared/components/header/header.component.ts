import { AuthService } from './../../../services/auth.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit, OnDestroy {

  @ViewChild("close") closeMess!: any;
  public destroy$ = new Subject<void>();
  public isUpdate!: any;
  public firstName = localStorage.getItem('first');
  public lastName = localStorage.getItem('last');
  public isRole = localStorage.getItem('role')
  public dataUSer!: any;

  constructor(public profileService: ProfileService,
    public AuthService: AuthService,
  ) { }

  ngOnInit(): void {
    this.profileService.profileUserData$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      {
        next: (val: any) => {
          this.dataUSer = val;
          if (this.dataUSer.firstName && this.dataUSer.lastName && this.dataUSer.phone !== '' || 0 || null) {
            this.isUpdate = true;
            setTimeout(() => this.isUpdate = false, 30000)
          }
        },
      },
    )

  }

  closeMessage() {
    this.closeMess.nativeElement.style.display = 'none';
    this.isUpdate = false;
    this.profileService.changeValid(false)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }



}
