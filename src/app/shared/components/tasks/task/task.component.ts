import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task = null;

  listId: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      this.listId = params['id'];
    });
  }

  ngOnInit(): void {

  }

  public viewTask(id: number)
  {
    return this.router.navigateByUrl('/list/' + this.listId + '/task/' + id);
  }

}
