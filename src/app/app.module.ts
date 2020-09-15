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
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DraftsComponent } from './drafts/drafts.component';
import { AddFieldsComponent } from './add-fields/add-fields.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


const ROUTES: Routes = [

  { path: '', redirectTo : 'home'  , pathMatch : "full"},
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
      },
      {
        path: 'draft',
        component: DraftsComponent
      }
    ]
  },
  { path: 'adddocument', component: AdddocumentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addfields', component: AddFieldsComponent },
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
    LoginComponent,
    RegisterComponent,
    DraftsComponent,
    AddFieldsComponent,
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
