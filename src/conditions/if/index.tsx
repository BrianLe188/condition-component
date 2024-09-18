import { ConditionWithChildren } from "@/utils/type";

export default function If({ condition, children }: ConditionWithChildren) {
  return condition ? <>{children}</> : null;
}
