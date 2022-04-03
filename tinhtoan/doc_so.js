// <!-------------------------- Đọc số ------------------------------ -->


document.getElementById("btn_doc_so").addEventListener("click", btn_doc_so);
function btn_doc_so() {

    var so_can_doc = (document.getElementById('so_can_doc').value);

    if (isNaN(so_can_doc)) {
        alert("Vui lòng nhập số");
    }
    else {

        var n = so_can_doc.length;
        var m = so_can_doc.length;
        var check = true;
        console.log(so_can_doc.charAt(so_can_doc.length - 3))
        for (var i = 0; i < so_can_doc.length; i++) {

            if (so_can_doc.charAt(i) == 0) {
                // document.getElementById("ket_qua_doc_so").innerHTML += "không ";
                // if(check) document.getElementById("ket_qua_doc_so").innerHTML += "không ";
                // else document.getElementById("ket_qua_doc_so").innerHTML += "lẻ "
                // for (var q = m; q > 0; q--) {
                //     if( q == 22 || q == 21 || q == 18 || q == 15 || q == 12 || q == 9 || q == 6 || q == 4 || q == 3 ){
                //         if (so_can_doc.charAt(so_can_doc.length - 22) == 0 || so_can_doc.charAt(so_can_doc.length - 22) == 0 || so_can_doc.charAt(so_can_doc.length - 18) == 0 ||so_can_doc.charAt(so_can_doc.length - 15) == 0 || so_can_doc.charAt(so_can_doc.length - 12) == 0 || so_can_doc.charAt(so_can_doc.length - 9) == 0 || so_can_doc.charAt(so_can_doc.length - 6) == 0 || so_can_doc.charAt(so_can_doc.length - 4) == 0 ||so_can_doc.charAt(so_can_doc.length - 3) == 0 ) {
                //             document.getElementById("ket_qua_doc_so").innerHTML += "không ";
                //         }
                //         else if( q == 20 || q == 17 || q == 14 || q == 11 || q == 8 || q == 5 || q == 2){
                //             if (so_can_doc.charAt(so_can_doc.length - 20) == 0 || so_can_doc.charAt(so_can_doc.length - 17) == 0 || so_can_doc.charAt(so_can_doc.length - 14) == 0 || so_can_doc.charAt(so_can_doc.length - 11) == 0 || so_can_doc.charAt(so_can_doc.length - 8) == 0 || so_can_doc.charAt(so_can_doc.length - 5) == 0 || so_can_doc.charAt(so_can_doc.length - 2) == 0 ) {
                //                 document.getElementById("ket_qua_doc_so").innerHTML += "lẻ ";
                //             }
                //         }
                //         else if( q == 19 || q == 16 || q == 13 || q == 10 || q == 7){
                //             if (so_can_doc.charAt(so_can_doc.length - 19) == 0 || so_can_doc.charAt(so_can_doc.length - 16) == 0 || so_can_doc.charAt(so_can_doc.length - 13) == 0 || so_can_doc.charAt(so_can_doc.length - 10) == 0 || so_can_doc.charAt(so_can_doc.length - 7) == 0 ) {
                //                 document.getElementById("ket_qua_doc_so").innerHTML += "";
                //             }
                //         }
                //         else if( q == 1){
                //             if (so_can_doc.charAt(so_can_doc.length - 1) == 0) {
                //                 document.getElementById("ket_qua_doc_so").innerHTML += "mười ";
                //             }
                //         }
                //         console.log(so_can_doc.length - q)
                //     }
                // }
                if(m == 1){
                    document.getElementById("ket_qua_doc_so").innerHTML += "mươi ";
                }                
                else if (m == 2) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "lẻ ";
                }
                else if (m == 3) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "không ";
                }  
                else if (m == 4) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "";
                }              
                else if (m == 5) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "lẻ ";
                }
                else if (m == 6) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "không ";
                }
                else if (m == 7) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "";
                }
                else if (m == 8) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "lẻ ";
                }
                else if (m == 9) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "không ";
                }
                else if (m == 10) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "";
                }
                else if (m == 11) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "lẻ ";
                }
                else if (m == 12) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "không ";
                }
                else if (m == 13) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "";
                }
                else if (m == 14) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "lẻ ";
                }
                else if (m == 15) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "không ";
                }
                else if (m == 16) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "";
                }
                else if (m == 17) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "lẻ ";
                }
                else if (m == 18) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "không ";
                }
                else if (m == 19) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "";
                }
                else if (m == 20) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "lẻ ";
                }
                else if (m == 21) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "không ";
                }
                else if (m == 22) {
                    document.getElementById("ket_qua_doc_so").innerHTML += "không ";
                }
                else {
                    document.getElementById("ket_qua_doc_so").innerHTML += "không ";
                }
                
            }
            else if (so_can_doc.charAt(i) == 1) {
                document.getElementById("ket_qua_doc_so").innerHTML += "một ";

            }
            else if (so_can_doc.charAt(i) == 2) {
                document.getElementById("ket_qua_doc_so").innerHTML += "hai ";

            }
            else if (so_can_doc.charAt(i) == 3) {
                document.getElementById("ket_qua_doc_so").innerHTML += "ba ";

            }
            else if (so_can_doc.charAt(i) == 4) {
                document.getElementById("ket_qua_doc_so").innerHTML += "bốn ";

            }
            else if (so_can_doc.charAt(i) == 5) {
                document.getElementById("ket_qua_doc_so").innerHTML += "năm ";

            }
            else if (so_can_doc.charAt(i) == 6) {
                document.getElementById("ket_qua_doc_so").innerHTML += "sáu ";

            }
            else if (so_can_doc.charAt(i) == 7) {
                document.getElementById("ket_qua_doc_so").innerHTML += "bảy ";

            }
            else if (so_can_doc.charAt(i) == 8) {
                document.getElementById("ket_qua_doc_so").innerHTML += "tám ";

            }
            else {
                document.getElementById("ket_qua_doc_so").innerHTML += "chín ";

            }
            m--;
            check = false;
            if (Number(so_can_doc.length) == 1) {

            }
            else {
                for (var j = n; j > 0; j--) {
                    if (n == 22) { document.getElementById("ket_qua_doc_so").innerHTML += "ngàn "; n--; break; }
                    else if (n == 21) { document.getElementById("ket_qua_doc_so").innerHTML += "trăm "; n--; break; }
                    else if (n == 20) {
                        //  document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break; 
                        if (so_can_doc.charAt(so_can_doc.length - 20) == 0) {
                            document.getElementById("ket_qua_doc_so").innerHTML += ""; n--; break;
                        }
                        else {
                            document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break;
                        }
                    }
                    else if (n == 19) { document.getElementById("ket_qua_doc_so").innerHTML += "ngàn tỉ "; n--; break; }
                    else if (n == 18) { document.getElementById("ket_qua_doc_so").innerHTML += "trăm "; n--; break; }
                    else if (n == 17) {
                        // document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break; 
                        if (so_can_doc.charAt(so_can_doc.length - 17) == 0) {
                            document.getElementById("ket_qua_doc_so").innerHTML += ""; n--; break;
                        }
                        else {
                            document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break;
                        }
                    }
                    else if (n == 16) { document.getElementById("ket_qua_doc_so").innerHTML += "triệu "; n--; break; }
                    else if (n == 15) { document.getElementById("ket_qua_doc_so").innerHTML += "trăm "; n--; break; }
                    else if (n == 14) {
                        //  document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break; 
                        if (so_can_doc.charAt(so_can_doc.length - 14) == 0) {
                            document.getElementById("ket_qua_doc_so").innerHTML += ""; n--; break;
                        }
                        else {
                            document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break;
                        }
                    }
                    else if (n == 13) { document.getElementById("ket_qua_doc_so").innerHTML += "ngàn "; n--; break; }
                    else if (n == 12) { document.getElementById("ket_qua_doc_so").innerHTML += "trăm "; n--; break; }
                    else if (n == 11) {
                        //  document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break; 
                        if (so_can_doc.charAt(so_can_doc.length - 11) == 0) {
                            document.getElementById("ket_qua_doc_so").innerHTML += ""; n--; break;
                        }
                        else {
                            document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break;
                        }
                    }
                    else if (n == 10) { document.getElementById("ket_qua_doc_so").innerHTML += "tỉ "; n--; break; }
                    else if (n == 9) { document.getElementById("ket_qua_doc_so").innerHTML += "trăm "; n--; break; }
                    else if (n == 8) {
                        //  document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break; 
                        if (so_can_doc.charAt(so_can_doc.length - 8) == 0) {
                            document.getElementById("ket_qua_doc_so").innerHTML += ""; n--; break;
                        }
                        else {
                            document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break;
                        }
                    }
                    else if (n == 7) { document.getElementById("ket_qua_doc_so").innerHTML += "triệu "; n--; break; }
                    else if (n == 6) { document.getElementById("ket_qua_doc_so").innerHTML += "trăm "; n--; break; }
                    else if (n == 5) {
                        //  document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break; 
                        if (so_can_doc.charAt(so_can_doc.length - 5) == 0) {
                            document.getElementById("ket_qua_doc_so").innerHTML += ""; n--; break;
                        }
                        else {
                            document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break;
                        }
                    }
                    else if (n == 4) { document.getElementById("ket_qua_doc_so").innerHTML += "ngàn "; n--; break; }
                    else if (n == 3) { document.getElementById("ket_qua_doc_so").innerHTML += "trăm "; n--; break; }
                    else if (n == 1) {
                        // document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break;
                        if (so_can_doc.charAt(so_can_doc.length - 2) == 0) {
                            document.getElementById("ket_qua_doc_so").innerHTML += ""; n--; break;
                        }
                        else {
                            document.getElementById("ket_qua_doc_so").innerHTML += "mươi "; n--; break;
                        }
                    }

                }
            }




        }

    }

}
