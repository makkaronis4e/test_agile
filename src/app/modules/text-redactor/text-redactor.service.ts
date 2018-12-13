import { Injectable } from "@angular/core";
import { HttpClient } from 'selenium-webdriver/http';


@Injectable()
export class TextService {

  constructor(
    private http: HttpClient
  ) {}

}
