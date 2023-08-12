import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'stiwar';
  public nameUpper: string = 'STIWAR';
  public fullName: string = 'sTiWaR';
  public customDate: Date = new Date();
}
