import { Component, OnInit } from '@angular/core';
import { ListServiceService } from "../../services/lists/list-service.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists:object[] = []

  constructor(private listService: ListServiceService, private router: Router) 
  { 

  }

  ngOnInit(): void {
    this.getUserLists();
  }

  /**
   * Get all the users lists
   * Returned lists are multidimentional arrays of objects. All active tasks
   * are returned with the list under list.tasks
   */
  public getUserLists()
  {
    this.listService.userLists().subscribe(
      result => {
        this.lists = result;
      },
      error => {
        
      },() => {
 
      }
    );
  }

  /**
   * Navigate to a single list view
   * @param id 
   * @returns 
   */
  public openList(id:number)
  {
    return this.router.navigateByUrl('/list/' + id);
  }

}
