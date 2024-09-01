// External Dependencies
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { LuZoomIn, LuZoomOut } from "react-icons/lu";

// Internal Dependencies
import { cnm } from "~/utils/class-name-helpers";
import { ImageDispatchActionType } from "~/utils/types";

const ZoomInButton = ({ dispatch }: { dispatch: ImageDispatchActionType }) => {
  return (
    <LuZoomIn
      className="size-11 rounded-full p-3 transition-all hover:cursor-pointer hover:bg-[#494949]"
      onClick={() => dispatch({ type: "zoom-in" })}
      title="Zoom In"
    />
  );
};

const ZoomOutButton = ({ dispatch }: { dispatch: ImageDispatchActionType }) => {
  return (
    <LuZoomOut
      className="size-11 rounded-full p-3 transition-all hover:cursor-pointer hover:bg-[#494949]"
      onClick={() => dispatch({ type: "zoom-out" })}
      title="Zoom Out"
    />
  );
};

const RotateRightButton = ({
  dispatch,
}: {
  dispatch: ImageDispatchActionType;
}) => {
  return (
    <FaArrowRotateRight
      className="size-11 rounded-full p-3 transition-all hover:cursor-pointer hover:bg-[#494949]"
      onClick={() => dispatch({ type: "rotate-right" })}
      title="Rotate Right"
    />
  );
};

const RotateLeftButton = ({
  dispatch,
}: {
  dispatch: ImageDispatchActionType;
}) => {
  return (
    <FaArrowRotateLeft
      className="size-11 rounded-full p-3 transition-all hover:cursor-pointer hover:bg-[#494949]"
      onClick={() => dispatch({ type: "rotate-left" })}
      title="Rotate Left"
    />
  );
};

const Reset = ({ dispatch }: { dispatch: ImageDispatchActionType }) => {
  return (
    <BsArrowsFullscreen
      className="size-11 rounded-full p-3 transition-all hover:cursor-pointer hover:bg-[#494949]"
      onClick={() => dispatch({ type: "reset" })}
      title="Reset"
    />
  );
};

const ImageToolBarLayout = ({
  children,
  className,
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cnm(
        "mx-auto flex max-w-fit items-center justify-around gap-x-4 rounded-full bg-[#404040] text-[#EAEAEA]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export {
  ImageToolBarLayout,
  Reset,
  RotateLeftButton,
  RotateRightButton,
  ZoomInButton,
  ZoomOutButton,
};
