const secondsUntilEOD = () => {
  const dateObj = new Date();
  const h = dateObj.getHours();
  const m = dateObj.getMinutes();
  const s = dateObj.getSeconds();
  return (24*60*60) - (h*60*60) - (m*60) - s;
};

module.exports = secondsUntilEOD;