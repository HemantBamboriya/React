import conf from "../conf/conf.js"
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount ({email,password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //call for sign up another method
                return this.login({email,password})

            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return  await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentAccount(){
        try {
          return   await this.account.get();
        } catch (error) {
            throw error;
        }
// if account not found
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }



}

const authService = new AuthService()

export default authService
