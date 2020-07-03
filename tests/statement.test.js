import statement from "../src/statement.js"
const invoices = require("./fixtures/invoices.json");
const plays = require("./fixtures/plays.json");

it("builds the correct statement", function(){
  const result = statement(invoices[0], plays);

  expect(typeof result.customer).toEqual("string");
  expect(typeof result.totalAmount).toEqual("number");
  expect(typeof result.totalVolumeCredits).toEqual("number");
  expect(typeof result.performances.length).toEqual("number");
});

it("builds the correct structure for a performance", function(){
  const result = statement(invoices[0], plays);
  
  result.performances.forEach(function(performance){
    expect(performance.hasOwnProperty("playID")).toBe(true)
    expect(performance.hasOwnProperty("audience")).toBe(true)
    expect(performance.hasOwnProperty("play")).toBe(true)
    expect(performance.hasOwnProperty("amount")).toBe(true)
    expect(performance.hasOwnProperty("volumeCredits")).toBe(true)
    expect(performance.play.hasOwnProperty("name")).toBe(true);
    expect(performance.play.hasOwnProperty("type")).toBe(true);
  })
});

