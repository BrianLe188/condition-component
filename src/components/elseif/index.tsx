import { ConditionWithChildren } from "@/utils/type";

export default function ElseIf({ condition, children }: ConditionWithChildren) {
  return condition ? <>{children}</> : null;
}
