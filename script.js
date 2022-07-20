'use strict';

const changeText = (element, newText) => {
  element.textContent = newText;
};

const clearText = (element) => {
  changeText(element, '0');
};

const addDigit = (digit, num) => {
  const strNum = num.toString();
  const newStrNum = strNum.concat(digit);
  const res = Number(newStrNum);
  return res;
};

const removeLastDigit = (num) => {
  const strNum = num.toString();
  const newStrNum = strNum.slice(0, -1);
  const res = Number(newStrNum);
  return res;
};
