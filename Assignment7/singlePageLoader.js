  /* 
  File: /~jjacob/public_html/Assignment7/singlePageLoader.js
  91.461 Assignment: Creating a Single-Page Navigation Interface
  Created by: Jared Jacob
  email: jaredjacob667@gmail.com
  UMass lowell computer science student 91.461 GUI Programming 1
  UPDATED: 11/04/2014

  Description: Provides the functionality to load in the content of each
  page based on the hash in the url changing. 
  */


//Give the initial hash as home when the orginal page assignment7.html loads
if(!location.hash){
	location.hash = "#home";
}

//This listens for the hash at the end of a url change and does a function on 
//based on the hash.
window.addEventListener("hashchange", function () {
	//Used for debugging if hash change was being processed
	//console.log(location.hash);

	//grabs the elements of the two placeholder div tags. 
	var contentDiv = document.getElementById("mainContent");
	var imageDiv = document.getElementById("trailMap");

	//Each if block checks for a different hash. Home will hide 
	//the trailMap div tag so the background outline will not show.
	//each other one will show the trail map image.

	//All content is put directly as a html string. Need to find a way to add external 
	//html file for better maintanence and readability.
	if( location.hash == "#home")
	{
		contentDiv.innerHTML = "<p> Welcome to the Local Snowboarding homepage. Here we have information on three of the ski resorts within the New England Area. Chose a Mountain with the navigation on the top of the page. </p>";
		$("#trailMap").hide();
	}

	if( location.hash == "#Wachusett")
	{
		contentDiv.innerHTML = "<p>Wachusett Mountain is a ski resort in located on Mount Wachusett in the towns of Princeton and Westminster in Worcester County, Massachusetts.</p>";
		$("#trailMap").show();
		imageDiv.innerHTML = '<img src="images/wachusettTrailMap.jpg" alt="wachusettTrailMap">';
	}

	if( location.hash == "#SundayRiver")
	{
		contentDiv.innerHTML = "<p>Sunday River is a ski resort located in Newry, Maine, in the United States. It is one of Maine's largest and most visited ski resorts. Its vertical drop of 2,340 feet is the second largest in Maine and the sixth largest in New England.</p>";
		$("#trailMap").show();
		imageDiv.innerHTML = '<img src="images/sundayRiverTrailMap.jpg" alt="sundayRiverTrailMap">';
	}

	if( location.hash == "#Cannon")
	{
		contentDiv.innerHTML = "<p>Cannon Mountain Ski Area is a state-owned ski resort located on Cannon Mountain in the White Mountains of New Hampshire, United States. Cannon is located within Franconia Notch State Park and offers 10 lifts servicing 265 acres of skiing.</p>";
		$("#trailMap").show();
		imageDiv.innerHTML = '<img src="images/cannonTrailMap.jpg" alt="cannonTrailMap">';
	}

});