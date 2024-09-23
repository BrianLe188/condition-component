import { WithFunctionAsChildren } from "@/utils/type";

export type MapProps<T> = {
  data?: T[];
} & WithFunctionAsChildren<T>;

export default function Map<T>({ data, children }: MapProps<T>) {
  return <>{data?.map(children)}</>;
}
