import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
  try {
    const user = await this.account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (user) {
      return this.login({ email, password });
    }
    return user;
  } catch (error) {
    throw error;
  }
}


  async login({ email, password }) {
  try {
    return await this.account.createEmailPasswordSession(
      email,
      password
    );
  } catch (error) {
    throw error;
  }
}


  async getCurrentUser() {
  try {
    return await this.account.get();
  } catch (error) {
    if (error?.code === 401) {
      return null; // 👈 user simply not logged in
    }
    throw error;
  }
}


  async logout() {
    try {
      await this.account.deleteSessions("current");
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
