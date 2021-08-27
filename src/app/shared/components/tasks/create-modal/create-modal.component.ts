import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../../modal';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { TaskServiceService } from "../../../services/tasks/task-service.service";


@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})

export class CreateModalComponent implements OnInit {

  taskName: string;
  taskDescription: string;
  createModalId: string = 'createNewTaskModal';
  listId: number;

  @ViewChild('tName') tname: ElementRef;
  @Output() incommingTask: EventEmitter<string> = new EventEmitter();

  constructor(private modalService: ModalService, private activatedRoute: ActivatedRoute, private taskService: TaskServiceService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.listId = params['id'];
    });

  }

  openModal(id: string) {
    this.modalService.open(id);
    this.tname.nativeElement.focus();
  }

  closeModal(id: string = this.createModalId) {
      this.modalService.close(id);
  }

  createTask() {

    let task = {
      name: this.taskName,
      description: this.taskDescription,
      task_list_id: this.listId
    }

    // send the data to the task service and handle the response
    this.taskService.createTask(task).subscribe(
      result => {
        if(result.status_code == 201) {
          // pass the task object back to the parent component 
          this.incommingTask.emit(result.task);
        }
      },
      error => {
        alert('There was an error creating the task');
      },() => {
        // only close the modal if request was successful
        this.closeModal();
      }
    );

  }

}
