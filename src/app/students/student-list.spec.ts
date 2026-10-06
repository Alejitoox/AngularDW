import { TestBed } from '@angular/core/testing';

import { StudentList } from './student-list';

describe('StudentList', () => {
  let service: StudentList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
