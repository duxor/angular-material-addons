/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { animate, AnimationTriggerMetadata, state, style, transition, trigger, } from '@angular/animations';
/** Animations used by the Material bottom sheet. */
export const matRightSheetAnimations: {
  readonly rightSheetState: AnimationTriggerMetadata;
} = {
  /** Animation that shows and hides a bottom sheet. */
  rightSheetState: trigger('state', [
    state('void, hidden', style({transform: 'translateX(100%)'})),
    state('visible', style({transform: 'translateX(0%)'})),
    transition(
      'visible => void, visible => hidden',
      animate('375ms cubic-bezier(0.4, 0, 1, 1)'),
    ),
    transition(
      'void => visible',
      animate('225ms cubic-bezier(0, 0, 0.2, 1)'),
    ),
  ]),
};
