import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { FooterComponent } from './footer/footer.component';
import { MissionComponent } from './mission/mission.component';
import { CorevalueComponent } from './corevalue/corevalue.component';
import { TeamsComponent } from './teams/teams.component';
import { FieldsComponent } from './fields/fields.component';
import { RulesComponent } from './rules/rules.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroduceComponent,
    FooterComponent,
    MissionComponent,
    CorevalueComponent,
    TeamsComponent,
    FieldsComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
