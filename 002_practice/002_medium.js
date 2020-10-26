/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  // 要件のメモ: (numが正の数 => 末尾 || numが負の数 => 1文字目)からnum文字分切り取りした文字が最後にくっつく
  const number = num >= 0 ? str.length - num : -num;
  return str.slice(number, str.length) + str.slice(0, number);
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  return str.replace(/[a, i, u, e, o]/g, ''); // グローバルに母音を空文字に置換して、削除の振る舞いをする
  // 正規表現が一定であることがわかっている場合、↑のようにリテラルを使ったほうが良いパフォーマンスを得られる
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  const ex = new RegExp(s2, 'g'); // 複数件を検索するためにgフラグを設定する
  return s1.match(ex).length;
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  const reversed = str.split('').reverse().join(''); // 文字列を反転
  return reversed === str;
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
  if (num === 2) return true; // 2は素数
  if (num === 1) return false; // 1は素数ではない
  for (let i = 2; i < num; i++) { // 2以上の数字で倍数が見つかれば素数ではない
    if (num % i === 0) return false;
  }
  return true;
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  const filterCallback = (val, index, array) => { // 値が4または4の次のインデックスの値の場合、合計の対象配列に加えない
    if (val === 4 || (array[index - 1] === 4)) {
      return false;
    }
    return true;
  }

  const reduceCallback = (acc, current) => { // このreduceはただ加算していくだけ
    return acc += current;
  }

  return array.filter(filterCallback).reduce(reduceCallback, 0); // filterで絞られた配列の値を合計する
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
