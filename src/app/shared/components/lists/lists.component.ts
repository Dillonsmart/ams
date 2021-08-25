import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor() { }

  lists = [
    'Todo List',
    'Shopping List',
    'Watch List',
    'Books to read'
  ];

  ngOnInit(): void {
  }

}
