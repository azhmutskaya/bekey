import { Injectable } from '@angular/core';
import { jsonUsers } from './mocks/users-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private users = JSON.parse(JSON.stringify(jsonUsers));

  constructor(
  ) {
    console.log(this.users);
  }

  public get(path: string): void {
  }

  public post(path: string): void {
  }

  public put(path: string): void {
  }

  public delete(path: string): void {
  }
}
