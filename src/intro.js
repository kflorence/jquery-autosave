/*!
<%= pkg.name %> - v<%= pkg.version %>
<%= grunt.template.today( "yyyy-mm-dd" ) %>

<%= pkg.homepage %>
<%= pkg.description %>

Copyright (C) <%= grunt.template.today( "yyyy" ) %> <%= pkg.author.name %>
Released under the <%= grunt.util._.pluck( pkg.licenses, "type" ).join( ", " ) %> licenses
*/

(function( window, $, undefined ) {
"use strict";

