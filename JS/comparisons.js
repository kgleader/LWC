let trafficlight='red'

if(trafficlight=='green'){
    console.log('Tokto')
}

else if (trafficlight=='white') {
    console.log("Be carefully")
}

else   {
 console.log("Wait for a minute")   
}

let bucket1 = (10<23) || (12>10)
console.log(bucket1)

let bucket3 = (true || false) && true;
console.log(bucket3);


let place = 1; // Change this value to test different places

if (place === 1) {
    console.log('Gold Medal');
} else if (place === 2) {
    console.log('Bronze Medal');
} else if (place === 3) {
    console.log('Silver Medal');
} else {
    console.log('No Medal');
}


let answer = 'I do not know'; // Change this value to test different answers

if (answer === 'YES') {
    console.log('Yeeey!!!');
} else if (answer === 'NO') {
    console.log('So sad, but fine');
} else if (answer === 'I do not know') {
    console.log('Okay, I will wait');
} else {
    console.log('Cry!');
}
