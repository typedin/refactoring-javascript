import { PerformanceCalculator, ComedyPerformanceCalculator, TragedyPerformanceCalculator } from "../src/calculators.js"

describe("PerformanceCalculator", function(){
  it("should throw an error when trying to get the amount for an unknown type", function(){
    expect(
      () => { new PerformanceCalculator({}, {}).amount })
    .toThrow()
  })

  it("calculates volume credits for a tragedy", function(){
    const performance = { audience: 55 };
    const play = { type: "tragedy" }
    expect(
      new PerformanceCalculator( performance, play).volumeCredits
    ).toBe(25)
  })

  it("calculates volume credits for a comedy", function(){
    const performance = { audience: 55 };
    const play = { type: "comedy" }
    expect(
      new PerformanceCalculator( performance, play).volumeCredits
    ).toBe(36)
  })
})

describe("ComedyPerformanceCalculator", function(){ 

  it("calculates the amount for less than 20 people", function(){
    const performance = { audience: 19 };
    const play = { type: "comedy" }

    expect(
      new ComedyPerformanceCalculator( performance, play).amount
    ).toBe(35700)
  });

  it("calculates the amount for more than 20 people", function(){
    const performance = { audience: 21 };
    const play = { type: "comedy" }

    expect(
      new ComedyPerformanceCalculator( performance, play).amount
    ).toBe(37800)
  });
});

describe("TragedyPerformanceCalculator", function(){ 
  it("calculates an amount of 40000 for a tragedy for less than 30 people", function(){
    const performance = { audience: 29 };
    const play = { type: "tragedy" }

    expect(
      new TragedyPerformanceCalculator( performance, play).amount
    ).toBe(40000)
  });

  it("calculates the amount for a comedy for more than 20 people", function(){
    const performance = { audience: 31 };
    const play = { type: "tragedy" }

    expect(
      new TragedyPerformanceCalculator( performance, play).amount
    ).toBe(41000)
  });
});

