import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ActivityComponent } from './components/activity/activity.component';
import { AuthGuard } from './services/auth.guard';
import { ContactusComponent } from './components/auth/contactus/contactus.component';
import { ContactlistComponent } from './components/contact/contactlist/contactlist.component';
import { ContacteditComponent } from './components/contact/contactedit/contactedit.component';
import { CaptureformComponent } from './components/contact/captureform/captureform.component';
import { ContactsComponent } from './components/contact/contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent } ,
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'activity', component: ActivityComponent},
  { path: 'contactlist', component: ContactlistComponent},
  { path: 'contactedit/:contactId', component: ContacteditComponent},
  { path: 'captureform/:contactId', component: CaptureformComponent},
  { path: 'contacts', component: ContactsComponent},
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
