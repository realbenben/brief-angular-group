import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PRESENTATIONComponent implements OnInit {

  title = "Présentation de la CJC";
  constructor() { }

  ngOnInit(): void {
  }

}
