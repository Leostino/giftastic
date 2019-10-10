// Event handler On-click function for the search button


$(document).ready(function() {

    //When search button is clicked

    $("#search").on("click", function() {

       // set div for gifs to display none

       $("#gifs").html("");
    
       // get what user typed in
    
       var userSearch = $("#input").val();
    
       console.log(userSearch);
    
       // query gif api with user's input stored in a variable

       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=83Fgh3I1oIoXKbpTYDtScko02CRuyMxT&limit=5";
    
       console.log(queryURL);

       // ajax call to gif api using get method

	    $.ajax({

          url: queryURL,
        
          method: "GET"
        
	    }).done(function(response) {

          // loop through the response or callback from gif api

		    for (var i = 0; i < 5; i++) {

             console.log(response.data[i]);

              // dynamically append 5 gifs to div with id #gifs
            
			  $("#gifs").append("<img class='image-fit mb-3' alt='" + response.data[i].type + "' src='" + response.data[i].images.fixed_height_downsampled.url + "'>");
        
            }
    
        });
    
   
    });

})