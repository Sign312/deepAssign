# deepAssign
Object.assign with deep clone

```javascript

import deepAssign from 'deepassign'

deepAssign({a: {b: 0}}, {a: {b: 1, c: 2}}, {a: {c: 3}});
//=> {a: {b: 1, c: 3}} 

```