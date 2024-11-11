let currentPrimeIndex = 0;
let primes = [2];

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

document.addEventListener("mousedown", function(event) {
    if (event.button === 0) {
        // Left click
        currentPrimeIndex++;
        if (currentPrimeIndex >= primes.length) {
            primes.push(getNextPrime(primes[primes.length - 1]));
        }
        displayPrime(primes[currentPrimeIndex]);
    } else if (event.button === 2) {
        // Right click
        if (currentPrimeIndex > 0) {
            currentPrimeIndex--;
            displayPrime(primes[currentPrimeIndex]);
        }
    }
});

function getNextPrime(num) {
    let isPrime = false;
    while (!isPrime) {
        num++;
        isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    return num;
}

function displayPrime(prime) {
    document.getElementById("display").innerText = prime;
}