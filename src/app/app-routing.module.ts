import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppButtonComponent } from './components/app-button/app-button.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: AppHomeComponent,
  },
  {
    path: "components",
    component: AppLayoutComponent,
    children: [
      {
        path: "button",
        component: AppButtonComponent
      },
      {
        path: "",
        redirectTo: 'button',
        pathMatch: 'full' 
      },
    ]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
