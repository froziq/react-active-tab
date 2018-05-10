const validateProperties = (value) => 
  typeof value === 'number' 
    ? `${value}px`
    : value;
    
export default validateProperties;