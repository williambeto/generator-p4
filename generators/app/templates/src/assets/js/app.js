/* Depedências externas */
/*
 * @type function
 */
// http://stackoverflow.com/a/30652110/873870
function requireAll(r) {
    r.keys().forEach(r);
};
//requireAll(require.context('./behaviors/', true, /\.js$/));

// Modernizr
import Modernizr from 'modernizr';

//WhatInput
import whatInput from 'what-input';

//Foundation
import Foundation from './foundation-config';

//Depedências Front-End
/* descomente a linha abaixo para importar todos os arquivos da pasta behaviors */
// requireAll(require.context('./behaviors/', true, /\.js$/));

import './behaviors/app-init';
import './behaviors/images-loaded';
import './behaviors/show-menu';
import './behaviors/maskedinput';
import './behaviors/carousel-init';
import './behaviors/isotope-init';
import './behaviors/magnificPopupInit';