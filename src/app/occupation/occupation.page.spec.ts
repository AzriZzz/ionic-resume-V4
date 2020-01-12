import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OccupationPage } from './occupation.page';

describe('OccupationPage', () => {
  let component: OccupationPage;
  let fixture: ComponentFixture<OccupationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OccupationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
