// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, map, switchMap, tap } from 'rxjs/operators';
//
// import * as mainAction from './main.actions';
// import { PostsService } from 'src/app/shared/posts.service';
//
// @Injectable()
// export class MainEffects {
//   constructor(private action$: Actions, private postService: PostsService) { }
//
//   main$ = createEffect(() =>
//     this.action$.pipe(
//       ofType(mainAction.ADD_MAIN),
//       switchMap((action) =>
//         this.postService.getAll().pipe(
//           map((response) => {
//             // console.log(action, response);
//             // throw new Error("any error");
//             return { type: mainAction.DEL_MAIN, payload: 100 };
//             // return new mainAction.DelMainAction(100); // or
//           }),
//           catchError((err: any) => of({ type: mainAction.ERR_MAIN, payload: err.message }))
//         )
//       )
//     )
//   );
//
//   mainTwo$ = createEffect(() =>
//     this.action$.pipe(
//       ofType(mainAction.ADD_MAIN),
//       tap(console.log),
//       map((action: any) => ({ type: mainAction.DEL_MAIN, payload: action.payload - 50 }))
//     ) // { dispatch: false }
//   );
//
// }


