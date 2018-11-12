<?php
include('KeyAPI.php');

//API coinmarketcap.com v1 
//Documentation  : https://pro.coinmarketcap.com/api/v1
//EXEMPLE Params : limit=5 , convert=EUR
$ApiUrl='https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5&convert=EUR';

$APIREST = new APIREST($ApiUrl);
$AllCoins= $APIREST->call(
	array ('X-CMC_PRO_API_KEY:'.$ApiKey)
);
?>