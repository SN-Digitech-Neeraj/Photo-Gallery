// src/utils/authToken.js

const TOKEN_KEY = "auth_token";

export const login = (username, password) => {
    // ✅ Dummy check (you can replace with your real API later)
    if (username === "admin" && password === "12345") {
        localStorage.setItem(TOKEN_KEY, "dummy_token_123456");
        return true;
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
    return !!localStorage.getItem(TOKEN_KEY);
};
