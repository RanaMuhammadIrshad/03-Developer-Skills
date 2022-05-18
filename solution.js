const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

let printForecast = function (arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += `${arr[i]}°C in ${i + 1} days ...`;
  }

  console.log("..." + result);
};

printForecast(data2);
