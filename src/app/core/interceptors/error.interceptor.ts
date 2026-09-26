import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      console.error('Error en la petición HTTP:', error);
      return throwError(() => new Error('Ocurrió un error en la comunicación con la API.'));
    })
  );
};