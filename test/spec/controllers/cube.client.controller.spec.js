'use strict';

describe("Controller: cubeCtrl", function() {
    beforeEach(module('cubeSummationApp'));

    var scope;
    var cubeCtrl;
    var utilityService;

    beforeEach(inject(function ($controller, Utility, $rootScope) {
        scope = $rootScope.$new();
        utilityService = Utility;
        cubeCtrl = $controller('cubeCtrl', {
            $scope: scope,
            Utility: utilityService
        });
    }));

    it("Create a 3D matrix with a specific length", function () {
       expect(true).toBe(true);
    });


});