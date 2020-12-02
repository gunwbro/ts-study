function identity<T>(arg: T): T {
  return arg;
}

type sig =  <T>(arg: T) => T;

let myIdentity: { <T>(arg: T): T } = identity;
let myIdentity2: sig = identity;