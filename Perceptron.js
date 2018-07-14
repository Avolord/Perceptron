let random = (min, max) => {
  return Math.floor(min + Math.random()*(max+1 - min))
};

let map = (input,start,stop,min,max) => {
  return (input-start)*((max-min)/(stop-start))+min;
};

let activate = (input) => (input>=0) ? 1 : -1;

let sigmoid = (x) => 1/(1+Math.pow(Math.E,-x));

class Perceptron {
  constructor(inputs,hidden,outputs) {

    if(!(hidden instanceof Array)) {
        hidden = [hidden];
    }

    this.stats = {inputs,hidden,outputs};
    this.inputs = new Matrix(inputs,1);
    this.weights = new Array(hidden.length+1).fill(0);
    this.weights[0] = new Matrix(hidden[0],inputs);
    this.weights = this.weights.map((w,i) => {
      if(i==0)
      return w;
      else if(i==hidden.length)
      return new Matrix(outputs,hidden[i-1]);
      else
      return new Matrix(hidden[i],hidden[i-1]);
    });

    this.bias = new Array(hidden.length+1).fill(0).map((x,i) => new Matrix(hidden[i],1));

    this.randomize_weights();
  }

  randomize_weights() {
    this.weights.forEach(x => x.random(-10,10));
    this.bias.forEach(x => x.random(-10,10));
  }

  guess(input_array) {
    if(!(input_array instanceof Array)) {
      return null;
    }
    let inp = Matrix.fromArray(input_array);
    let result = Matrix.prod(this.weights[0],inp);
        result.add(this.bias[0]);
        result.map(sigmoid);
    for(let i=1;i<this.weights.length;i++) {
      let copy = result.copy();
      result = Matrix.prod(this.weights[i],copy);
      result.add(this.bias[i]);
      result.map(sigmoid);
    }
    return result;
  }
}

  advance() {
    
  }
