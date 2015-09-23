/**
 * Created by Nick on 9/23/15.
 */
var app = angular.module('app', []);
app.controller("IndexController", ['$scope', '$http', function($scope, $http){
    $scope.project = {};
    $scope.team = [];
    var genProject = function(){
        console.log('We need a project!');
        $scope.project = {
            compName:'Brainiacs, Inc',
            scrum: getProjReq(),
            team:[]
        };
    };

    $scope.getProject = function(){
        genProject();
    };

    var hireTeam = function(){
        return $http.get('/hire',function(){
            console.log('We need a team!');
        }).then(function(response){
            console.log(response.data);
        });
    };

    $scope.hire = function(){
        hireTeam();
    };

    genProject();
}]);

function getProjReq(){
    return {front:getScrum(),client:getScrum(),server:getScrum()};
}

function getScrum(){
    var scrum = Math.floor((Math.random()*50)+10);
    return scrum;
}