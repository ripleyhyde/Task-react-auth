import api from "./api";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this, {});
  }

  setUser = (token) => {
    this.user = decode(token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  signUp = async (user) => {
    try {
      const response = await api.post("/signup", user);
      this.user = decode(response.data.token);
      console.log(
        "🚀 ~ file: authStore.js ~ line 21 ~ AuthStore ~ signUp= ~ this.user",
        this.user
      );
    } catch (error) {}
  };
  signIn = async (user) => {
    try {
      const response = await api.post("/signin", user);
      this.user = decode(response.data.token);
      console.log(this.user);
    } catch (error) {}
  };
  logout = () => {
    delete api.defaults.headers.common.Authorization;
    this.user = null;
  };
}

const authStore = new AuthStore();
export default authStore;
