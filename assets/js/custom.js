$(".search-header-row").fadeOut(0);
$(".search-header").click(function() {
    $(".search-header-row").fadeToggle(200);
});
var x = document.forms['singinForm'];
var ins = x.querySelectorAll("input");

function sum(e) {
    for (n of ins) {
        if (n.value == "") {
            //return false;
            e.preventDefault();

            alert("jkdsa");
            document.getElementById("err-null-pass").classList.add("err-null-user");


        }
    }
}


// function ValidationForm() {
//     var x = document.forms['singinForm']['username'].value;
//     var y = document.forms['singinForm']['password'].value;
//     if (y == "", x == "") {
//         document.getElementById("err-null-pass").classList.add("err-null-user");
//         document.getElementById("exampleInputPass").classList.add("has-err");
//         document.getElementById("err-null-user").classList.add("err-null-user");
//         document.getElementById("userName").classList.add("has-err");

//         return false;
//     } else {
//         document.getElementById("userName").classList.remove("has-err");

//         document.getElementById("userName").classList.add("has-ok");
//         document.getElementById("userName").classList.remove("has-err");

//         document.getElementById("userName").classList.add("has-ok");
//         return false;
//     }



// }