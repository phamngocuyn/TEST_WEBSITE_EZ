import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'introduce', component: IntroduceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
