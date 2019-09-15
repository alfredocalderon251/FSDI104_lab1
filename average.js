let numbers=[5,10,1,50,20];
let average=0;
for(var i=0;i<numbers.length;i++){
    alert(numbers[i]);
    average=average+numbers[i];
}
average=average/numbers.length;

alert("Average : "+average);