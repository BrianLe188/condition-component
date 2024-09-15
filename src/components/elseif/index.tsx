import { PropsWithChildren } from "react";

export type ElseIfProps = { condition: boolean } & PropsWithChildren;

export default function ElseIf({ condition, children }: ElseIfProps) {
  return condition && children;
}
