import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from '../../modal';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {

  taskName: string;
  taskDescription: string;
  createModalId: string = 'createNewTaskModal';
  @ViewChild('tName') tname: ElementRef;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {

  }

  openModal(id: string) {
    this.modalService.open(id);
    this.tname.nativeElement.focus();
  }

  closeModal(id: string = this.createModalId) {
      this.modalService.close(id);
  }

  createTask() {
    console.log(this.taskName);
    this.closeModal(this.createModalId);
  }

}
