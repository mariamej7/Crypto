var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");



const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin%2Cethereum%2Cdogecoin&names=Bitcoin%2CEthereum%2CDogecoin&symbols=btc%2Ceth%2Cdoge&include_tokens=top&include_24hr_vol=true&x_cg_demo_api_key=CG-hrmykCQGmScLwmCTWtooc9JL';
var settings = {
    "async" : true,
    "scrossDomain" : true,
    "url" : apiUrl,
    "method" : "GET",
    "headers" : {}
}
$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

});



