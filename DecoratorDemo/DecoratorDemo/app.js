var app = angular.module('app', ['app', 'ngRoute'])
    .config(['$provide', function ($provide) {
        // Use the `decorator` solution to substitute or attach behaviors to
        // original service instance; @see angular-mocks for more examples....

        $provide.decorator('$log', ['$delegate', function ($delegate) {
            // Save the original $log.debug()
            var debugFn = $delegate.debug;
            var infoFn = $delegate.info;
            var warnFn = $delegate.warn;
            var logFn = $delegate.log;
            var errorFn = $delegate.error;

            $delegate.debug = function () {
                var args = [].slice.call(arguments),
                now = Date();
                // Prepend timestamp
                args[0] = args[0] + " " + now;
                // Call the original with the output prepended with formatted timestamp
                debugFn.apply(null, args)
            };

            $delegate.info = function () {
                var args = [].slice.call(arguments),
                now = Date();
                // Prepend timestamp
                args[0] = args[0] + " " + now;
                // Call the original with the output prepended with formatted timestamp
                infoFn.apply(null, args)
            };

            $delegate.warn = function () {
                var args = [].slice.call(arguments),
                now = Date();
                // Prepend timestamp
                args[0] = args[0] + " " + now;
                // Call the original with the output prepended with formatted timestamp
                warnFn.apply(null, args)
            };

            $delegate.log = function () {
                var args = [].slice.call(arguments),
                now = Date();
                // Prepend timestamp
                args[0] = args[0] + " " + now;
                // Call the original with the output prepended with formatted timestamp
                logFn.apply(null, args)
            };


            $delegate.error = function () {
                var args = [].slice.call(arguments),
                now = Date();
                // Prepend timestamp
                args[0] = args[0] + " " + now;
                // Call the original with the output prepended with formatted timestamp
                errorFn.apply(null, args)
            };

            // var directive = $delegate[0];

            //  directive.restrict = "AM";
            return $delegate;

        }])
    }]);


