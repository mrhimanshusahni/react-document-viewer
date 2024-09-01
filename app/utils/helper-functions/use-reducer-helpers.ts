// Internal Dependencies
import { ImageStateActionType, ImageStateType } from "../types";

const imageReducer = (state: ImageStateType, action: ImageStateActionType) => {
  switch (action.type) {
    case "zoom-in":
      return {
        ...state,
        scale: state.scale >= 2 ? state.scale : state.scale + 0.25,
      };
    case "zoom-out":
      return {
        ...state,
        scale: state.scale <= 0.25 ? state.scale : state.scale - 0.25,
      };
    case "rotate-right":
      return {
        ...state,
        rotate: state.rotate >= 360 ? 0 : state.rotate + 90,
      };
    case "rotate-left":
      return { ...state, rotate: state.rotate <= -360 ? 0 : state.rotate - 90 };
    case "reset":
      return {
        scale: 1,
        rotate: 0,
      };
  }
};

export { imageReducer };
