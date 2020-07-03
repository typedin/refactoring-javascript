export function createPerformanceCalculator(aPerformance, aPlay)
{
  switch(aPlay.type) {
    case "comedy": 
      return new ComedyPerformanceCalculator(aPerformance, aPlay);
    case "tragedy": 
      return new TragedyPerformanceCalculator(aPerformance, aPlay);
    default:
      throw new Error(`unknown type: ${aPlay.type}`);
  }
}

export class PerformanceCalculator
{
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance
    this.play = aPlay
  }

  get amount() {
    throw new Error("subclass responsability");
  }

  get volumeCredits() {
    let result = 0
    if ("comedy" === this.play.type) {
      result += Math.floor(this.performance.audience / 5);
    }
    result += Math.max(this.performance.audience - 30, 0);
    return result;
  }
}

export class ComedyPerformanceCalculator extends PerformanceCalculator{
  get amount() {
    let result = 30000 
    if(this.performance.audience > 20){
      result += 1000 + 500 * (this.performance.audience - 20)
    }
    result += 300 * this.performance.audience
    return result
  }
}

export class TragedyPerformanceCalculator extends PerformanceCalculator{
  get amount() {
    let result = 40000 
    if(this.performance.audience > 30){
      result += 1000 * (this.performance.audience - 30)
    }
    return result
  }
}
