---
title: Alert
description: Alerts display required actions or important messages to users.
layout: page
label: Core

---

## Usage

Alerts attract a user's attention with important messages or required actions. They appear at the top of pages.

Alerts are:

- intrusive by design
- created on purpose
- dismissible by a user
- not triggered by user action or backend event.

Alerts sit flush at the top of pages above the Header component. Users can still interact with the page below an alert.

::DocsExample
---
id: core-containers-alert--information
---
::

### When and how to use
- Use an alert if a message or action applies to an entire product or site, and not a feature or page only
- Write the alert in plain language that's clean and concise to minimise a user's cognitive load
- If the user needs more information or to complete an action, use link text for the call to action
- Place the alert at the top of the screen before the Header
- Only use the critical alert setting for messages or actions that warrant it
- Limit actions to one per alert banner

### When and how not to use
- Avoid changing specified alert colours
- Alerts shouldn't cover other components, only pushing down page content
- Don't use alerts for actions initiated by the user or backend

---

## Variants

Alert styling is according to their meaning and uses semantic colours.

Alert colours include:

- grey for general information
- orange for a minor warning
- red for a critical error or expected dangerous event.

### Information

- To communicate general information to users.

::DocsExample
---
id: core-containers-alert--information
---
::

### Warning

- To communicate a minor warnings to users.

::DocsExample
---
id: core-containers-alert--warning
---
::

### Critical

- To communicate a critical error has occurred or dangerous event is expected to users.

::DocsExample
---
id: core-containers-alert--danger
---
::

---

## Alert Ordering

So that users view alerts in order of importance, they appear in priority order:

1. Error.
1. Warning.
1. Information.

::DocsExample
---
id: core-containers-alert--stacked
---
::