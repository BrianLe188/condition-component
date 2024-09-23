/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
function NotHandle<T>(props: T) {
  return <></>;
}
export const Filter = NotHandle<{
  data?: any[];
  children: (params?: any, index?: number) => boolean;
}>;
