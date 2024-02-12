import React, { PropsWithChildren } from "react";

export const ProductLayout = (props: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">{props.children}</div>
  );
};
