var Model;
(function (Model) {
    "use strict";
    var Sample = (function () {
        function Sample(data) {
            if (angular.isString(data)) {
                data = angular.fromJson(data);
            }
            this.test = data.test;
        }
        return Sample;
    })();
    Model.Sample = Sample;
})(Model || (Model = {}));
var Service;
(function (Service) {
    "use strict";
    var SampleService = (function () {
        function SampleService($http) {
            this.$http = $http;
        }
        SampleService.prototype.test = function () {
            return this.$http.get("");
        };
        return SampleService;
    })();
    Service.SampleService = SampleService;
})(Service || (Service = {}));
var Sample;
(function (Sample) {
    "use strict";
    var TestController = (function () {
        function TestController($scope, sampleService) {
            this.$scope = $scope;
            this.sampleService = sampleService;
            $scope.name = "サーバと通信中";
            $scope.temp = "仮";
        }
        TestController.prototype.update = function () {
            this.sampleService.test();
        };
        return TestController;
    })();
    Sample.TestController = TestController;
})(Sample || (Sample = {}));
console.log("ignite!");
var App;
(function (App) {
    "use strict";
    App.appName = "angularjs-with-typescript";
    angular.module(App.appName, ["ngRoute", App.appName + ".controller", App.appName + ".service", App.appName + ".filter", App.appName + ".directive"], function ($routeProvider, $locationProvider) {
        $routeProvider.when("/sample", {
            templateUrl: "/template/sample.html"
        }).otherwise({
            templateUrl: "/template/main.html"
        });
        $locationProvider.html5Mode(true);
    }).run(function ($rootScope, $routeParams) {
        false;
    });
    angular.module(App.appName + ".service", [], function () {
        false;
    }).factory("sampleService", function ($http) {
        return new Service.SampleService($http);
    });
    angular.module(App.appName + ".controller", [App.appName + ".service"], function () {
        false;
    }).controller("SampleTestController", Sample.TestController);
    angular.module(App.appName + ".directive", [], function () {
        false;
    }).directive("tgFileBind", function () {
        return function (scope, elm, attrs) {
            elm.bind("change", function (evt) {
                scope.$apply(function (scope) {
                    scope[attrs.name] = evt.target.files;
                });
            });
        };
    }).directive("tgContenteditable", function ($parse) {
        return {
            require: "ngModel",
            link: function (scope, elm, attrs, ctrl) {
                var value = $parse(attrs.ngModel)(scope);
                elm.attr("contenteditable", "");
                var viewToModel = function () {
                    scope.$apply(function () {
                        ctrl.$setViewValue(elm.html());
                    });
                };
                elm.bind("blur", viewToModel);
                elm.bind("keyup", viewToModel);
                elm.bind("keydown", viewToModel);
                ctrl.$render = function () {
                    elm.html(ctrl.$viewValue);
                };
                if (value) {
                    ctrl.$setViewValue(value);
                    ctrl.$render();
                }
                else {
                    ctrl.$setViewValue(elm.html());
                }
            }
        };
    });
    angular.module(App.appName + ".filter", [], function () {
        false;
    }).filter("rmDuplicated", function () {
        return function (input, options) {
            if (angular.isUndefined(input)) {
                return input;
            }
            else if (!angular.isArray(input)) {
                console.error("input is not array.", input);
                return input;
            }
            var excludeList;
            if (angular.isUndefined(options)) {
                console.error("options is required.");
                return input;
            }
            else if (angular.isArray(options)) {
                excludeList = options;
            }
            else if (angular.isArray(options.exclude)) {
                excludeList = options.exclude;
            }
            var compareFn = function (a, b) {
                return a.$key.keystr === b.$key.keystr;
            };
            if (angular.isUndefined(options)) {
                false;
            }
            else if (angular.isFunction(options.compare)) {
                compareFn = options.compare;
            }
            var result = [];
            input.forEach(function (data) {
                if (!excludeList.some(function (exclude) { return compareFn(data, exclude); })) {
                    result.push(data);
                }
            });
            return result;
        };
    });
})(App || (App = {}));
//# sourceMappingURL=Ignite.js.map