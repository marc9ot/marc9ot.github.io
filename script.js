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
                $scope.items = response.data;
                console.log(response);
            });

        $scope.addRow = function (Titel, Kategorie, Beschreibung, Aufwand, User) {
            alert($scope.user);
            var newItem = {
                'title': $scope.Titel,
                'category': $scope.Kategorie,
                'description': $scope.Beschreibung,
                'effort': $scope.Aufwand,
                "user" : $scope.user
            }

            $http.post(path + "/ppsitem", newItem)
                .then(function(response) {
                    console.log(response);
                    $http.get(path + "/ppsitems")
                        .then(function(response) {
                            $scope.items = response.data;
                            console.log(response);
                            $scope.Titel = "";
                            $scope.Kategorie = "";
                            $scope.Beschreibung = "";
                            $scope.Aufwand = "";

                        });
                });
        };
        $scope.dropRow = function (item) {
            console.log(item);
            $http.delete(path + "/ppsitems/" + item._id)
                .then(function(response) {
                    console.log(response);
                    $http.get(path + "/ppsitems")
                        .then(function(response) {
                            $scope.items = response.data;
                        });
                });
        };

    };


    app.controller("MainController", ["$scope", "$http", MainController]);
}());