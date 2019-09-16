import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        return items.filter(it => {
            return it.id.toString().includes(searchText);//si concuerda con el id del usuario muestra
        });
    }
}