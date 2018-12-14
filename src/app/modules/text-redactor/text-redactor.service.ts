import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Synonyms } from './text-redactor.model';
import { map } from 'lodash';



@Injectable()
export class TextService {

  constructor(
    private http: HttpClient,
  ) {}


  async getSynonyms(word: string) {
    const response = await this.http.get<Synonyms>((`https://api.datamuse.com/words?ml=${ word }&max=3`)).toPromise();
    const result = map(response, item => item.word);
    return result;
  }
}
