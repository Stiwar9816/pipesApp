import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Puede Volar' | 'No puede volar' {
    return value ? 'Puede Volar' : 'No puede volar';
  }
}
