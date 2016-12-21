function Place(name, location, season) {
  this.name = name;
  this.location = location;
  this.landmarks = [];
  this.season = season;
  this.notes = [];
}

var fillLandmarks = function(place, landmarks) {
  for (var index = 0; index < landmarks.length; index += 1) {
    place.landmarks.push(landmarks[index]);
  }
}

var fillNotes = function(place, notes) {
  for (var index = 0; index < notes.length; index += 1) {
    place.notes.push(notes[index]);
  }
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-place-name").val();
    var inputtedLocation = $("input#new-place-location").val();
    var inputtedSeason = $("input#new-place-season").val();
    var inputtedLandmarks = $("input#new-place-landmarks").val().split(',');
    var inputtedNotes = $("input#new-place-notes").val().split(',');

    var newPlace = new Place(inputtedName, inputtedLocation, inputtedSeason);
    fillLandmarks(newPlace, inputtedLandmarks);
    fillNotes(newPlace, inputtedNotes);

    $("ul#places").append("<li><span class='place'>" + newPlace.name + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.name);
      $(".place-name").text(newPlace.name);
      $(".place-location").text(newPlace.location);
      $(".place-season").text(newPlace.season);
      $(".place-landmarks").empty();
      $(".place-notes").empty();
      newPlace.landmarks.forEach(function(landmark) {
        $(".place-landmarks").append("<li>" + landmark + "</li>");
      });
      newPlace.notes.forEach(function(note) {
        $(".place-notes").append("<li>" + note + "</li>");
      });
    });

    $("input#new-place-name").val("");
    $("input#new-place-location").val("");
    $("input#new-place-season").val("");
    $("input#new-place-landmarks").val("");
    $("input#new-place-notes").val("");
  });
});
