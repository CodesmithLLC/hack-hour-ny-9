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
  let prices = stock_prices_yesterday;
  if (prices.length === 0 || prices.length === 1 || !prices) return 0;

  let sold = prices[prices.length - 1];
  let maxProfit = 0;
  for (let i = prices.length - 2; i >= 0; i -= 1) {
    if (sold > prices[i]) {
      let currProfit = sold - prices[i];
      if (currProfit > maxProfit) {
        maxProfit = currProfit;
      }
    } else {
      sold = prices[i];
    }
  }
  return maxProfit;
}

// let nums = [1, 5, 2, 10, 4];

// console.log(bestProfit(nums));

module.exports = bestProfit;
