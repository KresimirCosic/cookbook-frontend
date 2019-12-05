import { AuthenticationService } from "./authentiaction.service";

export class RootService {
  authenticationService = new AuthenticationService(this);
}

export const rootService = new RootService();
