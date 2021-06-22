export function Entry(entry) {
  this.counter = 0;
  this.entry = entry;
}

Entry.prototype.countWords = function() {
  let entryArr = this.entry.toLowerCase().split(' ');
  for (let word of entryArr) {
    console.log('word', word);
    this.counter++;
  }
  console.log('counter', this.counter);
  return this.counter;
}

Entry.prototype.countVC = function() {
  const vow = ['a', 'e', 'i', 'o', 'u']
  const cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z']
  let vowCount = 0;
  let consCount = 0;
  for (let char of this.entry) {
    if (vow.includes(char)) {
      vowCount++;
    }
  }
  for (let char of this.entry) {
    if (cons.includes(char)) {
      consCount++;
    }
  }
  return `vowels: ${vowCount} consonants: ${consCount}`
}