
/**
 *  数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */

function sumSequence (n, sum = 0) {
  if (n === 0) return sum;
  return sumSequence(n - 1, sum + n)
}

/**
 *  フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 *
 * @param {number} num - フィボナッチ数列をどこまで計算するかを指定
 * @param {number} index - フィボナッチ数を入れる配列の場所を指定
 * @param {array} array - フィボナッチ数を入れる配列
 *
 */

function fibonacci (num, index = 0, array = []) {
  if (num === 0) return array; // numが0になったら再起を終了、加算してきたarrayを返す: この関数ではnumが再起の回数を担う

  if (index === 0 || index === 1) { // 答えとなるフィボナッチ数列の１,2番目は必ず1になるので配列[0]と[1]には1を固定で入れる
    array.push(1); // 配列の末尾に1を追加
    return fibonacci(num -1, index + 1, array);
  }

  // フィボナッチ数列の漸化式 → An = An−1 + An−2
  array.push(array[index - 1] + array[index - 2]);
  return fibonacci(num - 1, index + 1, array); // 再起呼び出し
}


/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 */

function fileSize (node, sum = 0) {
  // basecase
  if ( !node.children && node.size ) return sum + node.size; // childrenがない = 子要素がない場合は最終的な和を返す

  return node.children.reduce((acc, cur) => { // nodeのchildrenの中の配列をreduceで回す
    if (cur.children) { // childrenの配列の要素の中にさらにchildrenがあった場合、↓
      return acc + fileSize(cur, acc); // そのnode(cur)と今現在のファイル合計サイズの値を引数に指定し、再起呼び出しを行う
    }
    return acc + cur.size; // もうcurにchildrenが見つからない場合、「そのnode(cur)のsize」と「今までの合計値(acc)」の和を返す
  }, 0);
}


module.exports = {
  sumSequence,
  fibonacci,
  fileSize
}
