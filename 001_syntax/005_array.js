/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  return date = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return true;
    }
  }
  return false;
}

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  // https://pisuke-code.com/js-check-duplicated-array-values/
  // let s = new Set(array);
  // return s.size ！= array.length; // setオブジェクトは重複した値は挿入できないので、元の配列長とsetオブジェクトのサイズが異なる場合 = 重複した値が存在した、ということになる。
  for (let i = 0; i < array.length; i++) {
    for (let ii = 0; ii < array.length; ii++) {
      if (i != ii && array[i] === array[ii]) { // 一つの値と、その値とインデックス番号が違う値を比べる
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate
}
