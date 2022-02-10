import { Component, OnInit } from '@angular/core';
import {bounceIn, staggerNestedAnimations} from "ngxa";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    bounceIn({stateChangeExpressions:':enter, 0 => 1', direction: 'Left', timings: '500ms'}),
    staggerNestedAnimations({timings:'300ms', stateChangeExpressions:':enter, 0 => 1'}),
  ]
})
export class FooterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
