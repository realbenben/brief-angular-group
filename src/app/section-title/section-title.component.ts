import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {

  // Hangover \o/
  // Declaration of title variable coming from parent component

  @Input() title = "";

  constructor() { }

  ngOnInit(): void {
  }

}
