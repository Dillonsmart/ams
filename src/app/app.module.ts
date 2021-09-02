import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AmsHeaderComponent } from './shared/components/ams-header/ams-header.component';
import { AmsSidebarComponent } from './shared/components/ams-sidebar/ams-sidebar.component';
import { ListsComponent } from './shared/components/lists/lists.component';
import { NotebooksComponent } from './shared/components/notebooks/notebooks.component';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { TaskComponent } from './shared/components/tasks/task/task.component';
import { TasksComponent } from './shared/components/tasks/tasks.component';
import { ModalModule } from './shared/components/modal';
import { CreateModalComponent } from './shared/components/tasks/create-modal/create-modal.component';
import { ViewTaskComponent } from './shared/components/tasks/view-task/view-task.component';
import { CreateListComponent } from './shared/components/lists/create-list/create-list.component';
import { InboxComponent } from './pages/inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AmsHeaderComponent,
    AmsSidebarComponent,
    ListsComponent,
    NotebooksComponent,
    LoginComponent,
    ListComponent,
    TaskComponent,
    TasksComponent,
    CreateModalComponent,
    ViewTaskComponent,
    CreateListComponent,
    InboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule
  ],
  entryComponents: [
    ViewTaskComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
