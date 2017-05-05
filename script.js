(function() {
  var app = angular.module("PSPList", []);

  var MainController = function($scope) {

    $scope.headline = "Projektstrukturplan Liste";


    $scope.items = [{
      'Titel': 'Speiseplan',
      'Kategorie': 'Systemebene',
      'Beschreibung': 'Im Speiseplan werden die Speisen',
      'Aufwand': '5'
    }];
    $scope.addRow = function(Titel, Kategorie, Beschreibung, Aufwand) {
  
        $scope.items.push({
        'Titel': $scope.Titel,
        'Kategorie': $scope.Kategorie,
        'Beschreibung': $scope.Beschreibung,
        'Aufwand': $scope.Aufwand
      });
    
      $scope.Titel= "";
      $scope.Kategorie="";
      $scope.Beschreibung="";
      $scope.Aufwand="";
};
    
  };



  app.controller("MainController", ["$scope", MainController]);
}());