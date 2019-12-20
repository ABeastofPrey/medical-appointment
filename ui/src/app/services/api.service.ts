import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const crud = method => (url: string, data?: Object): Observable<AjaxResponse | AjaxError> => {
    return ajax({
        url,
        method,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'rxjs-custom-header': 'Rxjs'
        },
        body: JSON.stringify(data)
    }).pipe(
        // map(res => res),
        catchError((err: AjaxError) => {
            console.log(err);
            return throwError(err);
        })
    );
};

export const getData = crud('get');

export const putData = crud('put');

export const postData = crud('post');

export const deleteData = crud('delete');
