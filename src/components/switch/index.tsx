/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, isValidElement } from "react";
import Case from "../case";
import { WithChildren } from "@/utils/type";

export type SwitchProps = {
  value: unknown;
} & WithChildren;

export default function Switch({ value, children }: SwitchProps): any {
  const cases = Children.toArray(children).reduce((prev, child) => {
    if (
      isValidElement(child) &&
      typeof child.type !== "string" &&
      child.type.name === Case.name
    ) {
      return {
        ...prev,
        [child.props.value]: child.props.children,
      };
    }
    return prev;
  }, {});

  return <>{cases?.[value as keyof typeof cases] || null}</>;
}
