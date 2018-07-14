let random = (min, max) => {
  return Math.floor(min + Math.random()*(max+1 - min))
};

let map = (input,start,stop,min,max) => {
  return (input-start)*((max-min)/(stop-start))+min;
};

let activate = (input) => (input>=0) ? 1 : -1;

let multiplier = 1;
let adder = 100;

class Perceptron {
  constructor(inputs,hidden,outputs) {
    this.stats = {inputs,hidden,outputs};

  }

}
