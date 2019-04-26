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

// function bestProfit(stock_prices_yesterday) {
//     if (!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length < 2) return 0
//     let maxVal = stock_prices_yesterday[stock_prices_yesterday.length-1]
//     let minVal = stock_prices_yesterday[stock_prices_yesterday.length-1]
//     let profit = 0;
//     for ( let i = stock_prices_yesterday.length-1; i >= 0; i--){
//         if(stock_prices_yesterday.length[i] > maxVal){
//             maxVal = stock_prices_yesterday.length[i];
//             minVal = stock_prices_yesterday.length[i];
//         } else if (stock_prices_yesterday.length[i] < minVal){
//             minVal = stock_prices_yesterday.length[i]
//         }
//     }
//     if ( maxVal - minVal > profit){
//         profit = maxVal - minVal
//     }
//     return profit
// }
function bestProfit (stockArr) {
    if (!Array.isArray(stockArr)) return 0
    let maxVal = stockArr[stockArr.length - 1] - stockArr[stockArr.length-2]
    for ( let i = stockArr.length-1; i >=0; i--) {
      for ( let j = i-1; j>=0; j-- ) {
        if (stockArr[i] - stockArr[j] > maxVal) {
          maxVal = stockArr[i] - stockArr[j]
        }
      }
    }
    if ( maxVal <= 0) return 0
    return maxVal
  }



module.exports = bestProfit;
