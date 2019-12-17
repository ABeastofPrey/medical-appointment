import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const crud = method => (url, data?: Object) => {
    return ajax({
        url,
        method,
        headers: {
            'Content-Type': 'application/json',
            'rxjs-custom-header': 'Rxjs'
        },
        body: {
            rxjs: JSON.stringify(data)
        }
    }).pipe(
        map(res => {
            // console.log(res);
            return res;
        }),
        catchError(err => {
            console.log('error: ', err);
            return of(err);
        })
    );
};

export const getData = crud('get');

export const putData = crud('put');

export const postData = crud('post');

export const deleteData = crud('delete');
