export interface IAction {
  type: ActionType;
  data?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export enum ActionType {
  RESET,
  CLOSE_MOBILE_MENU,
  TOGGLE_MOBILE_MENU,
  CLOSE_ADD_REVIEW_MODAL,
  TOGGLE_ADD_REVIEW_MODAL,
  TOGGLE_EASTER_EGG,
  TOGGLE_DARK_MODE,
}
