export class WebStorage {
    // CaseID, EmailAddress, userToken, WorkerID, isUserAvailable, currentUser, savedHash

    static setItem(key: string, value: string) {
        sessionStorage.setItem(key, value);
    }

    static getItem(key: string): string {
        return sessionStorage.getItem(key);
    }

    static removeItem(key: string) {
        sessionStorage.removeItem(key);
    }

    static clear() {
        sessionStorage.clear();
    }
}