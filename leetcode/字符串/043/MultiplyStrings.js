/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
//对于题目中的case，已经超出JavaScript能表示的整数范围，故必须用数组或字符串来直接存储计算结果
// 先把两个数字都反转，再把每位相乘的结果算出来，再相加，再反转
   
var multiply = function (num1, num2) {
  if (num1 == '0' || num2 == '0') return '0';
  var res = new Array(num1.length + num2.length);
  for (var l = 0; l < res.length; l++) {
    res[l] = 0;
  }
  // 分割翻转
  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();
  for (var i = 0; i < num1.length; i++) {
    for (var j = 0; j < num2.length; j++) {
      res[i + j] += num1[i] * num2[j];
    }
  }
  var carry = 0;
  var str = [];
  for (var l = 0; l < res.length; l++) {
    res[l] += carry;
    carry = (res[l] / 10) >> 0;
    res[l] = res[l] % 10;
    str[l] = res[l];
  }
  str = str.reverse().join('');
  // 去除结果字符串开头的0
  var index = -1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == '0') index = i;
    else break;
  }
  return index < 0 ? str : str.substr(index + 1);
};

/**
  num1的第i位(高位从0开始)和num2的第j位相乘的结果在乘积中的位置是[i+j, i+j+1]
  例: 123 * 45,  123的第1位 2 和45的第0位 4 乘积 08 存放在结果的第[1, 2]位中
    index:    0 1 2 3 4  
        
                  1 2 3
              *     4 5
              ---------
                    1 5
                  1 0
                0 5
              ---------
                0 6 1 5
                  1 2
                0 8
              0 4
              ---------
              0 5 5 3 5
  这样我们就可以单独都对每一位进行相乘计算把结果存入相应的index中        
**/
     
var multiply1 = function (num1, num2) {
  let n1 = num1.length - 1;
  let n2 = num2.length - 1;
  if (n1 < 0 || n2 < 0) return '';
  var res = new Array(n1 + n2 + 2);
  for (var l = 0; l < res.length; l++) {
    res[l] = 0;
  }
  for (let i = n1; i >= 0; --i) {
    for (let j = n2; j >= 0; --j) {
      let bitmul = (+num1.charAt(i)) * (+num2.charAt(j));
      bitmul += res[i + j + 1]; // 先加低位判断是否有新的进位
      res[i + j] += (bitmul / 10) >> 0;
      res[i + j + 1] = bitmul % 10;
    }
  }
  let str = ''
  let k = 0;
  while (k < res.length - 1 && res[k] === 0) {
    k++;
  }
  for (; k < res.length; ++k) {
    str += res[k];
  }
  return str;
}