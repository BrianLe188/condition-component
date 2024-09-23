/* eslint-disable @typescript-eslint/no-explicit-any */
import { WithChildren } from "@/utils/type";
import { Children, cloneElement, isValidElement } from "react";
import Map from "../map";
import { Filter } from "@/not-handle";

export type ChainProps<T> = {
  data: T[];
} & WithChildren;

export default function Chain<T>({ data, children }: ChainProps<T>): any {
  let _data: T[] = data;

  const getInfo = () => {
    for (const child of Children.toArray(children)) {
      if (isValidElement(child) && typeof child.type !== "string") {
        const props = {
          data: _data,
        };
        switch (child.type.name) {
          case Filter.name:
            _data = _data.filter(child.props.children);
            break;
          case Map.name:
            return cloneElement(child, props);
        }
      }
    }
  };

  return <>{getInfo()}</>;
}
