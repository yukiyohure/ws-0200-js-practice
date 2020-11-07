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
  for (let i = 0; i < array.length; i++) { // 最初の値は比較する必要はないので1からループを始める
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
  if (arr.length === 1) return arr; // devide until the length of array become 1

  let middleIndex = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, middleIndex); // slice() doesn't include the end
  let rightArray = arr.slice(middleIndex); // you can leave out the second parameter instead of setting arr.length

  return merge(
    mergeSort(leftArray),
    mergeSort(rightArray)
  );
}

function merge(left, right) {
  let output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    let leftElement = left[leftIndex];
    let rightElement = right[rightIndex];

    if (leftElement < rightElement) { // adopt left
      output.push(leftElement);
      leftIndex++;
    } else { // adopt right
      output.push(rightElement);
      rightIndex++;
    }
  }
  return output.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); // concatnate rest of array to output
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
  // base case
  if (a.length <= 1) return a; // return if array has only one element or nothing

  let pivot = a[a.length - 1]; // let's take the most right element of array as pivot
  let leftArray = [];
  let rightArray = [];
  // loop (length - 1) times so that it shoudn't include the pivot number
  for (let i = 0; i < a.length - 1; i++) {
    pivot > a[i] ? leftArray.push(a[i]) : rightArray.push(a[i]);
  }
  // thanks to base case, what we need to do to merge array is just call quickSort() recursively
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort
}
