import { decorate, observable, computed, action } from "mobx";
import RootStore from "./root.store";

export default class UserInterfaceStore {
  overlay: boolean = false;

  constructor(private rootStore: RootStore) {}

  get overlayStatus(): boolean {
    return this.overlay;
  }

  toggleOverlay(): void {
    this.overlay = !this.overlay;
  }
}

decorate(UserInterfaceStore, {
  overlay: observable,

  overlayStatus: computed,

  toggleOverlay: action
});
