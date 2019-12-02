import { decorate, observable, computed, action } from "mobx";
import RootStore from "./root.store";

export default class UserInterfaceStore {
  overlay: boolean = false;
  loader: boolean = true;

  constructor(private rootStore: RootStore) {}

  get overlayStatus(): boolean {
    return this.overlay;
  }

  get loaderStatus(): boolean {
    return this.loader;
  }

  turnOffOverlay = () => {
    this.overlay = false;
  };

  turnOnOverlay = () => {
    this.overlay = true;
  };

  turnOffLoader = () => {
    this.loader = false;
  };

  turnOnLoader = () => {
    this.loader = true;
  };
}

decorate(UserInterfaceStore, {
  overlay: observable,
  loader: observable,

  overlayStatus: computed,
  loaderStatus: computed,

  turnOffOverlay: action,
  turnOnOverlay: action,
  turnOffLoader: action,
  turnOnLoader: action
});
