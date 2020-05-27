interface Handler<T, R> {
  (arg: T): R;
}

export function reproduce<S extends object, R>(state: S, func: Handler<S, R>) {
  const copy: S = Object.assign({}, state);
  func(copy);
  return copy;
}
