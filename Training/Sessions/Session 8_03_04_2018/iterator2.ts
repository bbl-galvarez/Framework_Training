let list = [4, 5, 6];

for (let i in list){
    console.log(i);
    //the keys (bound) in the array
}

for (let i of list){
    console.log(i);
    //the values in the values
}