// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
};

// Returns an object that contains the properties specimenNum and dna
const pAequorFactory = (specimanNum, dna) => {
  return {
    specimanNum,
    dna,

    // Randomly selecting a base in the object's dna property
    mutate() {
      const rndIndex = Math.floor(Math.random() * this.dna.length);
      let rndBase = returnRandBase();
      while (this.dna[rndIndex] === rndBase) {
        rndBase = returnRandBase();
      }
      this.dna[rndIndex] = rndBase;
      return this.dna;
    },

    // Compute how many bases are identical and in the same locations
    compareDNA(newPaequor) {
      const compare = this.dna.reduce((acc, val, i, arr) => {
        if (arr[i] === newPaequor.dna[i]) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const percentageShared = ((compare / this.dna.length) * 100).toFixed(2);
      console.log(`${this.specimanNum} and ${newPaequor.specimanNum} have ${percentageShared}% DNA in common.`);
    },

    // Returns true if the object has at least 60% of its .dna be either 'C' or 'G'
    willLikelySurvive() {
      const cgBase = this.dna.filter(base => base === "C" || base === "G");
      return cgBase.length / this.dna.length >= 0.6;
    }
  }
};

// Create 30 instances of pAequor that can survive
const survivors = [];
let counter = 1;
while (survivors.length < 30) {
  let newPaequor = pAequorFactory(counter, mockUpStrand());
  if (newPaequor.willLikelySurvive()) {
    survivors.push(newPaequor);
  }
  counter++;
}

// Test
const pAequor1 = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());
console.log(pAequor1);
console.log(pAequor2);
console.log(pAequor1.mutate());
console.log(pAequor1.willLikelySurvive());
console.log(pAequor2.willLikelySurvive());

console.log(survivors);
