/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, isValidElement } from "react";
import Case from "../case";
import { WithChildren } from "@/utils/type";
import Default from "../default";

export type SwitchProps = {
  value: unknown;
} & WithChildren;

export default function Switch({ value, children }: SwitchProps): any {
  const cases = Children.toArray(children).reduce(
    (prev, child) => {
      if (isValidElement(child) && typeof child.type !== "string") {
        if (child.type.name === Default.name && prev?.[Default.name]) {
          throw new Error(
            "Uncaught SyntaxError: More than one default clause in switch statement",
          );
        }
        switch (child.type.name) {
          case Case.name:
            return {
              ...prev,
              [child.props.value]: child.props.children,
            };
          default:
          case Default.name:
            return {
              ...prev,
              [Default.name]: child.props.children,
            };
        }
      }
      return prev;
    },
    {} as Record<string, any>,
  );

  return <>{cases?.[value as keyof typeof cases] || null}</>;
}
