var data = $.getJSON("memes.json", function() {
  const com = data['responseJSON'];
  var type = "";
  var coms = "<table id=\"blocks\"> <thead> <tr><th>Meme Name</th><th>URL</th></tr></thead><tbody>";

  for (var i = 0; i < com.length; i++) {
    coms += "<tr>";
    for (var k = 0; k < 2; k++) {
      if (k == 0) {
        coms += "<td>" + com[i]['Meme'] + "</td>";
      } else if (k == 1) {
        type = "URL";
        coms += "<td>" + "<a href=\"" + com[i]['URL'] + "\">" + com[i]['URL'] + "</a>" + "</td>";
      }

    }
    coms += "</tr>";
  }
  coms += "</tbody> </table>";

  var div = document.createElement('rows');
  div.innerHTML = coms;
  document.getElementById('memeList').appendChild(div);

});
