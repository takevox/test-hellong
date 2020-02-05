import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './counter.reducer';

export const selectCounterState = createFeatureSelector<State>('count');
export const selectCount = createSelector(selectCounterState, state => state.count);
