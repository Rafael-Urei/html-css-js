let image_big = document.getElementById("image_big")
var dropdown_content = document.getElementById("drop_content")
        function dropdownmenu1() {
            if (dropdown_content.style.display == "none") {
                dropdown_content.style.display = "flex"
            } else  {
                dropdown_content.style.display = "none"
            }
        }

        function change_image() {
            if ($(window).width() < "800px") {
                image_big.src="media/images/image-hero-mobile.png"
            }
        }