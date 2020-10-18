import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CategoriasService } from './categorias.service';
import { Observable } from 'rxjs';

describe('CategoriasService', () => {
  let categoriasService: CategoriasService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CategoriasService], imports: [HttpClientTestingModule]});
    categoriasService = TestBed.get(CategoriasService);
  });

  it('should be created', () => {
    expect(categoriasService).toBeTruthy();
  });

});
