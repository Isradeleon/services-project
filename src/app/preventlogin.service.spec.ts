import { TestBed, inject } from '@angular/core/testing';

import { PreventloginService } from './preventlogin.service';

describe('PreventloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventloginService]
    });
  });

  it('should be created', inject([PreventloginService], (service: PreventloginService) => {
    expect(service).toBeTruthy();
  }));
});
