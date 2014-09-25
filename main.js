// This JavaScript program loads a JSON file
// and renders the posts of the blog.

// This function asynchronously fetches the text content
// of the file "posts.json" and passes the JSON string into the
// given callback function 
function fetchPostsJSON(callback){

  // Fetch the JSON file using XMLHttpRequest.
  // Draws from:
  // http://en.wikipedia.org/wiki/XMLHttpRequest
  // http://vanilla-js.com/
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
  var request = new XMLHttpRequest();
  request.onload = function () {
    // Pass the loaded JSON string to the callback.
    callback(request.responseText);
  };
  request.open("GET", "posts.json", true);
  request.send(null);
}

function renderPosts(posts){

  // Get the DOM element that will contain the posts.
  var postsDiv = document.getElementById("posts");

  // Add an HTML structure to the posts div for each post.
  posts.forEach(function (post) {
    var postDiv = document.createElement("div");
    postDiv.innerHTML = post.content;
    postsDiv.appendChild(postDiv);
  });

}

// Build the DOM from the JSON data.
// Fetch the file,
fetchPostsJSON(function (responseText) {

  // parse the JSON file into an array of Post objects
  var posts = JSON.parse(responseText);

  // render the posts.
  renderPosts(posts);

});
