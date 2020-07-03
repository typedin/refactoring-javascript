import renderHtml from "../src/renderHtml.js"
import statement from "../src/statement.js"
const invoices = require("./fixtures/invoices.json");
const plays = require("./fixtures/plays.json");


const plainHtml = `<h1>Statement for BigCo</h1>
<table>
<tr><th>play</th><th>seat</th><th>cost</th></tr><tr><td>Hamlet</td><td>65000</td><td>$650.00</td></tr>
<tr><td>As You Like It</td><td>49000</td><td>$490.00</td></tr>
<tr><td>Othello</td><td>50000</td><td>$500.00</td></tr>
</table>
<p>Amount owed is <em>$1,640.00</em></p>
<p>You earned <em>47</em> credits</p>
`;

it("renders the correct plain html", function(){
  const result = renderHtml(statement(invoices[0], plays));
  expect(result).toEqual(plainHtml)
});
