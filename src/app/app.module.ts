import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AmsHeaderComponent } from './shared/components/ams-header/ams-header.component';
import { AmsSidebarComponent } from './shared/components/ams-sidebar/ams-sidebar.component';
import { ListsComponent } from './shared/components/lists/lists.component';
import { NotebooksComponent } from './shared/components/notebooks/notebooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AmsHeaderComponent,
    AmsSidebarComponent,
    ListsComponent,
    NotebooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
