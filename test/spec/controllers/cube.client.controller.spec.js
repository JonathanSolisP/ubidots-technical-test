describe("Service: Utility", function() {
    var length = 2;
    var Utility;

    beforeEach(module('cubeSummationApp'));

    beforeEach(inject(function (_Utility_) {
        Utility = _Utility_;
    }));


    it('should init the 3d matrix with a specific length',function () {
        var _3DMatrix = Utility.generateMatrix(length);
        expect(_3DMatrix.length).toBe(length);
        expect(_3DMatrix[0].length).toBe(length);
        expect(_3DMatrix[0][0].length).toBe(length);
    });

    it('should generate the options levels based on a specific length', function() {
        var generatedOptions = Utility.generateLevelsOptions(length);
        expect(generatedOptions.length).toBe(length);
    });
});

describe('Controller: cubeCtrl', function () {
    var $scope;
    var Utility;
    var _3DMatrix;

    beforeEach(module('cubeSummationApp'));

    beforeEach(inject(function ($rootScope, $controller, _Utility_) {
        Utility = _Utility_;
        $scope = $rootScope.$new();
        var ctrl = $controller('cubeCtrl', {$scope: $scope, Utility: Utility});
        $scope.matrix = Utility.generateMatrix($scope.length);
    }));


    it('should update a position value of the matrix based on 3 axis', function () {
        var x = 0;
        var y = 1;
        var z = 2;
        var value = 5;
        $scope.updateValue(x, y, z, value);
       expect($scope.matrix[x][y][z]).toBe(value);
    });
});