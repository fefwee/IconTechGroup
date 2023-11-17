import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./Inventory/pages/inventory/inventory.module').then(m => m.InventoryModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./Reports/pages/reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('./Billing/pages/billing/billing.module').then(m => m.BillingModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Profile/pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/pages/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
