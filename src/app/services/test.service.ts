import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TestService {
  constructor() {}
  value = Math.floor(Math.random() * 10);
}
