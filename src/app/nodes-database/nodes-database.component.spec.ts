import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesDatabaseComponent } from './nodes-database.component';

describe('NodesDatabaseComponent', () => {
  let component: NodesDatabaseComponent;
  let fixture: ComponentFixture<NodesDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodesDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
