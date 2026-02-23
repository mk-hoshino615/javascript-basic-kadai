const date = new Date();

const [year, momth, day] = [
  date.getFullYear(),
  date.getMonth() + 1,
  date.getDate(),
];

console.log(year + "年" + momth + "月" + day + "日");
