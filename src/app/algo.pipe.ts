import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'algo'
})
export class AlgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
