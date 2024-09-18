import { WithChildren } from "@/utils/type";

export type CaseProps = {
  value: unknown;
} & WithChildren;

export default function Case({ children }: CaseProps) {
  return <>{children}</>;
}
