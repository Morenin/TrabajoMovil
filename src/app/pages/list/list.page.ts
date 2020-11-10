import { Component, OnInit } from '@angular/core';
import { Ficha } from '../../interfaces/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  fichas: Ficha[] = [
    {
      date: '01/01/2020',
      activity: 'actividad-1'
    },
    {
      date: '02/02/2020',
      activity: 'actividad-2'
    },
    {
      date: '03/03/2020',
      activity: 'actividad-3'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
