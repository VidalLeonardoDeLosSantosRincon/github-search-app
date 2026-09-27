import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true // Elimina esta línea si usas un NgModule tradicional
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string | Date | null | undefined): string {
    if (!value) return '';

    const date = new Date(value);
    
    // Validar si la fecha es válida
    if (isNaN(date.getTime())) return '';

    const currentYear = new Date().getFullYear();
    const dateYear = date.getFullYear();

    // Obtener el nombre completo del mes en español
    const monthFormatter = new Intl.DateTimeFormat('es-ES', { month: 'long' });
    let month = monthFormatter.format(date);
    
    // Capitalizar la primera letra del mes (ej. "mayo" -> "Mayo")
    month = month.charAt(0).toUpperCase() + month.slice(1);

    const day = date.getDate();

    // Si es el año actual => Mayo 19
    if (dateYear === currentYear) {
      return `${month} ${day}`;
    }

    // Si no es el año actual => Mayo 19, 2022
    return `${month} ${day}, ${dateYear}`;
  }

}