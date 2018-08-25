import { TestBed, inject } from '@angular/core/testing';

import { NewsServicesService } from './news-services.service';

describe('NewsServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsServicesService]
    });
  });

  it('should be created', inject([NewsServicesService], (service: NewsServicesService) => {
    expect(service).toBeTruthy();
  }));
});

