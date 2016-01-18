

angular.module('cubeSummationApp').controller('cubeCtrl', function($scope, Utility) {
    $scope.length = 2;
    $scope.updatePoint = Utility.generatePoint(0, 0, 0, 0);
    $scope.startSumPoint = Utility.generatePoint(0, 0, 0, 0);
    $scope.endSumPoint = Utility.generatePoint(0, 0, 0, 0);

    $scope.level = 0;
    $scope.matrix = Utility.generateMatrix($scope.length)['a'];
    $scope._3DMatrix = Utility.generateMatrix($scope.length)['b'];
    $scope.level_list = Utility.generateLevelsOptions($scope.length);
    $scope.level = $scope.level_list[0];

    $scope.updateValue = function(toUpdatePoint){
        var position = getPosition(toUpdatePoint);
        position.value = toUpdatePoint.value;
        console.log($scope._3DMatrix);
    };

    function getPosition(point){
        var position = calculatePosition(point);
        return $scope._3DMatrix[position];
    }

    function calculatePosition(point){
        var length = $scope.length;
        return point.z*(Math.pow(length, 2)) + point.x*(length) + point.y*1;
    }

    $scope.calculateSumButton = function () {
        $scope.display_result = true;
        $scope.sum_result = $scope.calculateSum();
    };

    $scope.calculateSum = function () {
        var startPosition = calculatePosition($scope.startSumPoint);
        var endPosition = calculatePosition($scope.endSumPoint);
        var sum_total = 0;
        for(; startPosition <= endPosition; startPosition++){
            sum_total += $scope._3DMatrix[startPosition].value;
        }
        console.log(sum_total);
    };

    $scope.$watch('length', function() {
        $scope.matrix = Utility.generateMatrix($scope.length)['a'];
        $scope._3DMatrix = Utility.generateMatrix($scope.length)['b'];
        $scope.level_list = Utility.generateLevelsOptions($scope.length);
        $scope.level = $scope.level_list[0];
    });
});