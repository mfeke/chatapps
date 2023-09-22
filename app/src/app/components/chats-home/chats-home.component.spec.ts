import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsHomeComponent } from './chats-home.component';

describe('ChatsHomeComponent', () => {
  let component: ChatsHomeComponent;
  let fixture: ComponentFixture<ChatsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatsHomeComponent]
    });
    fixture = TestBed.createComponent(ChatsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
