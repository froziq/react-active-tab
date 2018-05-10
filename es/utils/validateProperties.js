var validateProperties = function validateProperties(value) {
  return typeof value === 'number' ? value + 'px' : value;
};

export default validateProperties;