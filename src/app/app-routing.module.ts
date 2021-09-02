import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { ViewTaskComponent } from './shared/components/tasks/view-task/view-task.component';

const routes: Routes = [
  {'path': '', component: HomeComponent},
  {'path': 'login', component: LoginComponent},
  {'path': 'list/:id', component: ListComponent},
  {'path': 'list/:id/task/:taskId', component: ViewTaskComponent},
  {'path': 'inbox', component: InboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
