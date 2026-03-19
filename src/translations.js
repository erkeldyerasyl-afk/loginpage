/**
 * Simple i18n translation object - no external libraries.
 * Keys: ru (Russian), kz (Kazakh)
 * All UI text is defined here for easy maintenance.
 */
export const translations = {
  ru: {
    // Login page
    login: 'Вход',
    welcomeBack: 'С возвращением',
    signInToContinue: 'Войдите, чтобы продолжить',
    email: 'Email',
    enterEmail: 'Введите email',
    password: 'Пароль',
    enterPassword: 'Введите пароль',
    signIn: 'Войти',
    noAccount: 'Нет аккаунта? Регистрация',
    rememberMe: 'Запомнить меня',

    // Register page
    register: 'Регистрация',
    createAccount: 'Создать аккаунт',
    registerToStart: 'Зарегистрируйтесь для начала',
    name: 'Имя',
    enterName: 'Введите имя',
    haveAccount: 'Уже есть аккаунт? Войти',

    // Profile page
    profile: 'Профиль',
    logout: 'Выйти',
    loggingOut: 'Выход...',

    // Validation errors
    errorEnterEmail: 'Введите email',
    errorValidEmail: 'Введите корректный email',
    errorEnterPassword: 'Введите пароль',
    errorEnterName: 'Введите имя',
    errorPasswordLength: 'Пароль минимум 4 символа',

    // Auth errors
    errorInvalidCredentials: 'Неверный email или пароль',
    errorEmailExists: 'Email уже зарегистрирован',
    errorSomethingWrong: 'Что-то пошло не так',
  },
  kz: {
    // Login page
    login: 'Кіру',
    welcomeBack: 'Қош келдіңіз',
    signInToContinue: 'Жалғастыру үшін кіріңіз',
    email: 'Email',
    enterEmail: 'Email енгізіңіз',
    password: 'Құпия сөз',
    enterPassword: 'Құпия сөзді енгізіңіз',
    signIn: 'Кіру',
    noAccount: 'Аккаунт жоқ па? Тіркелу',
    rememberMe: 'Мені есте сақта',

    // Register page
    register: 'Тіркелу',
    createAccount: 'Аккаунт жасау',
    registerToStart: 'Бастау үшін тіркеліңіз',
    name: 'Аты',
    enterName: 'Атыңызды енгізіңіз',
    haveAccount: 'Аккаунт бар ма? Кіру',

    // Profile page
    profile: 'Профиль',
    logout: 'Шығу',
    loggingOut: 'Шығу...',

    // Validation errors
    errorEnterEmail: 'Email енгізіңіз',
    errorValidEmail: 'Дұрыс email енгізіңіз',
    errorEnterPassword: 'Құпия сөзді енгізіңіз',
    errorEnterName: 'Атыңызды енгізіңіз',
    errorPasswordLength: 'Құпия сөз кем дегенде 4 таңбадан тұруы керек',

    // Auth errors
    errorInvalidCredentials: 'Қате email немесе құпия сөз',
    errorEmailExists: 'Email тіркелген',
    errorSomethingWrong: 'Бірдеңе қате кетті',
  },
};
