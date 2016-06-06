$(document).ready(function() {
  $('button').click(function(event) {
    event.preventDefault();
    var sentence_arr = $('textarea').val().split(" ");
    console.log(sentence_arr);
    dictionary = {};
    sentence_arr.map(function(item) {
      dictionary[item] = 0;
      console.log(dictionary[item]);
    });
    sentence_arr.map(function(item) {
      dictionary[item] += 1
      console.log(dictionary[item]);
    });


    for (var key in dictionary) {
      $(".output ul").append( "<li>" + key + " : " + dictionary[key].toString() + "</li>");
    }
  });
});
