import { AUTH_TOKEN } from "./constants";

const localStore = localStorage;
export default class WebStorage {
  static setAuthToken(value) {
    this.setLocalStore(AUTH_TOKEN.Name, value);
  }
  static getAuthToken() {
    return this.getLocalStore(AUTH_TOKEN.Name);
  }
  static removeAuthToken() {
    this.removeLocalStore(AUTH_TOKEN.Name);
  }
  static getLocalStore(keyName) {
    const keyValue = localStore.getItem(keyName);
    return this.processGetData(keyValue);
  }

  static setLocalStore(keyName, keyValue) {
    localStore.setItem(keyName, this.processSetData(keyValue));
  }

  static removeLocalStore(keyName) {
    localStore.removeItem(keyName);
  }

  static processGetData(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return str;
    }
  }

  static processSetData(value) {
    if (typeof value === "object") value = JSON.stringify(value);
    return value.toString();
  }
}
