import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
