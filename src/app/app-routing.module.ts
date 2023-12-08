import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { MissionComponent } from './mission/mission.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'introduce', component: IntroduceComponent},
  {path: 'mission', component: MissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
