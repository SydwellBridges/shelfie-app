import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
    .setProject("6a01ea2f002f56fb16f8")
    .setEndpoint("dev.sidd.shelfie");

// We export the account and avatars services so that we can use them in our components
export const account = new Account(client);
export const avatars = new Avatars(client);