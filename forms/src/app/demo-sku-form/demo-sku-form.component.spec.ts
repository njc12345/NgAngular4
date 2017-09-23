import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSkuFormComponent } from './demo-sku-form.component';

describe('DemoSkuFormComponent', () => {
  let component: DemoSkuFormComponent;
  let fixture: ComponentFixture<DemoSkuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSkuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSkuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
