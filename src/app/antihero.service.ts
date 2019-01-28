import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Antihero } from './antihero';
import { ANTIHEROES } from './mock-antiheroes';

@Injectable({
  providedIn: 'root',
})
export class AntiheroService {

  constructor() { }

  getAntiheroes(): Observable<Antihero[]> {
    return of(ANTIHEROES);
  }

  getAntihero(id: number): Observable<Antihero> {
    return of(ANTIHEROES.find(antihero => antihero.id === id));
  }
}