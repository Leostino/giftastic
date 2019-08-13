// Event handler On-click function for the search button

$(document).ready(function() {

$("#input").val("");

$("#input").focus();

$("#search").on("click", function() {

    $("#gifs").html("");

    var userSearch = $("#input").val();

    console.log(userSearch);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=83Fgh3I1oIoXKbpTYDtScko02CRuyMxT&limit=5";
    
    console.log(queryURL);

	$.ajax({

        url: queryURL,
        
        method: "GET"
        
	}).done(function(response) {

		for (var i = 0; i < 10; i++) {

            console.log(response.data[i]);
            
			$("#gifs").append("<img alt='" + response.data[i].type + "' src='" + response.data[i].images.fixed_height_downsampled.url + "'>");
		}
    });
    
   });
})