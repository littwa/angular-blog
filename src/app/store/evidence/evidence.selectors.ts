import { createSelector, Store } from '@ngrx/store';

// export const ev = (s) => s.evidence;
export const getEvidences = createSelector((s: any) => s.evidence, (s) => s);
