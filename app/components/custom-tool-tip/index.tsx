// External Dependencies
import { IoInformationCircleOutline } from "react-icons/io5";

// Internal Dependencies
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

const CustomToolTip = ({
  toolTipMessage = "N/A",
}: {
  toolTipMessage: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <IoInformationCircleOutline className="text-xl text-[#EAEAEA]" />
        </TooltipTrigger>

        <TooltipContent>{toolTipMessage}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { CustomToolTip };
