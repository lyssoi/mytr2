import { useState } from "../myreact/myreact.js";
import { bindEventHandler, } from "../utils/bindEventHandler.js";

export function CounterAndMeow () {
  const [count, setCount] = useState(1);
  const [cat, setCat] = useState('야옹! ');

  function countMeow (newCount) {
    setCount(newCount);
    setCat('야옹! '.repeat(newCount));
  }

  const countMeowIncrementClickHandler = function () {
    countMeow(count + 1);
  }
  const countMeowderementClickHandler = function () {
    countMeow(count + 1);
  }

  bindEventHandler('click', 'countMeowIncrementClickHandler', countMeowIncrementClickHandler);
  bindEventHandler('click', 'countMeowderementClickHandler', countMeowderementClickHandler);

  return `
    <div>
      <p>고양이가 ${count}번 울어서 ${cat} </p>
      <button class="countMeowIncrementClickHandler">증가</button>
      <button class="countMeowDecrementClickHandler">감소</button>
    </div>
  `;
}