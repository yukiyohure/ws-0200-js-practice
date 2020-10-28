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
  // const reversed = str.split('').reverse().join(''); // 文字列を反転
  // return reversed === str;
  for (let i = 0; i < (str.length / 2); i++) { // 元の回答だとsplitで全文字数分処理が走るので、このように繰り返しの回数を減らす工夫をする→半分から以降は回文かどうかを判断する必要がない
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
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
  // if (num === 2) return true; // 2は素数
  // if (num === 1) return false; // 1は素数ではない
  // for (let i = 2; i < num; i++) { // 2以上の数字で倍数が見つかれば素数ではない
  //   if (num % i === 0) return false;
  // }
  // return true;

  if (num === 2) return true;
  if (num === 1) return false;
  if (num % 2 === 0) return false; // ここで偶数も判断してあげればforで3から処理を始めることができる
  for (let i = 3; i < Math.sqrt(num); i = i + 2) { // forの回数の上限を平方根にすればおよそ半分の回数で処理が完了する
    if (num % i === 0) return false;
  }
  return true;

  // 100 → 1*100,2*50,4*25,5*20,10*10|10*10,5*20,4*25...なので平方根にすれば半分以降の無駄な判断はいらなくなる(平方根になることを知っているか知らないかの違い)
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
  // const filterCallback = (val, index, array) => { // 値が4または4の次のインデックスの値の場合、合計の対象配列に加えない
  //   if (val === 4 || (array[index - 1] === 4)) {
  //     return false;
  //   }
  //   return true;
  // }

  // const reduceCallback = (acc, current) => { // このreduceはただ加算していくだけ
  //   return acc += current;
  // }

  // return array.filter(filterCallback).reduce(reduceCallback, 0); // filterで絞られた配列の値を合計する

  let sum = 0
  for (let i = 0; i < array.length; i++) { // 組み込み関数を使うよりも制御構文を使用する方がコーディングテスト的には良いし、小回りが効く実装になる。実戦では可読性を重視して組み込み関数を用いる方が良い傾向にある。
    if (array[i] === 4) {
      continue;
    }
    if (i > 0 && array[i - 1] === 4) {
      continue;
    }
    sum += array[i]
  }
  return sum;
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
