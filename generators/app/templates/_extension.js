(function(root, factory) {
    'use strict';
    /*globals require, define, module */
    /* jshint unused: false */

    if (typeof define === 'function' && define.amd) {
        define(['jskeleton'
        ], function(JSkeleton) {
            return factory.call(root, root, JSkeleton);
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        
        var JSkeleton = require('jskeleton');

        module.exports = factory(root, JSkeleton);

    } else if (root !== undefined) {
        factory.call(root, root, root.Jskeleton);
    }

})(this, function(root, JSkeleton) {

    'use strict';

    /*globals*/

    /* jshint unused: false */
    //  -------------------------------
    //  EXAMPLE
    //  -------------------------------
    var <%= name %> = {};

    //  <%= name %>.Foo = function(bar){
    //      return bar; 
    //  }
    //  Expose <%= name %> to JSkeleton
    //  -------------------------------
    //  JSkeleton.<%= name %> = <%= name %>;
    //
    //
    //  Register as a JSkeleton plugin to require as a new dependency
    //  -------------------------------------------------------------
    //  JSkeleton.plugin('<%= name %>', <%= name %>.Foo);
    //
    //  Register the instantiated <%= name %>.Foo as a dependency into the global JSkeleton injector
    //  --------------------------------------------------------------------------------------------
    //  JSkeleton.di.inject({
    //      '<%= name %>': <%= name %>.Foo
    //  });


    return JSkeleton.<%= name %>;

});
