const colors = ['black','blue','white'];
console.log(colors);
colors.push('red');
console.log("요소추가 후: "+colors);
colors.pop();
console.log("요소제거 후: "+colors);

colors.reverse();
console.log("요소를 역순으로 한 후 : "+colors);
colors.sort();
console.log("요소를 정렬한 후 : "+colors);
colors.push('red');
colors.push('yellow');
colors.push('green');
console.log(colors);
var splColors = colors.splice(0, 2);
console.log("스플라이스 한 후 1 : "+splColors);
console.log("스플라이스 한 후 2 : "+colors); //앞에 splice한 게 없어지고 나타난다.counts
var newColor = colors.join('+');
console.log("join 한 후 : "+newColor);
