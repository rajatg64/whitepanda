import { TestBed, inject } from '@angular/core/testing';

import { RegresService } from './regres.service';

describe('RegresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegresService]
    });
  });

  it('should ...', inject([RegresService], (service: RegresService) => {
    expect(service).toBeTruthy();
  }));
});
