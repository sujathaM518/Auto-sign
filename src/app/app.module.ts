import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ManageComponent } from './manage/manage.component';
import { ActionComponent } from './action/action.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WaitingComponent } from './waiting/waiting.component';
import { AdddocumentComponent } from './adddocument/adddocument.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';


const ROUTES: Routes = [

  { path: ' ', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'document', 
    component: ManageComponent,
    // redirectTo: "details",
    children: [
      {
        path: "",
        component: DocumentDetailsComponent 
      }, 
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'sent',
        component: SentComponent
      }
    ]
  },
  { path: 'adddocument', component: AdddocumentComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ManageComponent,
    ActionComponent,
    SidenavComponent,
    WaitingComponent,
    AdddocumentComponent,
    InboxComponent,
    SentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
