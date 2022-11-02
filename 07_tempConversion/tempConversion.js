const ftoc = function(tempF) {
  res = (tempF - 32) * (5/9);
  res = parseFloat(res.toFixed(1));
  return res;
};


const ctof = function(tempC) {
  let res = tempC * (9/5) + 32;
  res = parseFloat(res.toFixed(1));
  return res;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
