// Internal Dependencies
import { ImageDispatchActionType } from "~/utils/types";
import {
  ImageToolBarLayout,
  Reset,
  RotateLeftButton,
  RotateRightButton,
  ZoomInButton,
  ZoomOutButton,
} from "./image-tool-bar-components";

const ImageToolBar = ({ dispatch }: { dispatch: ImageDispatchActionType }) => {
  return (
    <div className="absolute bottom-5 flex w-full justify-center">
      <ImageToolBarLayout>
        <RotateLeftButton dispatch={dispatch} />
        <ZoomOutButton dispatch={dispatch} />
        <Reset dispatch={dispatch} />
        <ZoomInButton dispatch={dispatch} />
        <RotateRightButton dispatch={dispatch} />
      </ImageToolBarLayout>
    </div>
  );
};

export { ImageToolBar };
