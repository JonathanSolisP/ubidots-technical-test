angular.module('cubeSummationApp').service('Utility', [
    function() {
        //Generates the 3D-matrix and returns it, base on a length passed for parameter
        this.generateMatrix = function (length) {
            var z = 0;
            var x = 0;
            var y = 0;
            var matrix = [];
            var _3DMatrix = [];
            for(z; z<length; z++){
                matrix.push([]);
                for(x = 0; x<length; x++){
                    matrix[z].push([]);
                    for (y = 0; y<length; y++){
                        matrix[z][x][y] = 0;
                        _3DMatrix.push(this.generatePoint(x, y, z, 0));
                    }
                }
            }
            return {'a': matrix, 'b': _3DMatrix};
        };

        this.generateLevelsOptions = function (length) {
            var list_result = [];
            for (var i = 0; i<length; i++){
                list_result.push({'value': i});
            }
            return list_result;
        };

        this.generatePoint = function (x, y, z, value) {
            return {'z': z, 'x': x, 'y': y, 'value': value};
        }
    }
]);