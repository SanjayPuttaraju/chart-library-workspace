import { TestBed } from '@angular/core/testing';

import { CustomChartsService } from './custom-charts.service';

describe('CustomChartsService', () => {
  let service: CustomChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
