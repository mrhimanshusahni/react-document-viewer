// External Dependencies
import { useContext, useEffect, useReducer } from "react";

// Internal Dependencies
import { imageReducer } from "~/utils/helper-functions/use-reducer-helpers";
import { imageState } from "~/utils/reducer-states";
import { DocumentFileType } from "~/utils/types";
import { ImageToolBar } from "../image-tool-bar";
import { CarouselApi } from "../custom-carousel/custom-carousel-base";
import { CurrentFileContext } from "~/utils/context/use-context-helper";
import { documentArray } from "~/utils/data";

interface CustomImageLayoutPropsType {
  file: DocumentFileType;
  api: CarouselApi;
}

const CustomImageLayout = ({ file, api }: CustomImageLayoutPropsType) => {
  const [state, dispatch] = useReducer(imageReducer, imageState);

  const { setCurrentFile } = useContext(CurrentFileContext);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // Do something on select.
      setCurrentFile(documentArray[api?.selectedScrollSnap()]);
      dispatch({ type: "reset" });
    });
  }, [api, setCurrentFile]);

  return (
    <div className="max-h-[75vh] overflow-auto">
      <img
        src={file?.documentUrl}
        alt={`file-${file?.id}`}
        className="transform transition-transform duration-300"
        style={{
          transform: `scale(${state?.scale}) rotate(${state?.rotate}deg)`,
        }}
      />
      <ImageToolBar dispatch={dispatch} />
    </div>
  );
};

export { CustomImageLayout };
