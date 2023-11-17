import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MessagesModule
  ],
  exports: [HeaderComponent, NavigationComponent]
})
export class SharedModule { }
