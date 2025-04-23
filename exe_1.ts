import superagent from 'superagent';
type Res = import('superagent').Response;

const to: string = "ILS";

const getCallback = function (err: any, res: Res, price: number) {
    let currency: number = 1;
    if (err) {
        console.log(`API request to the URL has failed: ${err}`);
    } else {  
        currency = res.body.rates[to];
    }
    const result = currency * price;
    console.log(result);
}

const converToILS = function(price: number, coin: string) {
    const url = `https://api.frankfurter.dev/v1/latest?from=${coin}&to=${to}`;
    superagent.get(url, (err: any, res: Res) => getCallback(err, res, price));
}

converToILS(23, "USD");