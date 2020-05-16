// console.log("It's Work");

// $(document).ready(function () {
//   $(".submit").click(function (event) {
//     event.preventDefault();
//     console.log("Clicked");
//     var email = $(".email").val();
//     var yourName = $(".your").val();
//     var message = $(".message").val();
//     var statusElm = $(".status");
//     statusElm.empty();

//     if (email.length > 5 && email.includes("@") && email.includes(".")) {
//       statusElm.append("<div>Email is valid</div>");
//     } else {
//       event.preventDefault();
//       statusElm.append("<div>Email is NOT valid</div>");
//     }
//     if (yourName.length > 2) {
//       statusElm.append("<div>Name is valid</div>");
//     } else {
//       event.preventDefault();
//       statusElm.append("<div>Name is NOT valid</div>");
//     }
//     if (message.length > 20) {
//       statusElm.append("<div>Message is valid</div>");
//     } else {
//       event.preventDefault();
//       statusElm.append("<div>Message is NOT valid</div>");
//     }
//   });
// });

// if ("ontouchstart" in window) {
//   var click = "touchstart";
// } else {
//   var click = "click";
// }

// $("div.burger").on(click, function () {
//   if (!$(this).hasClass("open")) {
//     console.log("Clicked1111");

//     openMenu();
//   } else {
//     closeMenu();
//   }
// });

// $("div.menu ul li a").on(click, function (e) {
//   e.preventDefault();
//   console.log("Clicked2222");
//   closeMenu();
// });

// function openMenu() {
//   $("div.circle").addClass("expand");

//   $("div.burger").addClass("open");
//   $("div.x, div.y, div.z").addClass("collapse");
//   $(".menu li").addClass("animate");

//   setTimeout(function () {
//     $("div.y").hide();
//     $("div.x").addClass("rotate30");
//     $("div.z").addClass("rotate150");
//   }, 70);
//   setTimeout(function () {
//     $("div.x").addClass("rotate45");
//     $("div.z").addClass("rotate135");
//   }, 120);
// }

// function closeMenu() {
//   $("div.burger").removeClass("open");
//   $("div.x").removeClass("rotate45").addClass("rotate30");
//   $("div.z").removeClass("rotate135").addClass("rotate150");
//   $("div.circle").removeClass("expand");
//   $(".menu li").removeClass("animate");

//   setTimeout(function () {
//     $("div.x").removeClass("rotate30");
//     $("div.z").removeClass("rotate150");
//   }, 50);
//   setTimeout(function () {
//     $("div.y").show();
//     $("div.x, div.y, div.z").removeClass("collapse");
//   }, 70);
// }

if ("ontouchstart" in window) {
  var click = "touchstart";
} else {
  var click = "click";
}

$("div.burger").on(click, function () {
  if (!$(this).hasClass("open")) {
    openMenu();
  } else {
    closeMenu();
  }
});

$("div.menu ul li a").on(click, function (e) {
  e.preventDefault();
  closeMenu();
});

function openMenu() {
  $("div.circle").addClass("expand");

  $("div.burger").addClass("open");
  $("div.x, div.y, div.z").addClass("collapse");
  $(".menu li").addClass("animate");

  setTimeout(function () {
    $("div.y").hide();
    $("div.x").addClass("rotate30");
    $("div.z").addClass("rotate150");
  }, 70);
  setTimeout(function () {
    $("div.x").addClass("rotate45");
    $("div.z").addClass("rotate135");
  }, 120);
}

function closeMenu() {
  $("div.burger").removeClass("open");
  $("div.x").removeClass("rotate45").addClass("rotate30");
  $("div.z").removeClass("rotate135").addClass("rotate150");
  $("div.circle").removeClass("expand");
  $(".menu li").removeClass("animate");

  setTimeout(function () {
    $("div.x").removeClass("rotate30");
    $("div.z").removeClass("rotate150");
  }, 50);
  setTimeout(function () {
    $("div.y").show();
    $("div.x, div.y, div.z").removeClass("collapse");
  }, 70);
}
