const bases = ['A', 'C', 'G', 'T'];
const miADN = Array.from({ length: 24 }, () => bases[Math.floor(Math.random() * bases.length)]);

console.log(miADN);

// Tambien se puede agrgar un join.
console.log(miADN.join(''));