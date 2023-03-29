import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Products, SearchData } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly http: HttpClient) {}

  private color = 'pink';

  private apiUrl = 'https://FinalProject.pumper.repl.co/products';

  private ccoo = `https://FinalProject.pumper.repl.co/products${this.color}`;
  // return this.http.get<Products[]>(`${this.apiUrl}?search=${this.color}`);

  getProductList(searchData?: SearchData): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl, {
      params: searchData,
    });
  }

  private id = 1;

  getProductById(id: string): Observable<Products> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Products>(url);
  }

  save(data: Products): void {
    localStorage.setItem('keyName', JSON.stringify(`${data}`));
  }

  load() {
    const json = localStorage.getItem('keyName');

    if (json) {
      return JSON.parse(json);
    }
  }

  // getProductList(searchTerm: string): Observable<Products[]> {
  //   return this.http
  //     .get<Products[]>('https://FinalProject.pumper.repl.co/products')
  //     .pipe(
  //       map((products) => {
  //         if (searchTerm && searchTerm.trim() !== '') {
  //           return products.filter(
  //             (product) =>
  //               product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //               product.color.toLowerCase().includes(searchTerm.toLowerCase()),
  //           );
  //         } else {
  //           return products;
  //         }
  //       }),
  //     );
  // }
}
