/*
  File: /~jjacob/public_html/Assignment9/filters.js
  91.461 Assignment: Using AngularJS
  Created by: Jared Jacob
  email: jaredjacob667@gmail.com
  UMass lowell computer science student 91.461 GUI Programming 1
  UPDATED: 12/4/2014

  Description: This page is adapted from
  https://teaching.cs.uml.edu/~heines/91.461/91.461-2014-15f/461-assn/code/Assn09-Starter/jmh-assn09-filters.js

  Removed functions except for increment and unsafe. Comments left in from professor. Increment is used to make
  the first column with the number entry it is. Unsafe is currently not used in my assignment. It is used to 
  display data by AngularJS template as true HTML.
*/ 

"use strict" ;  // to ensure that all variables are declared before use


// given a string containing HTML tags, return a version of it that displays
//    as true HTML when displayed by the AngularJS template
// see http://creative-punch.net/2014/04/preserve-html-text-output-angularjs/
myApp.filter( "unsafe", function( $sce ) {
  /**
   *  @param str the string selected by the AngularJS template
   *      note that in the database, a blank comment is represented a null
   *      in the Boolean expression below, since null is false, ! str is true
   */
  return function( str ) {
    // if the comment string is not a string (it's null or of type object or an empty 
    //    string), return a note that no comment was entered
    if ( typeof( str ) !== "string" || str === "" ) {
      return $sce.trustAsHtml( "(<em>no entry</em>)" ) ;
    } 
    // otherwise, return the comment string in HTML format
    else {
      return $sce.trustAsHtml( str ) ;
    }
  }
} ) ;

// add one to the numeric string selected by the AngularJS template
myApp.filter( "increment", function() {
  /**
   *  @param num the string selected by the AngularJS template, which should be a number
   *                note that JavaScript reports the type as "number", not "string"
   *  @param inc the increment to add to str
   */
  return function( num, inc ) {
    // if the first parameter is invalid, return a blank string
    if ( typeof( num ) === "undefined" || typeof( num ) !== "number" ) {
      return 0 ;
    } 
    // if the first parameter is not a number, return 0
    else if ( typeof( inc ) !== "undefined" &&
              ( typeof( inc ) !== "number" || isNaN( inc ) ) ) {
      return 0 ;
    // else add one to the parameter and return the result
    } else {
      // if the second parameter is missing or invalid, set it 1
      if ( typeof( inc ) === "undefined" ) {
        inc = 1 ;
      }
      // return the incremented number
      return num + inc ;
    }
  }
} ) ;
