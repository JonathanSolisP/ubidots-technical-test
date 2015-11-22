angular.module('cubeSummationApp').controller('cubeCtrl', function($scope, Utility) {
    $scope.length = 2;
    $scope.axis_x = 0;
    $scope.axis_y = 0;
    $scope.axis_z = 0;
    $scope.value = 0;
    $scope.axis_x_start = 0;
    $scope.axis_y_start = 0;
    $scope.axis_z_start = 0;
    $scope.axis_x_end = 0;
    $scope.axis_y_end = 0;
    $scope.axis_z_end = 0;

    $scope.level = 0;
    $scope.matrix = Utility.generateMatrix($scope.length);
    $scope.level_list = Utility.generateLevelsOptions($scope.length);
    $scope.level = $scope.level_list[0];

    $scope.updateValue = function(){
        var x = $scope.axis_x;
        var y = $scope.axis_y;
        var z = $scope.axis_z;
        $scope.matrix[x][y][z] = $scope.value;
    };

    $scope.calculateSumButton = function () {
        $scope.display_result = true;
        $scope.sum_result = $scope.calculateSum();
    };

    $scope.calculateSum = function () {
        var x_start = $scope.axis_x_start;
        var y_start = $scope.axis_y_start;
        var z_start = $scope.axis_z_start;
        var x_end = $scope.axis_x_end;
        var y_end = $scope.axis_y_end;
        var z_end = $scope.axis_z_end;
        var sum_total = 0;
        for (x_start; x_start <= x_end; x_start++){
            y_start = $scope.axis_y_start;
            for (; y_start <= y_end; y_start++){
                z_start = $scope.axis_z_start;
                for (; z_start <= z_end; z_start++){
                    console.log($scope.matrix[x_start][y_start][z_start]);
                    sum_total += $scope.matrix[x_start][y_start][z_start]
                }
            }
        }
        return sum_total;
    };

    $scope.$watch('length', function() {
        $scope.matrix = Utility.generateMatrix($scope.length);
        $scope.level_list = Utility.generateLevelsOptions($scope.length);
        $scope.level = $scope.level_list[0];
    });
});