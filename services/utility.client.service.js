angular.module('cubeSummationApp').service('Utility', [
    function() {
        //Generates the 3D-matrix and returns it, base on a length passed for parameter
        this.generateMatrix = function (length) {
            var x = 0;
            var y = 0;
            var z = 0;
            var matrix = [];

            for(x; x<length;x++){
                matrix.push([])
                for(y = 0; y<length; y++){
                    matrix[x].push([]);
                    for (z = 0; z<length; z++){
                        matrix[x][y][z] = 0;
                    }
                }
            }
            return matrix;
        };

        this.generateLevelsOption = function (length) {
            list_result = [];
            for (var i = 0; i<length; i++){
                list_result.push({'value': i});
            }
            return list_result;
        }
    },
]);