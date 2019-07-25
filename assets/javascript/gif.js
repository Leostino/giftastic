
var gifList = [];

$("#search").on("click", function() {

    var gif = $("#input").val();
    getGif(gif);
    
  });




function gifElement(response) {
    var gifSection = $("<section>");
    gifSection.addClass("card");

    var gifImage = $("<img>");
    gifImage.attr("src", response.Poster);
    gifImage.attr("alt", response.Title+" Poster");

    var gifPoster = $("<figure>");
    gifPoster.append(gifImage);
    gifSection.append(gifPoster);

    var gifName = $("<h1>");
        gifName.addClass("card-title");
      gifName.html(response.Title);
      gifSection.append(gifName);

      var gifDescription = $("<p>");
      gifDescription.addClass("card-text");
      gifDescription.html(response.Plot);
      gifSection.append(gifDescription);

      $("body").append(gifSection);

} 

function getGif(gif) {


var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=83Fgh3I1oIoXKbpTYDtScko02CRuyMxT&limit=5"

$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
      console.log(response)
    // if (response.Response === "False") {
    //     alert(response.Error);
    //   }
    //   else if (gifList.indexOf(response.Title) >= 0) {
    //     alert ("Gif already in List!");
    //   }
    //   else {
    //     gifElement(response);
    //     gifList.push(response.Title);
    //   }
  });
}

for (var i = 0; i < gifList.length; i++) {

    var gif = gifList[i];
    gifElement(gif);

  }
