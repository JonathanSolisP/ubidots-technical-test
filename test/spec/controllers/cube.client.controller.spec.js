describe("An AngularJS test suite", function () {
    beforeEach(module('ngResource', function ($provide, $controllerProvider) {
        $provide.value('fooVal', 5);
        $controllerProvider.register('MainCtrl', function($scope){
            $scope.hello = 'world';
            this.reverse = function (input) {
              return input.split('').reverse().join('');
            };
        });
    }));

   it('should have tests', function () {
      expect(true).toBe(true);
   });

    it('should inject dependencies', inject(function($resource, fooVal){
        expect($resource).toBeDefined();
        expect(fooVal).toBe(5);
    }));

    it('should compile angular expressions', inject(function($rootScope, $compile){
        $rootScope.sum = 4;

        var expression = '<p>2 + 2 == {{ sum }}</p>'
        var element = $compile(expression)($rootScope);

        expect(element.html()).not.toContain('2 + 2 == 4');

        $rootScope.$digest();

        expect(element.html()).toContain('2 + 2 == 4');
    }));

    it('should provide controllers', inject(function($rootScope, $controller){
        var $scope = $rootScope.$new(),
            ctrl = $controller('MainCtrl', { $scope: $scope});

        expect($scope.hello).toBe('world');
        expect(ctrl.reverse('foo')).toBe('oof');
    }));
});

describe("Controller: cubeCtrl", function() {
    beforeEach(module('cubeSummationApp'));

});