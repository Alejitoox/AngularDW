import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://desarrolloweb.click/api/estudiante/clases';

  constructor(private http: HttpClient) { }

  list(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
}