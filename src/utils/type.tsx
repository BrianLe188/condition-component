export type Condition = { condition: boolean };
export type WithChildren = { children: JSX.Element | JSX.Element[] };
export type ConditionWithChildren = Condition & WithChildren;
