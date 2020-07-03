import { PerformanceCalculator } from "../src/calculators.js"

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

