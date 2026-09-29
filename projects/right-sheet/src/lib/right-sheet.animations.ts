/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the Material right sheet.
 * @deprecated No longer used, the right sheet is animated with CSS
 * (see `right-sheet.container.scss`). Will be removed.
 * @breaking-change 23.0.0
 */
export const matRightSheetAnimations: {
  readonly rightSheetState: any;
} = {
  // Represents the output of the former `@angular/animations` definition,
  // kept as plain metadata so the library no longer imports that package:
  // trigger('state', [
  //   state('void, hidden', style({transform: 'translateX(100%)'})),
  //   state('visible', style({transform: 'translateX(0%)'})),
  //   transition(
  //     'visible => void, visible => hidden',
  //     animate('375ms cubic-bezier(0.4, 0, 1, 1)'),
  //   ),
  //   transition(
  //     'void => visible',
  //     animate('225ms cubic-bezier(0, 0, 0.2, 1)'),
  //   ),
  // ])
  rightSheetState: {
    type: 7,
    name: 'state',
    definitions: [
      {
        type: 0,
        name: 'void, hidden',
        styles: {type: 6, styles: {transform: 'translateX(100%)'}, offset: null},
        options: undefined,
      },
      {
        type: 0,
        name: 'visible',
        styles: {type: 6, styles: {transform: 'translateX(0%)'}, offset: null},
        options: undefined,
      },
      {
        type: 1,
        expr: 'visible => void, visible => hidden',
        animation: {type: 4, styles: null, timings: '375ms cubic-bezier(0.4, 0, 1, 1)'},
        options: null,
      },
      {
        type: 1,
        expr: 'void => visible',
        animation: {type: 4, styles: null, timings: '225ms cubic-bezier(0, 0, 0.2, 1)'},
        options: null,
      },
    ],
    options: {},
  },
};
