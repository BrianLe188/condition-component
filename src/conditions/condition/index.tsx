/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, isValidElement } from "react";
import If from "../if";
import Else from "../else";
import { WithChildren } from "@/utils/type";

export default function Condition({ children }: WithChildren): any {
  const getChildrenInfo = () => {
    return Children.toArray(children).find((child, index) => {
      if (isValidElement(child) && typeof child.type !== "string") {
        if (index === 0 && child.type.name !== If.name)
          throw new Error("If component must be placed first");

        if (
          index !== Children.toArray(children).length - 1 &&
          child.type.name === Else.name
        )
          throw new Error("Wrong statement structure");

        if (child.props?.condition) {
          return child;
        }

        if (child.type.name === Else.name) {
          return child;
        }
      }

      return false;
    });
  };

  return <>{getChildrenInfo()}</>;
}
