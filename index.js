const prefix = [
    "Parla come se fossi ubriaco,",
    "Parla come se fossi un avvocato,",
    "Parla come se fossi un rapper,",
    "Fai un accento,",
    "Parla come se fossi innamorato,",
];

const suffix = [
    "devi parlare di cibo e/o bevande",
    "devi parlare di abbigliamento",
    "devi parlare di colori",
    "devi parlare di luoghi",
    "compara a persone della stessa categoria"
];

const btn = document.getElementById("btn-draw");

function draw() {
    const phrase = document.getElementById("phrase");
    const rndPrefx = prefix[Math.floor(Math.random() * prefix.length)];
    const rndSuffix = suffix[Math.floor(Math.random() * suffix.length)];

    phrase.textContent = `${rndPrefx} ${rndSuffix}`;
}


