import { rootStore } from "../stores/root.store";

const { authenticationStore } = rootStore;

// Shape of authentication information in localStorage
interface IAuthenticationStoreStorageInformation {
  username: string;
  email: string;
}

export const verifyAuthenticationStorage = () => {
  // Either null or string of the data stored when user logged in
  const authenticationStoreStorage = localStorage.getItem(
    "authenticationStore"
  );

  // Checking if there is some data stored (otherwise it's null)
  if (authenticationStoreStorage) {
    const authenticationStoreInformation: IAuthenticationStoreStorageInformation = JSON.parse(
      authenticationStoreStorage
    );

    // Using the relevant information to set the authentication store upon loading the application
    const { email, username } = authenticationStoreInformation;
    authenticationStore.setUserInformation(email, username);
  }
};
