/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday)) return 0;
  if (stock_prices_yesterday.length === 0) return 0;
  if (stock_prices_yesterday.length === 1) return stock_prices_yesterday[0];
  let difference = Number.NEGATIVE_INFINITY;
  let lowest = Infinity;
  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    if (stock_prices_yesterday[i] < lowest) lowest = stock_prices_yesterday[i];
    else if (stock_prices_yesterday[i] - lowest > difference) difference = stock_prices_yesterday[i] - lowest;
  }
  return difference > 0 ? difference : 0;
}
//
// console.log(bestProfit([100, 90, 80, 60, 80, 100, 50]));

// module.exports = bestProfit;
