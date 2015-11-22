

angular.module('cubeSummationApp').controller('cubeCtrl', function($scope, Utility) {
    $scope.length = 2;

    $scope.axis_x = 0;
    $scope.axis_y = 0;
    $scope.axis_z = 0;
    $scope.value = 0;

    $scope.level = 0;
    $scope.matrix = Utility.generateMatrix($scope.length);
    $scope.level_list = Utility.generateLevelsOption($scope.length);
    $scope.level = $scope.level_list[0];

    $scope.updateValue = function(){
        var x = $scope.axis_x;
        var y = $scope.axis_y;
        var z = $scope.axis_z;
        $scope.matrix[x][y][z] = $scope.value;
    };
});