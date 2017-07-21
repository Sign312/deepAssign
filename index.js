const deepAssign = (objTo, ...objs) => {
  objs.forEach(obj => {
    deepAssignSingle(objTo, obj);
  });
  return objTo;
};

const deepAssignSingle = (objTo, obj) => {
  if (obj instanceof Array) {
    objTo = [];
    obj.forEach(item => {
      objTo.push(deepAssignSingle({}, item));
    });
    return;
  }
  let keys = Object.keys(obj);
  keys.forEach(key => {
    if (typeof obj[key] == "object") {
      if (obj[key] instanceof Array) {
        objTo[key] = [];
        obj[key].forEach(item => {
          let temp = {};
          deepAssignSingle(temp, item);
          objTo[key].push(temp);
        });
      } else {
        if (typeof objTo[key] != "object" || objTo[key] instanceof Array) {
          objTo[key] = {};
        }
        deepAssignSingle(objTo[key], obj[key]);
      }
    } else {
      objTo[key] = obj[key];
    }
  });
};

module.exports = deepAssign;
