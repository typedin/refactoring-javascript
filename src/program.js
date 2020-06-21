export default function statement(invoices, plays) {
  let result = `Statement for ${invoices.customer}\n`;

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }
  for (let perf of invoices.performances) {
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
  }

  function amountFor(aPerformance) {
    let result = 0;
    switch (playFor(aPerformance).type) {
      case 'tragedy':
        result = 40000 
        if(aPerformance.audience > 30){
          result += 1000 * (aPerformance.audience - 30)
        }
        break;
      case 'comedy':
        result = 30000 
        if(aPerformance.audience > 20){
          result += 1000 + 500 * (aPerformance.audience - 20)
        }
        result += 300 * aPerformance.audience
        break;
      default:
        throw new Error("unknown type: ${playFor(aPerformance).type}");
    }
    
    return result
  }

  function volumeCreditsFor(aPerformance) {
    let result = 0

    result += Math.max(aPerformance.audience - 30, 0);
    // add extra credits for every ten comedy attendees
    if ("comedy" === playFor(aPerformance).type) {
      result += Math.floor(aPerformance.audience / 5);
    }

    return result;
  }
  
  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    }).format(aNumber / 100)
  }

  function totalVolumeCredits() {
    let result = 0;
    for (let perf of invoices.performances) {
      result  += volumeCreditsFor(perf);
    }
    return result;
  }

  function appleSauce(){
    let result = 0;
    for (let perf of invoices.performances) {
      result += amountFor(perf);
    }
    return result;
  }

  result += `Amount owed is ${usd(appleSauce())}\n`
  result += `You earned ${totalVolumeCredits()} credits\n`;
  return result;
}

