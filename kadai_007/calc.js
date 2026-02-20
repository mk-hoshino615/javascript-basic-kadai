let num = 30;

//3または5で割るとあまりが0になる 3と5の倍数ですと出力
if (num % 3 == 0 && num % 5 == 0) {
  console.log("3と5の倍数です");
}

//3で割るとあまりが0　3の倍数ですと出力
else if (num % 3 == 0) {
  console.log("3の倍数です");
}

//5で割るとあまりが0　5の倍数ですと出力
else if (num % 5 == 0) {
  console.log("5の倍数です");
}

//それ以外の変数の値を出力する
else {
  console.log(num);
}
