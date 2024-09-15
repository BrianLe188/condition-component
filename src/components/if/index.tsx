import { PropsWithChildren } from "react";

export type IfProps = { condition: boolean } & PropsWithChildren;

export default function If({ condition, children }: IfProps) {
  return condition ? children : null;
}
