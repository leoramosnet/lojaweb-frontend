import { TestBed, inject } from '@angular/core/testing';

import { UtilMessageService } from './util-message.service';

describe('UtilMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilMessageService]
    });
  });

  it('should be created', inject([UtilMessageService], (service: UtilMessageService) => {
    expect(service).toBeTruthy();
  }));
});
