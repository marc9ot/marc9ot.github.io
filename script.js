(function () {
    var app = angular.module("PSPList", []);

    var MainController = function ($scope, $http) {

        $scope.headline = "Projektstrukturplan Liste";

        var path = "https://secure-lowlands-23501.herokuapp.com/api";

        // $scope.items = [{
        //     'Titel': 'Speiseplan',
        //     'Kategorie': 'Systemebene',
        //     'Beschreibung': 'Im Speiseplan werden die Speisen',
        //     'Aufwand': '5'
        // }];

        $http.get(path + "/ppsitems")
            .then(function(response) {
                $scope.items = JSON.parse(JSON.stringify(response.data));
                console.log(response);
            });

        $scope.addRow = function (Titel, Kategorie, Beschreibung, Aufwand) {

            $scope.items.push({
                'Titel': $scope.Titel,
                'Kategorie': $scope.Kategorie,
                'Beschreibung': $scope.Beschreibung,
                'Aufwand': $scope.Aufwand
            });

            $scope.Titel = "";
            $scope.Kategorie = "";
            $scope.Beschreibung = "";
            $scope.Aufwand = "";
        };

    };


    app.controller("MainController", ["$scope", "$http", MainController]);
}());