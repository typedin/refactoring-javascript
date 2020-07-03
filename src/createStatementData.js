import { PerformanceCalculator, 
        ComedyPerformanceCalculator, 
        TragedyPerformanceCalculator, 
        createPerformanceCalculator } from "./calculators.js"


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

  function totalAmount(data){
    return data.performances
      .reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances
      .reduce((total, p) => total + p.volumeCredits, 0);
  }
}

