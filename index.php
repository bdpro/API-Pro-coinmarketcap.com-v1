<!DOCTYPE html>
<html lang="fr">

<head>

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</head>

<body>

    <?php
    include('API/ApiAll.php');
?>
    <script>
        $Allcoin = <?php echo $AllCoins; ?>;
    </script>

    <h1 class="text-center">API Pro Coinmarketcap.com V1</h1>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-striped alltable">
                    <thead class="thead">

                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Coins<span class="badge-pill badge-primary align-top" id="NbrCoin"></span></th>
                            <th scope="col">Prix</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Total en Circulation</th>
                            <th scope="col">Volume (24h)</th>
                            <th scope="col">% (1h)</th>
                            <th scope="col">% (24h)</th>
                            <th scope="col">% (7j)</th>

                        </tr>
                    </thead>
                    <tbody id="cour">

                    </tbody>
                </table>

            </div>
        </div>
    </div>




    <script type="text/javascript" src="js/allcoin.js"></script>
</body>

</html>