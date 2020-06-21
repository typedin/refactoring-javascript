const expectation = `Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $490.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,640.00
You earned 47 credits
`;


const invoices = require("../src/invoices.json");
const plays = require("../src/plays.json");

import Statement from "../src/program.js"

it('returns the correct response', function() {
  expect(Statement(invoices[0], plays)).toEqual(expectation)
});

