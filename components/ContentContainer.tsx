import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PropTypes = {
  className?: string;
  children: ReactNode;
  page?: boolean;
};

const ContentContainer = ({ className, children, page = false }: PropTypes) => {
  return (
    <div
      className={cn(
        className,
        "mx-auto max-w-screen-xl w-full md:px-16 sm:px-10 px-6",
        page && "mt-16 sm:mt-28 "
      )}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
