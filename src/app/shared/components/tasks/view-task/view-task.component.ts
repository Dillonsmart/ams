import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../../modal';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { TaskServiceService } from "../../../services/tasks/task-service.service";

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  taskId: number;
  task: object = {};

  constructor(private modalService: ModalService, private activatedRoute: ActivatedRoute, private taskService: TaskServiceService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.taskId = params['taskId'];
      this.getTask(this.taskId);
    });

  }

  public getTask(id: number)
  {

    this.taskService.getTask(id).subscribe(
      result => {
        this.task = result['data'];
      },
      error => {
        
      },() => {
 
      }
    );

  }

}
