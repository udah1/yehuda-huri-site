# Legal Pages Specification: Privacy Policy & Accessibility Statement

> **Purpose:** Reference document with all the content, structure, and data needed to build the Privacy Policy and Accessibility Statement pages for this site. Based on analysis of Israeli industry standards and comparable portfolio/freelancer sites.

---

## Table of Contents

- [Analysis Summary](#analysis-summary)
- [What This Site Actually Collects](#what-this-site-actually-collects)
- [Page 1: Privacy Policy](#page-1-privacy-policy)
- [Page 2: Accessibility Statement](#page-2-accessibility-statement)
- [Implementation Notes](#implementation-notes)
- [Data To Fill In](#data-to-fill-in)

---

## Analysis Summary

### Sites Analyzed

#### Accessibility Pages (הצהרת נגישות)

| Site | Standard | Level | Approach |
|------|----------|-------|----------|
| [nirazo.co.il](https://nirazo.co.il/accessibility/) | Israeli 5688 + WCAG 2.2 | AA | Most comprehensive — uses Vee plugin, includes physical office accessibility, detailed software features list |
| [s-lerman.com](https://s-lerman.com/accessibility/) | Israeli 2013 regulations + WCAG 2.0 | AA | Medium detail — commitment, adjustments list, exclusions, contact |
| [red-ghost.co.il](https://red-ghost.co.il/accessibility) | Israeli 5568 + WCAG 2.1 | AA | Concise and modern — clean structure, third-party disclaimer, clear contact |

**Common pattern across all three:**
1. Commitment statement
2. Standard/compliance level (always AA)
3. List of adjustments made
4. Exclusions/limitations disclaimer
5. Accessibility coordinator contact info
6. Last updated date

#### Privacy Policy Pages (מדיניות פרטיות)

| Site | Scope | Cookies/Tracking | Legal Reference |
|------|-------|-------------------|-----------------|
| [nirazo.co.il](https://nirazo.co.il/privacy-policy/) | Heavy — GA, Meta Pixel, Google Ads, TikTok Pixel | Extensive third-party cookies | Israeli Privacy Law + Amendment 13 |
| [s-lerman.com](https://s-lerman.com/מדיניות-פרטיות/) | Medium — CRM, newsletter, contact forms | Cookies for analytics and personalization | Israeli Privacy Law 1981 |
| [red-ghost.co.il](https://red-ghost.co.il/privacy) | Light — contact form, basic analytics | Basic cookies mention | Israeli Privacy Protection Law |

**Common pattern across all three:**
1. Introduction + scope
2. Types of information collected
3. Purpose of data use
4. Cookies disclosure
5. Third-party sharing rules
6. Data security statement
7. User rights (under Israeli law)
8. Contact information
9. Last updated date

### Key Takeaway for This Site

This site is a **personal portfolio with no contact form, no ads, no analytics, no tracking cookies, and no auth/backend**. The privacy policy should be **lightweight** (similar to Red Ghost's approach) but honest about what IS collected: Google Fonts IP transfer and localStorage preferences.

---

## What This Site Actually Collects

### Data Stored on User's Device

| Item | Storage | Purpose | Classification |
|------|---------|---------|----------------|
| `themeModePreference` | localStorage | Dark/light/system mode preference | Functional |
| `marketingThemeName` | sessionStorage | Selected design preset | Functional |
| `i18nextLng` | localStorage | Language preference (EN/HE) | Functional |

### Data Sent to Third Parties

| Service | What is sent | Why |
|---------|-------------|-----|
| **Google Fonts** (fonts.googleapis.com) | User's IP address, browser user-agent, referrer | Font delivery |

### Data Collected via Forms

**None.** The site has no contact form. Visitors reach out via the social profile links
(LinkedIn, GitHub, npm) or the email listed in the legal pages.

### Cookies Set

**None.** This site does not set any cookies. All preferences are stored in localStorage.

---

## Page 1: Privacy Policy

### Route
`/privacy` (EN) / `/privacy` (HE — same route, content switches by language)

### Structure & Content

#### Section 1: Introduction
```
EN: Privacy Policy for the website of Yehuda Huri — Senior Full Stack Engineer & System Designer,
    at [SITE_URL]. This document explains what information is collected during
    your use of the site, how it is used, and what your rights are.
    Last updated: [DATE].

HE: מדיניות פרטיות עבור אתר האינטרנט של יהודה חורי — Senior Full Stack Engineer ומעצב מערכות,
    בכתובת [SITE_URL]. מסמך זה מסביר איזה מידע נאסף במהלך השימוש באתר,
    כיצד הוא משמש, ומהן זכויותיך.
    עודכן לאחרונה: [DATE].
```

#### Section 2: Information Collected

**2a. Getting in touch:**
```
EN: This site does not include a contact form and does not collect personal
    information you submit through it. To get in touch, use the social profile
    links (LinkedIn, GitHub, npm) or email the address in this policy.

HE: אתר זה אינו כולל טופס יצירת קשר ואינו אוסף מידע אישי שאתה מוסר דרכו.
    ליצירת קשר ניתן להשתמש בקישורים לפרופילים החברתיים או בכתובת הדוא"ל שבמדיניות זו.
```

**2b. Information stored on your device:**
```
EN: The site stores the following preferences locally on your device
    (using browser localStorage). This data never leaves your device
    and is not transmitted to any server:
    - Theme preference (dark/light mode)
    - Language preference (English/Hebrew)
    - App install prompt dismissal state
    - Notification prompt dismissal state

HE: האתר שומר את ההעדפות הבאות באופן מקומי במכשיר שלך
    (באמצעות localStorage בדפדפן). מידע זה אינו עוזב את המכשיר שלך
    ואינו מועבר לשום שרת:
    - העדפת ערכת נושא (מצב כהה/בהיר)
    - העדפת שפה (אנגלית/עברית)
    - מצב סגירת בקשת התקנת אפליקציה
    - מצב סגירת בקשת התראות
```

**2c. Information sent to third parties:**
```
EN: This site uses Google Fonts, served from Google's servers
    (fonts.googleapis.com). When you visit, your browser connects
    to Google to load fonts, which transmits your IP address and
    browser information. Google states this data is not used for
    tracking. See Google's privacy policy:
    https://policies.google.com/privacy

HE: אתר זה משתמש ב-Google Fonts, המוגשים משרתי Google
    (fonts.googleapis.com). בעת ביקור באתר, הדפדפן שלך מתחבר
    לשרתי Google לטעינת גופנים, מה שמעביר את כתובת ה-IP ופרטי
    הדפדפן שלך. Google מצהירה שמידע זה אינו משמש למעקב.
    ראה מדיניות הפרטיות של Google:
    https://policies.google.com/privacy
```

#### Section 3: Cookies
```
EN: This site does not use cookies. All user preferences are stored
    locally on your device using browser storage (localStorage) and
    are not transmitted to any server.

HE: אתר זה אינו משתמש בעוגיות (Cookies). כל העדפות המשתמש נשמרות
    באופן מקומי במכשיר שלך באמצעות אחסון הדפדפן (localStorage)
    ואינן מועברות לשום שרת.
```

#### Section 4: Data Security
```
EN: The site is served over HTTPS (encrypted connection). No payment
    information or sensitive personal data is collected.

HE: האתר מוגש באמצעות HTTPS (חיבור מוצפן). לא נאסף מידע על תשלומים
    או נתונים אישיים רגישים.
```

#### Section 5: Your Rights
```
EN: In accordance with the Israeli Privacy Protection Law (1981), you
    have the right to:
    - Request access to any personal data held about you
    - Request correction or deletion of your data
    - Request removal from any mailing list
    Requests can be sent to: [EMAIL]

HE: בהתאם לחוק הגנת הפרטיות (התשמ"א–1981), עומדות לך הזכויות הבאות:
    - לעיין במידע אישי שנשמר אודותיך
    - לבקש תיקון או מחיקה של המידע
    - לבקש הסרה מרשימות תפוצה
    ניתן לפנות בבקשה לכתובת: [EMAIL]
```

#### Section 6: Third-Party Services
```
EN: This site uses the following third-party services:
    - Google Fonts (font delivery) — Google LLC
    These services have their own privacy policies.
    Data may be processed outside of Israel.

HE: אתר זה משתמש בשירותי צד שלישי הבאים:
    - Google Fonts (הגשת גופנים) — Google LLC
    לשירותים אלה מדיניות פרטיות עצמאית.
    ייתכן שמידע יעובד מחוץ לישראל.
```

#### Section 7: Changes to This Policy
```
EN: This policy may be updated from time to time. The latest version
    will always be available on this page, with the update date shown
    at the top.

HE: מדיניות זו עשויה להתעדכן מעת לעת. הגרסה העדכנית ביותר תהיה
    זמינה תמיד בעמוד זה, עם תאריך העדכון בראש המסמך.
```

#### Section 8: Contact
```
EN: For questions about this privacy policy, contact:
    Email: [EMAIL]
    Website: [SITE_URL]

HE: לשאלות בנוגע למדיניות פרטיות זו, ניתן לפנות:
    דוא"ל: [EMAIL]
    אתר: [SITE_URL]
```

---

## Page 2: Accessibility Statement

### Route
`/accessibility` (EN) / `/accessibility` (HE — same route, content switches by language)

### Structure & Content

#### Section 1: Commitment
```
EN: Yehuda Huri is committed to making this website accessible to all
    users, including people with disabilities. We invest effort in
    ensuring the site is usable, friendly, and accessible.

HE: יהודה חורי מחויב להנגשת אתר זה לכלל המשתמשים, כולל אנשים עם
    מוגבלויות. אנו משקיעים מאמצים כדי להבטיח שהאתר יהיה שמיש,
    ידידותי ונגיש.
```

#### Section 2: Compliance Level
```
EN: This site was built to comply with WCAG 2.1 at level AA, in
    accordance with the Israeli Standard 5568 for web accessibility
    and the Equal Rights for Persons with Disabilities Regulations
    (Accessibility Adjustments for Service) 2013.

HE: אתר זה נבנה בהתאם לתקן WCAG 2.1 ברמת AA, בהתאם לתקן הישראלי
    5568 להנגשת אתרי אינטרנט ולתקנות שוויון זכויות לאנשים עם
    מוגבלויות (התאמות נגישות לשירות) התשע"ג 2013.
```

#### Section 3: Accessibility Features
```
EN: The following accessibility adjustments have been implemented:
    - Semantic HTML structure with proper heading hierarchy (H1-H6)
    - Full keyboard navigation support
    - Sufficient color contrast ratios
    - Responsive design adapted for various screen sizes and devices
    - Support for dark/light themes for visual comfort
    - Text alternatives (alt attributes) for images
    - ARIA labels for interactive elements
    - Support for right-to-left (RTL) layout (Hebrew)
    - Compatible with modern browsers (Chrome, Firefox, Safari, Edge)
    - No flashing or blinking content

HE: התאמות הנגישות הבאות בוצעו באתר:
    - מבנה HTML סמנטי עם היררכיית כותרות תקינה (H1-H6)
    - תמיכה מלאה בניווט מקלדת
    - יחסי ניגודיות צבע מספקים
    - עיצוב רספונסיבי המותאם למגוון מסכים ומכשירים
    - תמיכה בערכות כהה/בהיר לנוחות ויזואלית
    - חלופות טקסט (תגיות alt) לתמונות
    - תגיות ARIA לאלמנטים אינטראקטיביים
    - תמיכה בפריסה מימין לשמאל (RTL) בעברית
    - תאימות לדפדפנים מודרניים (Chrome, Firefox, Safari, Edge)
    - אין תוכן מהבהב או מרצד
```

#### Section 4: Third-Party Components
```
EN: The site may include third-party components (such as Google Fonts)
    that may have accessibility limitations outside our control. We
    strive to choose providers that meet accessibility standards.

HE: האתר עשוי לכלול רכיבי צד שלישי (כגון Google Fonts) שעשויות להיות
    להם מגבלות נגישות שאינן בשליטתנו. אנו משתדלים לבחור ספקים
    העומדים בדרישות הנגישות.
```

#### Section 5: Exclusions
```
EN: Despite our efforts to make all pages and elements accessible,
    some parts may not yet be fully accessible. We are committed to
    continuously improving the site's accessibility.

HE: למרות מאמצינו להנגיש את כלל הדפים והאלמנטים באתר, ייתכן שחלקים
    מסוימים עדיין אינם נגישים באופן מלא. אנו מתחייבים להמשיך ולשפר
    את נגישות האתר.
```

#### Section 6: Contact for Accessibility Issues
```
EN: If you encounter an accessibility issue on this site, please
    contact us and we will do our best to resolve it promptly.

    Accessibility contact: Yehuda Huri
    Email: [EMAIL]

    When reporting, please include:
    - Description of the problem
    - The page where it occurred
    - Browser type and version
    - Operating system
    - Assistive technology used (if any)

HE: אם נתקלתם בבעיה בנושא נגישות באתר, אנא פנו אלינו ונעשה ככל
    יכולתנו לטפל בפנייה בהקדם.

    אחראי נגישות: יהודה חורי
    דוא"ל: [EMAIL]

    בעת דיווח, אנא ציינו:
    - תיאור הבעיה
    - הדף בו התרחשה
    - סוג הדפדפן וגרסתו
    - מערכת הפעלה
    - טכנולוגיה מסייעת (במידה ונעשה שימוש)
```

#### Section 7: Last Updated
```
EN: This accessibility statement was last updated on: [DATE]

HE: הצהרת נגישות זו עודכנה לאחרונה בתאריך: [DATE]
```

---

## Implementation Notes

### Route Setup
Add two routes to the marketing layout:
```
/privacy        → PrivacyPolicyPage
/accessibility  → AccessibilityPage
```

### Footer Links
Add links in the marketing footer (currently no privacy/terms links exist):
```tsx
// Suggested footer addition:
<Link to="/privacy">{t('legal.privacyPolicy')}</Link>
<Link to="/accessibility">{t('legal.accessibility')}</Link>
```

### i18n Keys to Add
Add a new `legal` section to both `en.json` and `he.json` locale files with all the translated content from the sections above.

### Page Component Structure
Each page should be a simple, clean content page:
- No complex UI components needed
- Use MUI `Typography`, `Box`, `Container`, `List`/`ListItem`
- Respect dark/light theme
- Respect RTL for Hebrew
- Include a "Last updated" date at the top
- Include a "Back to home" link or breadcrumb

### SEO Considerations
- Both pages should be publicly accessible (no auth required)
- Include proper `<title>` and meta description
- These pages help with perceived professionalism and trust

---

## Data To Fill In

Before building, replace these placeholders with real values:

| Placeholder | Description | Example |
|-------------|-------------|---------|
| `[SITE_URL]` | Your production site URL | `https://your-domain.com` |
| `[EMAIL]` | Contact email for privacy/accessibility | `udah10@gmail.com` |
| `[DATE]` | Last updated date | `July 2026` |

---

## When to Add a Cookie Consent Banner

You do **NOT** currently need a cookie consent banner. Add one only if you later:
- Enable Adsterra or any ad network
- Add Google Analytics or any analytics service
- Add social media tracking pixels (Meta, TikTok, etc.)
- Add any service that sets third-party cookies

At that point, gate those scripts behind user consent and add a banner with:
- Accept All / Reject Non-Essential / Customize
- Categories: Necessary, Functional, Analytics, Advertising
