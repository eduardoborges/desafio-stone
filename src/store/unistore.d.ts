/* eslint-disable */
declare module 'unistore/react' {
  import * as React from 'react';
  import { ActionCreator, StateMapper, Store } from 'unistore';

  export function connect<T, S, K, I>(
    mapStateToProps: string | any[][] | StateMapper<T, K, I>,
    actions?: ActionCreator<K> | object
  ): (Child: ((props: T & I) => React.ReactNode) | React.ComponentClass<T, S> | React.FC<T, S>) => React.ComponentClass<T, S> | React.FC<T, S>;

  export interface ProviderProps<T> {
    store: Store<T>;
  }

  export class Provider<T> extends React.Component<ProviderProps<T>, {}> {
    render(): React.ReactNode;
  }

  interface ComponentConstructor<P = {}, S = {}> {
    new(props: P, context?: any): React.Component<P, S>;
  }
}
