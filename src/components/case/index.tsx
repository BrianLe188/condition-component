import { PropsWithChildren } from "react";

export type CaseProps = {
  value: unknown;
} & PropsWithChildren;

export default function Case({ children }: CaseProps) {
  return children;
}
