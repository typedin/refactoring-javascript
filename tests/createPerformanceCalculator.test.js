import { createPerformanceCalculator } from "../src/calculators.js"

describe("createPerformanceCalculator", function(){
  it("should throw an error when trying to create a calculator for an unknown type", function() {
    const unknownPlay = { type: "unknown" };
    expect(
      () => { createPerformanceCalculator({}, unknownPlay )})
      .toThrow("unknown type: unknown")
  })

  it("should create the right calculator", function() {
    jest.mock("../src/calculators.js")
    const comedy = { type: "comedy" }
    const result = createPerformanceCalculator({}, comedy);

    expect(result.constructor.name).toEqual("ComedyPerformanceCalculator")
    jest.clearAllMocks()
  })
})
