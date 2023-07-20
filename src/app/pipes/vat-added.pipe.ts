import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  //Value : Değiştirilmek istenen değer , rate: gönderdiğim parametre ,  ):number metodun dönüş tipi
  transform(value: number, rate:number): number {
    return value +(value * rate /100);
  }

}
