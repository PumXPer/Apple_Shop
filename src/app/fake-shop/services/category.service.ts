import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly http: HttpClient) {}

  getCategoryList(): Observable<Categories[]> {
    return this.http.get<Categories[]>(
      'https://FinalProject.pumper.repl.co/categories',
    );
  }
}
