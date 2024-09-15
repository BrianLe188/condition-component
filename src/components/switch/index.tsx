import { Children, isValidElement, PropsWithChildren } from "react";
import Case from "../case";

export type SwitchProps = {
  targetValue: unknown;
} & PropsWithChildren;

export default function Switch({ targetValue, children }: SwitchProps) {
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

  return cases?.[targetValue as keyof typeof cases] || null;
}
