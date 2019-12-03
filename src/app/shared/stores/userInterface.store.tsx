import { decorate, observable, computed, action } from "mobx";

import RootStore from "./root.store";
import { LOADER_EXIT_DURATION } from "../../features/components/loader.component";

const body = document.body;

export default class UserInterfaceStore {
  overlay: boolean = false;
  loader: boolean = true;
  menu: boolean = false;

  constructor(private rootStore: RootStore) {}

  get overlayStatus(): boolean {
    return this.overlay;
  }

  get loaderStatus(): boolean {
    return this.loader;
  }

  get menuStatus(): boolean {
    return this.menu;
  }

  turnOffOverlay = () => {
    this.overlay = false;
  };

  turnOnOverlay = () => {
    this.overlay = true;
  };

  turnOffLoader = () => {
    this.loader = false;
    setTimeout(() => (body.style.overflow = "auto"), LOADER_EXIT_DURATION);
  };

  turnOnLoader = () => {
    this.loader = true;
    body.style.overflow = "hidden";
  };

  turnOffMenu = () => {
    this.menu = false;
  };

  turnOnMenu = () => {
    this.menu = true;
  };
}

decorate(UserInterfaceStore, {
  overlay: observable,
  loader: observable,
  menu: observable,

  overlayStatus: computed,
  loaderStatus: computed,
  menuStatus: computed,

  turnOffOverlay: action,
  turnOnOverlay: action,
  turnOffLoader: action,
  turnOnLoader: action
});
