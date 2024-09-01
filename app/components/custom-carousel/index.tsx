// External Dependencies
import { useState } from "react";

// Internal Dependencies
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/custom-carousel/custom-carousel-base";
import { documentArray } from "~/utils/data";
import { ImageStateType } from "~/utils/types";
import { CustomImageLayout } from "../custom-image-component";
import { type CarouselApi } from "~/components/custom-carousel/custom-carousel-base";


const CustomCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  // useEffect(() => {
  //   if (!api) {
  //     return;
  //   }

  //   api.on("select", () => {
  //     // Do something on select.
  //   });
  // }, [api]);

  return (
    <Carousel className="mx-auto max-w-3xl" setApi={setApi}>
      <CarouselContent>
        {documentArray?.map((item) => (
          <CarouselItem key={`file-${item?.id}`}>
            {item?.documentType !== "pdf" && (
              <CustomImageLayout file={item} api={api} />
            )}
            {item?.documentType === "pdf" && (
              <iframe
                src="https://docs.google.com/viewer?url=https://cdn1.lalpathlabs.com/live/reports/WM17S.pdf&embedded=true"
                className="h-full w-full"
                title="pdf"
              ></iframe>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export { CustomCarousel };
