chrome.downloads.onDeterminingFilename.addListener(function(item, suggest)
{
    var s = item.filename;
    var a = s.substring(s.lastIndexOf('.')+1), b = s.substring(0, s.lastIndexOf('.')+1);
    a = a.replace("jpg-large", "jpg");
    a = a.replace("png-large", "png");
    suggest({filename: b+a});
});