import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuit',
  standalone: true
})
export class CuitPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return `${value.substring(0, 2)}-${value.substring(2, 10)}-${value.substring(10)}`;
  }

}
