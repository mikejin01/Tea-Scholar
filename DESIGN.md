---
name: Scholar’s Sanctuary
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#5a413e'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#8e706d'
  outline-variant: '#e2bebb'
  surface-tint: '#b32827'
  primary: '#9e171a'
  on-primary: '#ffffff'
  primary-container: '#c1322f'
  on-primary-container: '#ffe1de'
  inverse-primary: '#ffb3ac'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#4f504d'
  on-tertiary: '#ffffff'
  tertiary-container: '#676865'
  on-tertiary-container: '#e9e8e4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb3ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#910912'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e3e2df'
  tertiary-fixed-dim: '#c7c7c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#464744'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style

This design system is built upon a foundation of **Minimalism** infused with **Modern Corporate** precision. It is designed to evoke a sense of scholarly authority, serenity, and premium craftsmanship. The target audience values deep focus, cultural heritage, and intellectual clarity.

The visual language balances the warmth of traditional "paper-and-ink" aesthetics with the efficiency of modern SaaS. The UI should feel intentional and quiet, allowing the content—and specifically the primary accent color—to command attention where necessary. Negative space is used aggressively to reduce cognitive load and emphasize high-quality typography.

## Colors

The palette is anchored by the heritage red extracted directly from the brand identity. 

- **Primary (#C1322F):** A deep, saturated crimson used for critical actions, active states, and brand-defining accents. It must be used sparingly to maintain its impact.
- **Secondary (#1A1A1A):** An "Ink Black" used for high-contrast typography and structural elements.
- **Tertiary (#F9F8F4):** A "Paper White" surface color that provides a softer, more sophisticated background than pure hex white, reducing eye strain during long reading sessions.
- **Neutral (#6B6B6B):** Used for secondary text and decorative borders to provide a clear hierarchy without competing with the primary red.

## Typography

The typographic system creates a dialogue between tradition and modernity. 

**Headlines** utilize **Noto Serif**, providing a literary and authoritative tone. They should be set with tight letter-spacing to feel cohesive. **Body and UI elements** utilize **Manrope**, chosen for its geometric clarity and exceptional legibility at small sizes. 

For mobile devices, headlines scale down to ensure readability within narrower viewports. All labels and functional micro-copy use a semi-bold weight of Manrope with increased letter-spacing and uppercase styling to differentiate them from long-form body text.

## Layout & Spacing

This design system employs a **Fluid Grid** model. On desktop, the layout is contained within a 1280px maximum width, utilizing a 12-column grid. 

- **Desktop:** 12 columns, 24px gutters, and 64px outer margins.
- **Tablet:** 8 columns, 24px gutters, and 32px outer margins.
- **Mobile:** 4 columns, 16px gutters, and 16px outer margins.

The spacing rhythm is based on a 4px baseline, ensuring that all vertical and horizontal padding is a multiple of this base unit. This creates a rhythmic, predictable flow across all screen sizes.

## Elevation & Depth

To maintain the minimalist aesthetic, depth is communicated through **Low-contrast outlines** and **Tonal layers** rather than heavy shadows. 

- **Surface Levels:** The primary background is the Tertiary "Paper" color. Content cards or containers use pure white (#FFFFFF) with a subtle 1px border (#E5E4E0) to create a "stacked" paper effect.
- **Interaction Depth:** Only the most critical components (like the primary red button) may use a very soft, diffused shadow (15% opacity of the primary red) when hovered to simulate a slight physical lift.
- **Backdrop:** Modal overlays should use a subtle blur (8px) with a 40% opacity black tint to focus the user’s attention on the scholarly content.

## Shapes

The shape language is **Soft (Level 1)**. 

A 0.25rem (4px) corner radius is applied to buttons, input fields, and small UI components. This subtle rounding maintains a professional and disciplined look while removing the harshness of 90-degree angles. Large containers and cards may use `rounded-lg` (0.5rem) to differentiate them from smaller functional elements.

## Components

### Buttons
- **Primary:** Solid `#C1322F` background with white text. No border. On hover, darken the red by 10%.
- **Secondary:** Transparent background with a 1px `#C1322F` border and `#C1322F` text.
- **Tertiary:** Pure text links in `#C1322F` with a 1px underline that appears only on hover.

### Input Fields
- Use a white background with a 1px `#E5E4E0` border. On focus, the border transitions to the Primary Red (`#C1322F`) to provide clear visual feedback.

### Chips & Tags
- Used for categories. These should have a very pale tint of the primary red (5% opacity) as a background with dark red text to remain legible but secondary in the visual hierarchy.

### Lists
- Separated by thin 1px horizontal lines (`#E5E4E0`). List icons or bullets should utilize the Primary Red to act as directional cues.

### Cards
- Cards feature the 0.5rem radius, a white fill, and a subtle light-grey border. They do not use shadows unless they are interactive "hover" cards.