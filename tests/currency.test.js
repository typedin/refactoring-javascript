import { usd } from "../src/currency.js"

describe("currency", function(){
  it("should convert cents to dollars", function() {
    expect(usd(100)).toEqual("$1.00")
  })
})
