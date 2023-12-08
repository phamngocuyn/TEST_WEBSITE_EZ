import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { MissionComponent } from './mission/mission.component';
import { CorevalueComponent } from './corevalue/corevalue.component';
import { TeamsComponent } from './teams/teams.component';
import { FieldsComponent } from './fields/fields.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'introduce', component: IntroduceComponent},
  {path: 'mission', component: MissionComponent},
  {path: 'corevalue', component: CorevalueComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'fields', component: FieldsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
