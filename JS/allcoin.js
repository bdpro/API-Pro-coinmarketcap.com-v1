   //Récupération json  &  Boucle des données
   $i = 0;
   for ($key in $Allcoin.data) {

     $coin = $Allcoin.data[$key]; {
           //compte le nombre de coin dans la boucle    
           $i++;
       }



       //      <--  test resultat dans la  console -->
       //                    console.log(coin);

       //Creation des variables(Optionnel)
       //Rang
       $Rank = $coin.cmc_rank
       // symbole
       $Symbol = $coin.symbol
       // ID
       $Id = $coin.id
       // Nom
       $Name = $coin.name
       // prix + limite 2 chiffres apres la virgule (toFixed(2))
       $Price = $coin.quote.EUR.price.toFixed(2)
       //volume total en circulation
       $Supply = $coin.circulating_supply.toFixed()
       //Marketcap + limite 2 chiffres apres la virgule (toFixed(2))
       $Mcap = $coin.quote.EUR.market_cap.toFixed(2)
       //Volume 24h
       $Vol24h = $coin.quote.EUR.volume_24h.toFixed(2)
       // variation 1h + limite 2 chiffres apres la virgule (toFixed(2))
       $Variation1h = $coin.quote.EUR.percent_change_1h.toFixed(2)
       //si $variation est negatif afficher en rouge sinon afficher en vert
       if ($Variation1h < 0) {
           $Variation1h = "<font color='red'>" + $Variation1h + " % </font>";
       } else {
           $Variation1h = "<font color='green'>+" + $Variation1h + " % </font>";

       }
       // variation  + limite 2 chiffres apres la virgule (toFixed(2))
       $Variation24h = $coin.quote.EUR.percent_change_24h.toFixed(2)
       //si $variation est negatif afficher en rouge sinon afficher en vert
       if ($Variation24h < 0) {
           $Variation24h = "<font color='red'>" + $Variation24h + " % </font>";
       } else {
           $Variation24h = "<font color='green'>+" + $Variation24h + " % </font>";

       }
       // variation 7d  + limite 2 chiffres apres la virgule (toFixed(2))
       $Variation7d = $coin.quote.EUR.percent_change_7d.toFixed(2)
       //si $variation est negatif afficher en rouge sinon afficher en vert
       if ($Variation7d < 0) {
           $Variation7d = "<font color='red'>" + $Variation7d + " % </font>";
       } else {
           $Variation7d = "<font color='green'>+" + $Variation7d + " % </font>";

       }

       // Logo
       $Logo = "<img src='https://s2.coinmarketcap.com/static/img/coins/32x32/" + $Id + ".png' class='img-fluid' alt=" + $Name + " style=' margin-right: 12px;'>"

       // tableau html
       $('#cour').append(
           "<tr><td>" +
           $Rank + "</td><td> " +
           $Logo +
           $Symbol + "</br>" +
           $Name + "</td><td " +
           $Price + " €</td><td>" +
           $Mcap + " €</td><td>" +
           $Supply + " " +
           $Symbol + "</td><td>" +
           $Vol24h + " €</td><td>" +
           $Variation1h + "</td><td>" +
           $Variation24h + "</td><td>" +
           $Variation7d + "</td></tr>")



   };

   $('#NbrCoin').append($i);