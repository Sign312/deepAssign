const deepAssign = (objTo, ...objs) => {
  objs.forEach(obj => {
    deepAssignSingle(objTo, obj);
  });
  return objTo;
};

const deepAssignSingle = (objTo, obj) => {
  let keys = Object.keys(obj);
  keys.forEach(key => {
    if (typeof obj[key] == "object") {
      if (typeof objTo[key] != "object") {
        objTo[key] = {};
      }
      deepAssignSingle(objTo[key], obj[key]);
    } else {
      objTo[key] = obj[key];
    }
  });
};

module.exports = deepAssign;
