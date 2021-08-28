import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from '../../modal';
import { ListServiceService } from "../../../services/lists/list-service.service";

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  listName: string;
  createModalId: string = 'createNewListModal';

  @ViewChild('lName') lname: ElementRef;

  constructor(private modalService: ModalService, private listService: ListServiceService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
    this.lname.nativeElement.focus();
  }

  closeModal(id: string = this.createModalId) {
      this.modalService.close(id);
  }

  public createList()
  {

    let list = {
      name: this.listName
    }

    // send the data to the task service and handle the response
    this.listService.createList(list).subscribe(
      result => {
        console.log(result);
        // if(result.status_code == 201) {
        //   // pass the task object back to the parent component 
        //   // this.incommingTask.emit(result.task);
        // }
      },
      error => {
        alert('There was an error creating the list');
      },() => {
        // only close the modal if request was successful
        this.closeModal();
      }
    );

  }

}
