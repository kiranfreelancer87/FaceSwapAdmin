import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  public static baseUrl: string = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}
  addCategory(categoryData:any): Observable<any>{
    const url = `${ApiService.baseUrl}/categories`
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.post(url, categoryData, {headers:headers})
  }
  getallcategory(): Observable<any>{
    const url = `${ApiService.baseUrl}/categories`;
    return this.http.get(url)
  }
  updateCategory(id: number, categoryData: any): Observable<any> {
    const url = `${ApiService.baseUrl}/categories/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, categoryData, { headers: headers });
  }
  deleteCategory(id:number):Observable<any>{
    const url = `${ApiService.baseUrl}/categories/${id}`;
    return this.http.delete(url)
  }

  uploadImage(categoryId: number, image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', image);

    return this.http.post(`${ApiService.baseUrl}/categories/${categoryId}/images`, formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    });
  }
  getImagesByCategory(categoryId: number): Observable<any> {
    return this.http.get(`${ApiService.baseUrl}/categories/${categoryId}/images`);
  }
  
  deleteImage(id: number): Observable<any> {
    const url = `${ApiService.baseUrl}/images/${id}`;
    return this.http.delete<any>(url);
  }
}