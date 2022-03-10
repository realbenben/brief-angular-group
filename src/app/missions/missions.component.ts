import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {

  title = "Les missions de la CJC";

  constructor() { }

  ngOnInit(): void {
  }

}
