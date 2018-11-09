/* Depedências externas */
/*
 * @type function
 */
// http://stackoverflow.com/a/30652110/873870
function requireAll(r) {
    r.keys().forEach(r);
};
//requireAll(require.context('./behaviors/', true, /\.js$/));


// WhatInput
import whatInput from 'what-input';

// Foundation
// import Foundation from 'foundation-sites';
const Foundation = require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment the line below
// import Foundation from './foundation-config';

// Scripts Front-End
import './behaviors/app-init';
import './behaviors/images-loaded';
import './behaviors/show-menu';
import './behaviors/maskedinput';
import './behaviors/carousel-init';
import './behaviors/magnificPopupInit';
import './behaviors/datepicker';