import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderStandingHighChartComponent } from './under-standing-high-chart.component';

describe('UnderStandingHighChartComponent', () => {
  let component: UnderStandingHighChartComponent;
  let fixture: ComponentFixture<UnderStandingHighChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderStandingHighChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderStandingHighChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
