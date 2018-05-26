import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { MentorsComponent } from './mentors/mentors.component';
import { FosterYouthComponent } from './foster-youth/foster-youth.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ContactComponent } from './contact/contact.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'our-mission', component: OurMissionComponent },
  { path: 'mentors', component: MentorsComponent },
  { path: 'foster-youth', component: FosterYouthComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
