Array.prototype.likeMap = function (callback) {
  return this.reduce((acc, cv) => {
    acc.push(callback(cv));
    return acc;
  }, []);
};

Array.prototype.likeFilter = function (callback) {
  return this.reduce((acc, cv) => {
    if (callback(cv)) {
      acc.push(cv);
    }
    return acc;
  }, []);
};

Array.prototype.likeEvery = function (callback) {
  return this.reduce((acc, cv) => {
    if (callback(cv)) {
      acc = acc && true;
    } else {
      acc = acc && false;
    }
    return acc;
  }, true);
};

Array.prototype.likeSome = function (callback) {
  return this.reduce((acc, cv) => {
    if (callback(cv) && acc === false) {
      acc = true;
    }
    return acc;
  }, false);
};

Array.prototype.likeFind = function (callback) {
  return this.reduce((acc, cv) => {
    if (callback(cv) && acc === undefined) {
      acc = cv;
    }
    return acc;
  }, undefined);
};

Array.prototype.likeIndexOf = function (value) {
  return this.reduce((acc, cv, i, arr) => {
    if (value === arr[i] && acc === -1) {
      acc = i;
    }
    return acc;
  }, -1);
};
