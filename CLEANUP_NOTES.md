# Cleanup Notes – What Was Removed and Why

## Flutter / Dart / Android / iOS – REMOVED

The project originally contained a Flutter app alongside the React app. All Flutter-related files were removed to keep only the React web app.

| Removed | Reason |
|---------|--------|
| `lib/` | Flutter/Dart source code (screens, services, models) |
| `pubspec.yaml`, `pubspec.lock` | Flutter dependency config |
| `android/` | Android native project |
| `ios/` | iOS native project |
| `macos/` | macOS native project |
| `linux/` | Linux native project |
| `windows/` | Windows native project |
| `web/` | Flutter web config (different from React) |
| `test/` | Flutter/Dart tests |
| `.dart_tool/` | Dart tooling cache |
| `build/` | Flutter build output |
| `analysis_options.yaml` | Dart linter config |
| `.metadata`, `.flutter-plugins-dependencies` | Flutter metadata |
| `loginpage.iml` | IntelliJ/Android Studio module |
| `.idea/` | IDE config (optional, removed for cleanliness) |

## React App – Kept and Moved to Root

The React app was in `react-app/` and is now at the project root.

| Kept | Purpose |
|------|---------|
| `src/` | React source (components, pages, services, context) |
| `public/` | index.html, favicon.ico |
| `package.json` | npm dependencies (react, react-dom, react-scripts) |
| `node_modules/` | Reinstalled via `npm install` |

## Unused Files – None Found

- All components (Button, Input, Card, LanguageToggle) are used
- All pages (Login, Register, Profile) are used
- No test files, demo files, or unused assets in the React app
- No unused imports detected

## Dependencies – Minimal

Only required libraries are kept:
- `react` – UI library
- `react-dom` – DOM rendering
- `react-scripts` – build, start, test (Create React App)

No external i18n, routing, or UI libraries – all implemented manually.

## Final Structure

```
loginpage/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/   (Button, Card, Input, LanguageToggle)
│   ├── context/      (LanguageContext)
│   ├── pages/        (LoginPage, RegisterPage, ProfilePage)
│   ├── services/     (authService, storageService)
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── translations.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── PROJECT_EXPLANATION_KZ.md
└── CLEANUP_NOTES.md (this file)
```
