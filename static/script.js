let x = 5;
let y = 7;

let A = "Hello ";
let B = "world!";

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log('x3:', x3);
    return x3;
}

let z = SumNPrint(x, y);
let C = SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
}
else if (C.length < z) {
    console.log(z);
}
else{
    console.log('good job!');
}

let L1 = ['Watermelon', 'Pineapple', 'Pear', 'Banana'];
let L2 = ['Apple', 'Banana', 'Kiwi', 'Orange'];

function findTheBanana(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Banana') {
            alert(`Banana found in the array!`);
        }
    }
}

function findTheBananaForEach(arr) {
    arr.forEach(item => {
        if (item === 'Banana') {
            alert(`Banana found in the array!`);
        }
    });
}

findTheBanana(L1);
findTheBanana(L2);
findTheBananaForEach(L1);
findTheBananaForEach(L2);


function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greetingMsg = '';

    if (h < 12) {
        greetingMsg = 'Good morning';
    } else if (h >= 12 && h < 18) {
        greetingMsg = 'Good afternoon';
    } else if (h >= 18 && h < 20) {
        greetingMsg = 'Good evening';
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        greetingMsg = 'Good night';
    }

    let E = document.getElementById('greeting');
    if (E) {
        E.innerHTML = greetingMsg;
    }
}
greetingFunc();