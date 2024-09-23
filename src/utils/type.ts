export type Children = JSX.Element | JSX.Element[];
export type Condition = { condition: boolean };
export type WithChildren = { children: Children };
export type ConditionWithChildren = Condition & WithChildren;
export type WithFunctionAsChildren<T> = {
  children: (params?: T, index?: number) => Children;
};
