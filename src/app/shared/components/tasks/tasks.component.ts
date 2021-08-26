import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CreateModalComponent } from './create-modal/create-modal.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() tasks = null;
  @ViewChild(CreateModalComponent) child:CreateModalComponent;

  constructor() { }

  ngOnInit(): void {
    console.log(this.tasks);
  }

  public openNewTaskModal()
  {
    this.child.openModal('createNewTaskModal');
  }

}
