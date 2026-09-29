# RightSheet

Run `npm i @insightfulio/mat-right-sheet` and add `MatRightSheetModule` to your modules. For further usage information see the official documentation for [BottomSheet](https://material.angular.io/components/component/bottom-sheet) and replace `BottomSheet` with `RightSheet`.

## Animations

The sheet slides in and out with plain CSS animations, so it does not depend on `@angular/animations` and needs neither `provideAnimations()` nor `BrowserAnimationsModule`. Animations are skipped when Angular Material animations are disabled (`{provide: MATERIAL_ANIMATIONS, useValue: {animationsDisabled: true}}`), when `NoopAnimationsModule` / `provideNoopAnimations()` is present, or when the user prefers reduced motion.

## Theme

Include the theming in your stylesheets. For example:

```SCSS
@use "@insightfulio/mat-right-sheet/right-sheet-theme" as mrs;

@include mrs.mat-right-sheet-theme($theme);

@include mrs.mat-right-sheet-typography($custom-typography);
```
