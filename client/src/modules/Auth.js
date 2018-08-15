class Auth {

    static authenticateUser(token, userId) {
        localStorage.setItem('token', token);
        localStorage.setItem("user id", userId)
    }

    static isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    static deauthenticateUser() {
        localStorage.removeItem('token');
        localStorage.removeItem('user id')
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static getId() {
        return localStorage.getItem('user id')
    }
}

export default Auth;