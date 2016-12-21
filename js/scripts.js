function Place(name, location) {
  this.name = name;
  this.location = location;
}

//Contact.prototype.fullName = function() {
  //return this.firstName + " " + this.lastName;
//}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-place-name").val();
    var inputtedLocation = $("input#new-place-location").val();

    var newPlace = new Place(inputtedName, inputtedLocation);

    $("ul#places").append("<li><span class='place'>" + newPlace.name + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.name);
      $(".place-name").text(newPlace.name);
      $(".place-location").text(newPlace.location);
    });

    $("input#new-place-name").val("");
    $("input#new-location").val("");
  });
});
