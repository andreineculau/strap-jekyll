function loadGithubComments(data) {
  var i,
      cavatar,
      cuser,
      cuserlink,
      clink,
      cdate,
      cheader,
      cbody,
      url;

  url = $('#post-comments-url').attr('href');

  for (i = 0; i < data.length; i++) {
    cavatar = data[i].user.avatar_url;
    cuser = data[i].user.login;
    cuserlink = 'https://www.github.com/' + data[i].user.login;
    clink = url + '#issuecomment-' + data[i].url.substring(data[i].url.lastIndexOf('/')+1);
    cdate = Date.parse(data[i].created_at).toString('yyyy-MM-dd HH:mm:ss');
    cbody = data[i].body_html;

    cavatar = '<div class="commentgravatar"><img src="' + cavatar + '" alt="" width="20" height="20"></div>';
    cuser = '<a class="commentuser" href="' + cuserlink + '">' + cuser + '</a>';
    cdate = '<a class="commentdate" href="' + clink + '">' + cdate + '</a>';
    cheader = '<div class="commentheader">' + cavatar + cuser + cdate + '</div>'
    cbody = '<div class="commentbody">' + cbody + '</div>'

    $('#post-comments-placeholder').append('<div class="comment">' + cheader + cbody + '</div>');
  }
}
