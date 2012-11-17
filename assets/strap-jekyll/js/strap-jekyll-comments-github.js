function loadComments(data) {
  for (var i=0; i<data.length; i++) {
    var cuser = data[i].user.login;
    var cuserlink = "https://www.github.com/" + data[i].user.login;
    var clink = "https://github.com/izuzak/izuzak.github.com/issues/{{ page.commentIssueId }}#issuecomment-" + data[i].url.substring(data[i].url.lastIndexOf("/")+1);
    var cbody = data[i].body_html;
    var cavatarlink = data[i].user.avatar_url;
    var cdate = Date.parse(data[i].created_at).toString("yyyy-MM-dd HH:mm:ss");

    $("#comments").append("<div class='comment'><div class='commentheader'><div class='commentgravatar'>" + '<img src="' + cavatarlink + '" alt="" width="20" height="20">' + "</div><a class='commentuser' href=\""+ cuserlink + "\">" + cuser + "</a><a class='commentdate' href=\"" + clink + "\">" + cdate + "</a></div><div class='commentbody'>" + cbody + "</div></div>");
  }
}

$.ajax("https://api.github.com/repos/izuzak/izuzak.github.com/issues/{{ page.commentIssueId }}/comments", {
  headers: {Accept: "application/vnd.github.full+json"},
  dataType: "json",
  success: function(msg){
    loadComments(msg);
 }
});
