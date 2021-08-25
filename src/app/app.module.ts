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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
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
