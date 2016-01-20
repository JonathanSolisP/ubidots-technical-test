

angular.module('cubeSummationApp').controller('cubeCtrl', function($scope, Utility) {
    $scope.length = 2;
    $scope.updatePoint = Utility.generatePoint(0, 0, 0, 0);
    $scope.startSumPoint = Utility.generatePoint(0, 0, 0, 0);
    $scope.endSumPoint = Utility.generatePoint(0, 0, 0, 0);

    $scope.updateValue = function(toUpdatePoint){
        var position = getPosition(toUpdatePoint);
        position.value = toUpdatePoint.value;
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

    $scope.displaySingleLevel = function(){
        var level = $scope.level.value;
        var length = $scope.length;
        var rowCounter = 0;
        var _2DMatrix = [];
        var row = [];
        for(var i=0; i<$scope._3DMatrix.length/length; i++){
            var index = i+(level*(Math.pow(length, 2)));
            row.push($scope._3DMatrix[index]);
            rowCounter++;
            if(rowCounter == length){
                rowCounter = 0;
                _2DMatrix.push(row);
                row = [];
            }
        }
        return _2DMatrix;
    };


    $scope.$watch('length', function() {
        $scope._3DMatrix = Utility.generateMatrix($scope.length);
        $scope.level_list = Utility.generateLevelsOptions($scope.length);
        $scope.level = $scope.level_list[0];
        $scope._2DMatrix = $scope.displaySingleLevel();
    });
});