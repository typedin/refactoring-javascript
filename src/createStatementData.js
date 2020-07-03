function createPerformanceCalculator(aPerformance, aPlay)
{
  switch(aPlay.type) {
    case "comedy": 
      return new ComedyPerformanceCalculator(aPerformance, aPlay);
      break;
    case "tragedy": 
      return new TragedyPerformanceCalculator(aPerformance, aPlay);
      break;
    default:
      throw new Error("unknown type: ${this.play.type}");
  }
}


class PerformanceCalculator
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
    result += Math.max(this.performance.audience - 30, 0);
    if ("comedy" === this.play.type) {
      result += Math.floor(this.performance.audience / 5);
    }
    return result;
  }
}
class ComedyPerformanceCalculator extends PerformanceCalculator{
  get amount() {
    let result = 30000 
    if(this.performance.audience > 20){
      result += 1000 + 500 * (this.performance.audience - 20)
    }
    result += 300 * this.performance.audience
    return result
  }
}
class TragedyPerformanceCalculator extends PerformanceCalculator{
  get amount() {
    let result = 40000 
    if(this.performance.audience > 30){
      result += 1000 * (this.performance.audience - 30)
    }
    return result
  }
}

export default function createStatementData(invoices, plays) {
  const result = {};
  result.customer = invoices.customer
  result.performances = invoices.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);

  return result;

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);

    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance))

    result.play = calculator.play; 
    result.amount = calculator.amount ;
    result.volumeCredits = calculator.volumeCredits;

    return result
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount
  }

  function volumeCreditsFor(aPerformance) {
    let result = 0
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === aPerformance.play.type) {
      result += Math.floor(aPerformance.audience / 5);
    }
    return result;
  }

  function totalAmount(data){
    return data.performances
      .reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances
      .reduce((total, p) => total + p.volumeCredits, 0);
  }
}

