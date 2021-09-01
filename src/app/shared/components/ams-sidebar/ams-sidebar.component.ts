import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListsComponent } from '../lists/lists.component';

@Component({
  selector: 'app-ams-sidebar',
  templateUrl: './ams-sidebar.component.html',
  styleUrls: ['./ams-sidebar.component.scss']
})
export class AmsSidebarComponent implements OnInit {

  @ViewChild('sidebar') sidebar: ElementRef;
  @ViewChild('lists') child: ListsComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public update()
  {
    this.child.getUserLists();
  }

}
