
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, mergeMap, retryWhen, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor {

	private delayBetweenRetriesMs = 1000;
	private numberOfRetries = 1;
	private authorizationHeader = 'Authorization';

	constructor(

		private router: Router,
		private http: HttpClient
	) {

	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		// login page
		request = request.clone({
			headers: new HttpHeaders({
				'Content-Type': 'application/json; charset=utf-8',
				'X-Origin': '3'
			})
		});

		return next.handle(request).pipe(
			catchError((error: any, caught: Observable<HttpEvent<any>>) => {

				return throwError(error);
			})
		)
	}

}