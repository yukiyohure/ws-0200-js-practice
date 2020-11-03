/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort (array) {
  for (let i = 1; i < array.length; i++) { // 最後は最小値が確定してて、比較する必要がないので配列の要素数-1回で済む
    for (let j = 0; j < array.length - i; j++) { // -iをすることで、末尾の確定している分の比較は行わなくなる
      if (array[j] > array[j + 1]) { // 隣り合う要素の大小を判定
        // 要素の入れ替え処理
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort (array) {
  for (let i = 0; i < array.length; i++) {
    let tmp = array[i]; // 比べる対象の値を退避しておく(値を入れ替えていくため)
    if (tmp < array[i - 1]) { // 値が左隣の値より小さかった場合
      let j = i;
      while (j > 0 && array[j - 1] > tmp) { // j>0になるのは比べる対象の値が一番端っこに来たとき(=もう比べる必要が無い)
        array[j] = array[j - 1]; // 適切な場所までずらしていく
        j--;
      }
      array[j] = tmp; // ずらして来て、開いたところにtmpを入れる(挿入)するイメージ
    }
  }
  return array;
}

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort (arr) {
}

function merge(left, right) {
}

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort (a, start = 0, end = (a.length -1)) {
};

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort
}
