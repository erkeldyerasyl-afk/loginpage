# Login Page – React Auth App

A multilingual (RU/KZ) authentication app with Login, Register, and Profile. Uses localStorage only (no backend).

> **Cleanup:** Flutter/Dart/Android/iOS files were removed. This project now contains only the React web app. See `CLEANUP_NOTES.md` for details.

## Features

- **Login** – email, password, Remember Me checkbox
- **Register** – name, email, password
- **Profile** – user info, logout
- **Language** – RU/KZ toggle, persisted in localStorage
- **Validation** – email format, required fields, multilingual errors

## Run

```bash
npm install
npm start
```

## Structure

```
src/
├── components/     # Reusable UI (Button, Input, Card, LanguageToggle)
├── context/        # LanguageContext (i18n state)
├── pages/          # LoginPage, RegisterPage, ProfilePage
├── services/       # authService, storageService
├── translations.js # RU/KZ text (no external i18n lib)
├── App.js
└── index.js
```
