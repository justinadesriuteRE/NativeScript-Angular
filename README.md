### Architecture

- `app.component.ts` - sets up the tab view and defines page router otlets for its items.

### Styling
This template is set up to use SASS for styling. All classes used are based on the {N} core theme – consult the [documentation](https://docs.nativescript.org/angular/ui/theme.html#theme) to understand how to customize it. Check it out to see what classes you can use on which component.

It has 4 global style files that are located at the root of the app folder:
- `_app-common.scss` - holds the CSS rules you want to apply on both iOS and Android here.
- `_app-variables.scss` - holds the global SASS variables that are imported on each component's styles.
- `app.android.scss` - the global Android style sheet. These style rules are applied to Android only.
- `app.ios.scss` - the global iOS style sheet. These style rules are applied to iOS only.

A component could have 3 style files located in the its folder:
- `_component-name.component.scss` - the component common style sheet. These style rules are applied to both Android and iOS.
- `component-name.component.android.scss` - the component Android style sheet. These style rules are applied to Android only.
- `component-name.component.ios.scss` - the component iOS style sheet. These style rules are applied to iOS only.
