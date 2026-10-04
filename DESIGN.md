---
name: Mr. James Chicken Phong Nha
description: A warm burgundy-and-cream restaurant identity built around food, heritage, and an easy visit.
colors:
  cream: "#fbf8f0"
  paper: "#fffdf8"
  soft: "#f3eee4"
  burgundy: "#791c16"
  burgundy-dark: "#5b1511"
  gold: "#d98612"
  gold-text: "#a45b00"
  ink: "#2e211b"
  muted: "#66534b"
  line: "#dbcbb7"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(5rem, 8.8vw, 9rem)"
    fontWeight: 900
    lineHeight: 0.78
    letterSpacing: "-0.027em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.25rem, 4.7vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.35rem, 1.8vw, 1.9rem)"
    fontWeight: 800
    lineHeight: 1
  body:
    fontFamily: "Work Sans, Arial, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.55
  label:
    fontFamily: "Work Sans, Arial, sans-serif"
    fontSize: "0.77rem"
    fontWeight: 800
    letterSpacing: "0.12em"
rounded:
  pill: "999px"
  circle: "50%"
components:
  button-primary:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.65rem"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.burgundy-dark}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.burgundy}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.65rem"
    height: "3.5rem"
  button-outline-hover:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.paper}"
  button-light:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.burgundy}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.65rem"
    height: "3.5rem"
  menu-filter:
    backgroundColor: "transparent"
    textColor: "{colors.burgundy}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.1rem"
  menu-filter-active:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.paper}"
  favorite-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "0"
---

# Design System: Mr. James Chicken Phong Nha

## Overview

**Creative North Star: "The Burgundy Restaurant Marquee"**

The user-selected restaurant reference leads with a large, condensed name beside close food imagery. Burgundy lettering and generous cream space make the storefront feel immediately recognizable; amber marks prices, place, and heritage. The mood is warm, direct, and appetite-led.

The interface feels like a restaurant invitation rather than an abstract brand exercise. Broad photographic areas carry appetite; compact proof, legible prices, and repeated directions carry the visit. On small screens, that same language stacks vertically and keeps menu and directions within reach.

**Key Characteristics:**

- Oversized Barlow Condensed headlines pair with quieter Work Sans detail.
- Cream and paper surfaces frame food imagery; burgundy anchors headlines and actions.
- Amber is a small, high-visibility accent; its darker text companion keeps prices and proof legible on light ground.
- Fine rules and tonal sections provide structure; almost every surface remains flat.
- Pill actions and filters contrast with square food cards and editorial dividers.

## Colors

The palette follows the selected cream, deep burgundy, and amber restaurant reference. The frontmatter carries the exact color values used by the site.

### Primary

- **Restaurant Burgundy** (`burgundy`): Main headline color, primary action fill, selected menu category, and the full visit section.
- **Deep Burgundy** (`burgundy-dark`): Darker primary action hover state.

### Secondary

- **Appetite Amber** (`gold`): Location name, star and time symbols, and the heritage panel. Keep it visible but sparse.
- **Deep Amber Ink** (`gold-text`): Favorite-card prices and the 1984 proof numeral on light ground.

### Neutral

- **Warm Cream** (`cream`): Main page ground and light action fill on burgundy.
- **Paper White** (`paper`): Header, proof strip, food cards, reviews, and mobile action bar.
- **Menu Linen** (`soft`): Menu section ground, distinguishing it from adjacent cream and paper sections.
- **Dark Food Ink** (`ink`): Body text, menu names, and card titles.
- **Warm Muted Brown** (`muted`): Descriptions and secondary detail.
- **Fine Sand Rule** (`line`): Dividers and card outlines.

**The Amber Accent Rule.** Use bright amber for symbols and the heritage panel; use the darker amber for small price and proof text on light ground.

## Typography

**Display Font:** Barlow Condensed (sans-serif fallback).  
**Body Font:** Work Sans (Arial, sans-serif fallback).

**Character:** The heavy condensed face gives the restaurant name, menu, and section titles the energy of a printed storefront sign. Work Sans keeps descriptions, logistics, and buttons easy to read.

### Hierarchy

- **Display** (`display`): Extra-heavy, tightly set hero lettering. The responsive size and compressed line height make the name the first visual anchor.
- **Headline** (`headline`): Burgundy, condensed section titles. Story and visit headings scale slightly larger where the layout supports them.
- **Title** (`title`): Condensed, uppercase food and menu names, paired with prices aligned at the opposite edge.
- **Body** (`body`): Work Sans descriptions and practical information. Long story text uses a looser line height (1.75) and a restrained measure (60ch).
- **Label** (`label`): Bold, tracked uppercase navigation and small proof labels. Short button labels follow the same rhythm at a slightly larger size (0.86rem).

**The Sign-and-Detail Rule.** Reserve Barlow Condensed for the name, headings, prices, and emphatic heritage numerals; let Work Sans carry reading and wayfinding.

## Layout

The main shell is capped at 1380px and uses a fluid outer gutter (`calc(100% - 6.5vw)`). Major sections breathe with responsive vertical padding (`clamp(4.5rem, 7vw, 7rem)`), while content inside them is compact enough to scan quickly. The desktop hero divides copy and image at 45% / 55%; favorites and reviews use three columns, menu items two, and the visit panel two asymmetrical columns.

At 1050px, the shell gains a 1.5rem side gutter and the proof strip becomes two columns. At 760px, the shell narrows to a 1rem side gutter (maximum 40rem); hero, favorites, menu, story, reviews, and visit stack into one column. The desktop links become a menu button and a fixed 4rem mobile bar exposes View Menu and Directions. At 390px, hero lettering and actions tighten to protect the narrowest layout.

**The Visit-Within-Reach Rule.** Every responsive layout must preserve a visible route to the menu and to directions; on mobile the fixed action bar carries both.

## Elevation & Depth

The system is flat by default. Cream, paper, and linen blocks plus fine borders establish depth; photographs provide the richest texture. Food images scale subtly on card hover. The only standing shadows are on the opened mobile navigation (`0 12px 25px rgb(46 33 27 / .13)`) and the fixed mobile action bar (`0 -6px 20px rgb(46 33 27 / .1)`) so those layers separate clearly from content.

**The Flat Surface Rule.** Use border and tonal separation for ordinary cards and sections. Reserve shadow for controls that overlap page content.

## Shapes

Food cards and section boundaries stay square with fine rules. Action links and menu filters use full pill corners (`pill`), and the heritage menu stamp is circular (`circle`). The orange 1984 block introduces a small rotation (-2deg) as a singular heritage gesture, rather than a general card treatment.

## Components

### Buttons

- **Shape:** Full pills with a minimum height of 3.5rem and firm uppercase labels. The header directions control is slightly shorter (3.1rem).
- **Primary:** Burgundy fill, light text, and transparent 1.5px border. Hover darkens and lifts 2px.
- **Outline:** Burgundy stroke and text on light ground. Hover fills burgundy and reverses the text.
- **On burgundy:** Cream fill or white outline; both retain legible reversed hover states.
- **Focus:** A 3px amber outline with 4px offset is shared by interactive elements. The site honors reduced-motion preferences.

### Menu Filters

Category chips use a burgundy 1px stroke, small bold text, and full pill corners. Hover and active states fill burgundy and reverse to white; `aria-pressed` records the active category. On narrow screens the row scrolls horizontally while the selected menu panel remains a single readable column.

### Cards / Containers

Favorite cards use a paper background, sand border, square corners, edge-to-edge food images, and compact text below. A small image caption visibly identifies illustrative servings. The image scales to 1.04 on hover; the card itself does not gain a shadow. Menu rows use a bottom rule rather than a boxed card.

### Navigation

Desktop navigation uses tracked uppercase Work Sans links and a burgundy directions pill. Link hover shifts to burgundy with a thin amber underline. At mobile sizes, a compact menu button opens a paper dropdown; a fixed two-way action bar remains visible at the bottom. Both layouts keep the wordmark prominent.

### Proof and Heritage

The proof strip divides four concise facts with sand rules, amber symbols, and a darker amber year. The heritage panel uses amber ground, deep burgundy display numerals, and a slight rotation. These pieces turn verified information into fast visual anchors without competing with the food.

## Do's and Don'ts

### Do:

- **Do** start major restaurant views with food, the name, or a practical visit action in this established visual language.
- **Do** use burgundy for large display text and primary actions, with cream or paper space around them.
- **Do** show exact menu prices and essential visit details in easy-to-scan type.
- **Do** label illustrative food images visibly when they appear in the interface.

### Don't:

- **Don't** turn ordinary cards into floating, rounded panels; the shipped cards are square and bordered.
- **Don't** use amber as a broad default background; its large-area use belongs to the singular 1984 heritage panel.
- **Don't** bury directions behind the mobile menu or remove the persistent mobile menu action.
- **Don't** use the old date-bearing raster logo while its printed year conflicts with the verified 1984 heritage.
