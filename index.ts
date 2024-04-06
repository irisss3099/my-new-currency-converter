#! /usr/bin/env node

import inquirer from "inquirer";

const currency:any = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,
    AED:76.15,
    SAR:74.05,
    JPY:1.94,
    CAD:203.23,
    CNY:38.39

}
let answer = await inquirer.prompt(
    [
        {
            name: "from",
            message:"enter from currency",
            type:"list",
            choices:["USD","EUR","GBP","INR","PKR","AED","SAR","JPY","CAD","CNY"]
        },
        {
            name: "to",
            message:"enter to currency",
            type:"list",
            choices:["USD","EUR","GBP","INR","PKR","AED","SAR","JPY","CAD","CNY"] 
        },
        {
            name: "amount",
            message:"enter your amount",
            type:"number"
        }
    ]

)

let fromAmount = currency[answer.from] //exchange rate
let toAmount = currency[answer.to] //exchange rate
let amount = answer.amount
let baseAmount = amount / fromAmount
                // 15000/280  //USD base currency
let convertedAmount  = baseAmount * toAmount
                //4*
console.log(convertedAmount);


// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
