import { Children, isValidElement, PropsWithChildren } from "react";
import If from "../if";
import Else from "../else";

export type ConditionProps = {} & PropsWithChildren;

export default function Condition({ children }: ConditionProps) {
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

  return getChildrenInfo();
}
