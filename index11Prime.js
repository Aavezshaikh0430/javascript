
console.log('The prime number 1 to 200 is : ')


for (var i=2; i<=100; i++){
    
    for (var j=2; j<=i;j++){
        if(i%j==0){
            
            break;
        }
    }
    if(i == j){
        console.log(i);

    }
}









