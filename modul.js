/*7. Írj egy modult, mely három függvényt exportál: összeadás, szorzás, hatványozás! A
függvények működjenek is! A fő modulban töltsd is be, és hívj meg legalább 1
függvényt közülük! (10p)*/

const sum = (num1, num2) => {
  return num1 + num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const exp = (num1, num2) => {
  return num1 ** num2;
};

module.exports = {
  sum,
  multiply,
  exp,
};
