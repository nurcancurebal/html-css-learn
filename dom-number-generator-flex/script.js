const isPrime = num => {

    for (let i = 2; i <= Math.sqrt(num); i++)

        if (num % i === 0) return false;

    return num > 1;
}

let panel = document.querySelector("#panel");

for (let i = 0; i < 102; i++) {

    const pNumber = document.createElement('p');

    pNumber.className = 'pNumberGenerator';
    pNumber.innerHTML = i;

    if (isPrime(i)) {

        pNumber.style.backgroundColor = "#eb695b"; // red

    } else if (i % 2 == 0) {

        pNumber.style.backgroundColor = "#5bbc7a"; // green

    } else {

        pNumber.style.backgroundColor = "#f7dc5c"; // yellow
    }

    panel.appendChild(pNumber);
}