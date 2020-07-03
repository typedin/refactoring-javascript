import renderPlainText from "../src/renderPlainText.js"
import statement from "../src/statement.js"
const invoices = require("./fixtures/invoices.json");
const plays = require("./fixtures/plays.json");

const plainText = `Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $490.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,640.00
You earned 47 credits
`;

it("renders the correct plain text", function(){
  const result = renderPlainText(statement(invoices[0], plays));
  expect(result).toEqual(plainText)
});

