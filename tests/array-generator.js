const generateNumberArray = (num) => {
  return Array.from({length: num}, () => Math.floor(Math.random() * 1000));
}

module.exports = generateNumberArray;

