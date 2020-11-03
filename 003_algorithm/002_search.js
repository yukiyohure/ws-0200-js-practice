
/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch (array, target) {
  let matchIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      matchIndex = i;
    }
  }
  return matchIndex;
}

/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch (array, target) {
  let low = 0; // 最小インデックス番号
  let high = (array.length) - 1; // 最大インデックス番号
  while (low <= high) {
    let middle = Math.trunc((high + low) /2); // 中間インデックス番号
    let guess = array[middle]; // middleの場所にある値
    if (guess === target) { // 検索対象を発見したら
      return middle; // その値のインデックス番号を返す
    } else if (guess > target) {
      high = middle - 1;
    } else if (guess < target) {
      low = middle + 1;
    }
  }
  return -1; // どれにも該当しない場合は-1
}

module.exports = {
  linearSearch,
  binarySearch
}
