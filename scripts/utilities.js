function forEach(arr, func) {
  for (i=0; i < arr.length; i++) {
    func(arr[i]);
  };
}

var albumImage = document.getElementById('album-cover-art');
var albums = [albumPicasso, albumMarconi, chanceTheRapper];
var albumShowing = 1;
albumImage.addEventListener("click",function(event) {
  setCurrentAlbum(albums[albumShowing]);
  albumShowing++;
  if (albumShowing == albums.length) {
    albumShowing = 0;
    }
  });
