import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | '' | undefined = '';
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green,
    },
  ];

  toggoleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
