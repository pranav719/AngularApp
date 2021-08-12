import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class UserapiService {

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
}
