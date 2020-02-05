import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, reset, decrement } from 'src/app/store/counter/counter.actions';
import { selectCount } from 'src/app/store/counter/counter.selector';
import { State } from 'src/app/store/counter/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<State>) {
    this.count$ = store.pipe(select(selectCount));
  }

  ngOnInit() {
  }

  increment () {
    this.store.dispatch(increment());
  }

  reset () {
    this.store.dispatch(reset());
  }

  decrement () {
    this.store.dispatch(decrement());
  }

}
