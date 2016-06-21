
1. Few elements from screenshots were ignored due to poor quality of image, though
those were something easy to code. Also the result seemed consistent: kind of
flat UI design.

2. I used few alignment/centering techniques: table-like, pseudo-classes and flex just
to show different options. Depending on browsers need to be supported one can be preferred
over another.

3. The chosen SASS architecture might not be ideal (as we need to see all possible components/pages, the 'whole picture'),
but just an example of how that can be used, modified and enhanced for this and other project.

4. There are few ways for toggling the styles, I chose the show the 'theme' way.
   Inside a particular theme .scss file I'm modifying the variables at the beginning and importing the other styles.
   This is OK for premade changes, however for small client-side toggling other option might be preferable

   Other options are:
   - Creating a map of variables, a mixing and a loop in SASS, so the outputted CSS will something like
     .theme-dark .button { background: #000; } .theme-light .button { background: #ccc }
     Then toggling CSS class on body/wrapper
   - Import partial CSS with updated styles
   - Premade theme selectors, like .theme-dark { <some styles> }

5. Code can be viewed on GITHUB if needed


Areas of improvement (or what else would I do if it were a real project)

 - Refactor of some SASS files to follow DRY principle
 - Rearrange JS into separate files and bundle them only for production
 - Vendor prefixes for browsers need to be supported
 - Accessibility
 - Render profiling and optimization
