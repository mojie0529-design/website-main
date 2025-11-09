import { host } from "@/constant/host";
import { getToken, removeToken, setToken } from "@/utils/auth";
import { makeAutoObservable } from "mobx";
// const cache_key = "__innoverse_user_info";
class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  axiosHost = host;

  tempToken = ""

  setHost = (hostStr: string) => {
    this.axiosHost = hostStr
  }

  setTempToken = (token: string) => {
    this.tempToken = token;
  }

}

const userStore = new UserStore();


export default userStore;
