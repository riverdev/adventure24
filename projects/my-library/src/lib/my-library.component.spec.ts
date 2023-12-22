import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibraryComponent } from './my-library.component';

describe('MyLibraryComponent', () => {
  let component: MyLibraryComponent;
  let fixture: ComponentFixture<MyLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
