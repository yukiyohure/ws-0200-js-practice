/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  return {
    name : 'Bob',
    age : 32,
    gender : 'male',
  };
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  person.name = 'Mary';
  person.age = 37;
  person.gender = 'female';
  return person;
}

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(persons) {
  const obj = {};
  let randomNumber;
  for (let i = 0; i < persons.length; i++) {
    randomNumber = Math.floor(Math.random() * 11) + 1; // 最小値が1なので+1する。Math.floor(Math.random() * 最大値 - 最小値) + 最小値
    obj[persons[i]] = randomNumber;
  }
  return obj;
}

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      return true;
    }
    obj[array[i]] = true; // 重複しなかった配列の値のキーにtrueを与えることで、次に同じ値が入ってきたときにこのキーの値を見ることになり、if文でtrueになる。
  }
  return false;
}

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate
}
