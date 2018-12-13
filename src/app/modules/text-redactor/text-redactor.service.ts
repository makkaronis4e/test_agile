import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class TextService {

  constructor(
    private http: HttpClient,
  ) {}

}
