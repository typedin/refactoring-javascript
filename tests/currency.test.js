import { usd } from "../src/currency.js"

describe("currency", function(){
  it("should convert cents to dolars", function() {
    expect(usd(100)).toEqual("$1.00")
    console.log(usd(100));
  })
})
