'use strict';
import {stickyNav} from '../../components/header/header';
import  * as tabs from '../../components/solutions/solutions';
/*
    This file can be used as entry point for webpack!
 */
$(() => {
  stickyNav();
  $(".solutions__inner").tabs();

});
