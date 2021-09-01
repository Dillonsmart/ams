import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { CreateModalComponent } from './create-modal/create-modal.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() tasks = null;
  @ViewChild(CreateModalComponent) child:CreateModalComponent;
  @Output() newTaskCreated: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  public openNewTaskModal()
  {
    this.child.openModal('createNewTaskModal');
  }

  /**
   * New task being passed for child component
   * Adds the task to the tasks array
   */
  public handleNewTask($event)
  {
    // append the new task
    this.tasks.unshift($event);
    this.newTaskCreated.emit();
  }

}
