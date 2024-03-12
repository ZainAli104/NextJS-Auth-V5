/*
* An array of public routes that do not require authentication
* These routes are accessible to all users
* @type {string[]}
* */
export const publicRoutes = [
    "/",
    "/auth/new-verification",
];

/*
* An array of routes that require authentication
* These routes are only accessible to authenticated users
* @type {string[]}
* */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
];

/*
* The prefix for API authentication routes
* Routes that start with this prefix are used for API authentication purposes
* @type {string}
* */
export const apiAuthPrefix = "/api/auth";

/*
* The default redirect path after a successful login
* @type {string}
* */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
