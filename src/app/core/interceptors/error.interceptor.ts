import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        catchError((error) => {
            let customMessage = 'Ocurrió un error en la comunicación con la API.';

            if (error.status === 404) {
                customMessage = 'El recurso solicitado no existe (Error 404).';
            } else if (error.status === 0) {
                customMessage = 'No hay conexión con el servidor o fue bloqueado por CORS.';
            } else if (error.status === 403) {
                customMessage = 'Límite de peticiones alcanzado.';
            }

            // Si necesitas propagar un error personalizado sin perder el status HTTP original:
            const customError = new Error(customMessage);
            (customError as any).status = error.status; // Conservamos el código HTTP

            return throwError(() => customError);
        })
    );
};