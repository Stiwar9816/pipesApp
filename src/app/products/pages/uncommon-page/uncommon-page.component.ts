import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Stiwar';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Sofia';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = [
    'Andres',
    'Jorge',
    'Carlos',
    'Pedro',
    'Jhon',
    'Andrea',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.pop();
  }

  // KeyValue Pipe
  public person = {
    name: 'Stiwar',
    age: 24,
    addres: 'Quibdó, Colombia',
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(1000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 2000);
  });
}
