// <!-------------------------- Tam giác ------------------------------ -->

document.getElementById("btn_tam_giac").addEventListener("click", btn_tam_giac);
function btn_tam_giac() {

    var a = Number(document.getElementById('canh_1').value);
    var b = Number(document.getElementById('canh_2').value);
    var c = Number(document.getElementById('canh_3').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Vui lòng nhập số");
    }
    else {
        if (a + b <= c || a + c <= b || b + c <= a) {
            alert("Tam giac khong hop le. Xin kiem tra lai !");
        }
        else {
            if ((a == b) && (b == c)) {
                document.getElementById("ket_qua_tam_giac").innerHTML = "Đây là tam giác đều";
            }
            else if ((a * a + b * b == c * c) || (a * a + c * c == b * b) || (b * b + c * c == a * a)) {
                document.getElementById("ket_qua_tam_giac").innerHTML = "Đây là tam giác vuông";
            }
            else if (a == b || a == c || b == c) {
                document.getElementById("ket_qua_tam_giac").innerHTML = "Đây là tam giác cân";
            }
            else {
                document.getElementById("ket_qua_tam_giac").innerHTML = "Đây là tam giác thường";
            }

        }

    }

}
