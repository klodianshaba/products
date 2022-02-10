import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {zoomIn } from "ngxa";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    zoomIn({direction: 'Down', timings:'500ms', translate:'100px'})
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {}

  onNavigateProducts(): void{
    this.router.navigate(['']).then();
  }
  onNavigateAddProduct(): void{
    this.router.navigate(['/add']).then();
  }
  onStore(): void{
    this.onNavigateProducts();
  }

}
