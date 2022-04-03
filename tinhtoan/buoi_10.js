
// ---------------------------- Xếp loại học lực ----------------------------------------
document.getElementById("btn_xep_loai").addEventListener("click", btn_xep_loai);
function btn_xep_loai() {
    function dtb() {
        return (2 * diem_toan + 2 * diem_van + diem_anh) / 5;
    }

    var diem_toan = Number(document.getElementById('diem_toan').value);
    var diem_van = Number(document.getElementById('diem_van').value);
    var diem_anh = Number(document.getElementById('diem_anh').value);

    if (isNaN(diem_toan) || isNaN(diem_van) || isNaN(diem_anh)) {
        alert("Vui lòng nhập số");
    }
    else if (diem_toan < 0 || diem_toan > 10 || diem_van < 0 || diem_van > 10 || diem_anh < 0 || diem_anh > 10) {
        alert("Vui lòng nhập điểm từ 0 - 10");
    }
    else {

        document.getElementById("dtb").innerHTML = "Điểm trung bình: " + dtb();
        document.getElementById("ket_qua_xep_loai").innerHTML = (dtb() < 5) ? " Học sinh yếu" : (dtb() < 6.5) ? " Học sinh trung bình" : (dtb() < 8) ? " Học sinh khá" : (dtb() < 9) ? " Học sinh giỏi" : " Học sinh xuất sắc";
    }

}

// ---------------------------- Chia 3 và 5 ----------------------------------------
document.getElementById("btn_chia3_5").addEventListener("click", btn_chia3_5);
function btn_chia3_5() {

    var so_n = Number(document.getElementById('so_n').value);


    if (isNaN(so_n)) {
        alert("Vui lòng nhập số");
    }
    else {
        for (var i = 0; i <= so_n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                document.getElementById("ket_qua_chia3_5").innerHTML += i + ", ";
            }
        }
    }

}

// --------------- Tìm Số nguyên dương n ------------------

document.getElementById("btn_tim_n").addEventListener("click", btn_tim_n);
function btn_tim_n() {

    var so_x = Number(document.getElementById('so_x').value);
    var tong = 0;

    if (isNaN(so_x)) {
        alert("Vui lòng nhập số");
    }
    else {
        for (var i = 0; i <= so_x; i++) {
            tong += i;
            if (tong > so_x) {
                document.getElementById("ket_qua_tim_n").innerHTML = "n = " + i;
                break;
            }
        }
    }

}

// <!--------------- Tìm Số Ước Chung Lớn Nhất ---------------- -->

document.getElementById("btn_ucln").addEventListener("click", btn_ucln);
function btn_ucln() {

    var so_1 = Number(document.getElementById('so_1').value);
    var so_2 = Number(document.getElementById('so_2').value);


    if (isNaN(so_1) || isNaN(so_2)) {
        alert("Vui lòng nhập số");
    }
    else {
        if (so_2 == 0) {
            document.getElementById("ket_qua_ucln").innerHTML = so_1;
        }
        else {
            var tmp;
            while (so_2 != 0) {
                tmp = so_1 % so_2;
                so_1 = so_2;
                so_2 = tmp;
            }
            document.getElementById("ket_qua_ucln").innerHTML = so_1;
        }

    }

}



