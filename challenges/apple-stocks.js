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

function bestProfit(spy) {
  if (!Array.isArray(spy) || spy.length < 2) return 0;
  let maxPrice = spy[spy.length - 1];
  let minPrice = spy[spy.length - 1];
  let maxProfit = 0;
  for (let i = spy.length - 1; i >= 0; i -= 1) {
    if (spy[i] > maxPrice) {
      maxPrice = spy[i];
      minPrice = spy[i];
    } else if (spy[i] < minPrice) {
      minPrice = spy[i];
    }
    if (maxPrice - minPrice > maxProfit) {
      maxProfit = maxPrice - minPrice;
    }
  }
  return maxProfit;
}

module.exports = bestProfit;
