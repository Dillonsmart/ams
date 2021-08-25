import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ListServiceService } from "../../shared/services/lists/list-service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListServiceService, private activatedRoute: ActivatedRoute) { }

  listId: number = 0;
  list: object = {};

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.listId = params['id'];
      this.getList();
    });

  }

  public getList()
  {
    this.listService.getList(this.listId).subscribe(
      result => {
        this.list = result;
        console.log(this.list);
      },
      error => {
        
      },() => {
 
      }
    );
  }

}
