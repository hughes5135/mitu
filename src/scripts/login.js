window.onload = function () {
  $(".connect p").eq(0).animate({"left": "0%"}, 600);
  $(".connect p").eq(1).animate({"left": "0%"}, 400);
  getUserInfo()
}

function getUserInfo() {
  var userinfo = $(".userinfo")
  var user = sessionStorage.getItem('user')
  if (user) {
    userinfo.html('<a>' + user + '</a><a href="" class="logout">退出</a>')
  }
  var logout = $('.logout')
  logout.bind('click', function () {
    sessionStorage.clear()
  })
}


$(".btn").click(function () {
  is_hide();

})

$("#submit").bind('click', function () {
  // eventListener
  var username = $("input[name=username]");
  var password = $("input[name=password]");
  if (username.val() == '' || password.val() == '') {
    $("#ts").html("用户名或密码不能为空~");
    is_show();
    return false;
  }
  else {
    // var reg = /^[0-9A-Za-z]+$/;
    // if (!reg.exec(u.val())) {
    //   $("#ts").html("用户名错误");
    //   is_show();
    //   return false;
    // }
    sessionStorage.setItem('user', username.val())
    sessionStorage.setItem('password', password.val())
    self.location = '../../index.html'
  }
});

function is_hide() {
  $(".alert").animate({"top": "-40%"}, 300)
}

function is_show() {
  $(".alert").show().animate({"top": "45%"}, 300)
}
