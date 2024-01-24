// Slide main
$(document).ready(function(){
    $('.slide-main').slick({
      slidesToShow:1,
      slidesToScroll:1,
      arrows:true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true
    });
  });

// Thay đổi ảnh trong trang chi tiết sản phẩm
function change1() {
  document.getElementById('myImg').src = "assets/images/image laptop/3004_c3zzbg9e5memiezohvjlvty9e_3819.jpg";
}
function change2() {
  document.getElementById('myImg').src = "assets/images/image laptop/3004_pa7ryjkiaw1yjcovhqdiihauj_4365.jpg";
}
function change3() {
  document.getElementById('myImg').src = "assets/images/image laptop/3004_qxt8dcy7yjibvcwvhlwvbhjag_4192.jpg";
}
// Zoom to ảnh sản phẩm
// Lấy đối tượng modal
var modal = document.getElementById("myModal");

// Lấy hình ảnh và chèn nó vào trong modal - sử dụng text "alt" của hình ảnh làm chú thích (caption)
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Lấy phần tử <span> để đóng modal
var span = document.getElementsByClassName("close")[0];

// Khi người dùng nhấp vào <span> (x), đóng modal
span.onclick = function() {
    modal.style.display = "none";
}

// Đăng ký, đăng nhập
function dangKy() {
  var ten = document.getElementById("userName").value;
  var p1 = document.getElementById("pass1").value;
  var p2 = document.getElementById("pass2").value;
  if(ten == ""){
      alert("Vui lòng nhập tên");
      return false;
  }
  if(p1 == "" || p2 == ""){
      alert("Vui lòng nhập mật khẩu");
      return false;
  }
  if(p1 != p2){
      alert("Mật khẩu chưa trùng khớp");
      return false;
  }else{
      alert("Chúc mừng đăng ký thành công");
      return true;  
  }
}

// Dropdown
/* Khi người dùng nhấp vào nút, chuyển đổi giữa ẩn và hiển thị nội dung thả xuống */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
