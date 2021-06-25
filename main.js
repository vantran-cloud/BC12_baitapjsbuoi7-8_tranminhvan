
var mangSoNguyen = [];
var arrayLength = 0;
var nhapVao = document.getElementById('nhapVao');
nhapVao.onclick = function() {
    var soNguyen = (document.getElementById('soNguyen').value);
    for (var i = 0; i < soNguyen.length; i++) {
        if (i <= 0 && i >= 0) {
            mangSoNguyen.push(parseInt(soNguyen));
            console.log(mangSoNguyen);
        }   
    }  
    arrayLength = mangSoNguyen.length;
}

//1. Tổng các số dương trong mảng
/**
 * phân tích:
 * input: nhập vào các số nguyên ngẫu nhiên
 * handle: khai báo biên tổng số dương, dùng vòng lập for
 * output: tính ra tổng các số dương trong mảng
 */

var tongSoDuong = 0;
var tinhTong = function() {
    for (var i = 0; i < arrayLength; i++) {
        if(mangSoNguyen[i] > 0) {
            tongSoDuong = tongSoDuong + mangSoNguyen[i];
        }
        
    } alert('Tổng các số dương trong mảng là: ' + tongSoDuong);
        
}






//2. Đếm có bao nhiêu số dương trong mảng
/**
 * phân tích:
 * input: nhập vào các sô nguyên ngẫu nhiên
 * handle: khai báo biến count, dùng vong lập for để đếm các số nguyên thỏa yêu cầu
 * output: xuất ra tổng số nguyên dương có trong mảng
 */
var count = 0;
var demSoDuong = function() {
    for(var i = 0; i < arrayLength; i++) {
        if(mangSoNguyen[i] > 0) {
            count++;
        } 
        
    } alert('Có ' + count + ' số nguyên dương trong mảng');
}






//3. Tìm số nhỏ nhất trong mảng
/**
 * phân tích:
 * input: nhập vào các số nguyên ngẫu nhiên
 * handle: khai báo biến min, giả sử cho min = giá trị đầu tiên trong mảng, dùng vòng lập for timg giá trị nhỏ nhất
 * output: xuất ra số nguyên nhỏ nhất
 */

var xuatRa = function() {
    var min = mangSoNguyen[0];
    for(var i = 1; i < arrayLength; i++) {
        if(min > mangSoNguyen[i]) {
            min = mangSoNguyen[i];
        }
    } alert('Số nguyên nhỏ nhất là ' + min)
}






//4. Tìm số dương nhỏ nhất trong mảng.
/**
 * phân tích:
 * input: nhập vào số nguyên ngẫu nhiên;
 * handle: khai báo biên số nguyên dương nhỏ nhất, dùng vòng lập for để gán số nguyên dương nhỏ nhất trong mảng trước, sau đó dùng vòng lập for lần nữa để so sánh 
 * output: tìm ra số nguyên dương nhỏ nhất trong mảng
 */


var timRa = function() {
    var minSoDuong;
    for(var i = 0; i < arrayLength; i++) {
        if(mangSoNguyen[i] > 0) {
            minSoDuong = mangSoNguyen[i];
            break;
        }
    };

    for(var j = 0; j < arrayLength; j++) {
        if(mangSoNguyen[j] > 0 && mangSoNguyen[j] < minSoDuong) {
            minSoDuong = mangSoNguyen[j];
        }
    } alert('Số nguyên dương nhỏ nhất là ' + minSoDuong)
}





//5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
/**
 * phân tích:
 * input: nhập vào số nguyên ngẫu nhiên
 * handle: khai báo biến so chan, dùng vòng lập for 
 * output: tìm ra vị trí số chẵn cuối cùng
 */
var tinhRa = function() {
    var soChan;
    for(var i = 0; i < arrayLength; i++) {
        if(mangSoNguyen[i] % 2 == 0) {
            soChan = mangSoNguyen.lastIndexOf(mangSoNguyen[i]);
        } 
    } alert('Số chẳn cuối cùng trong ở vị tri thứ: ' + soChan);
}




//7. Sắp xếp mảng theo thứ tự tăng dần.
var sapXep = function() {
    for(var i = 0; i < arrayLength; i++) {
        var xepTangDan = mangSoNguyen.sort(function(a, b) {
            return a - b;
        });
    }
    alert(xepTangDan);
}




//8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1
kiemTraSoNguyenTo = function(number) {
    var kiemTra = true;
    if(number < 2) {
        kiemTra = false;
    }
    for(var i = 2; i <= Math.sqrt(number); i++) {
        if(number % i == 0) {
            kiemTra = false;
            break;
        }
    }
    
    return kiemTra;
}
var ketQua = function() {
   
    var soNguyenTo;
    for(var i = 0; i < arrayLength; i++) {
        if (kiemTraSoNguyenTo(mangSoNguyen[i]) == true) {
            soNguyenTo = mangSoNguyen[i];
            break;
        }
    }
    if(soNguyenTo == undefined) {
        alert('-1')
    }else{
        alert('số nguyên tố đầu tiên trong mảng là: ' + soNguyenTo)
    }
    
}



//10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
/**
 * phân tích:
 * input: nhập vào các số nguyên ngẫu nhiên
 * handle: khai báo biến số lượng số dương và số lượng số âm, dùng vòng lập for đếm số lượng của các số dương và âm, đêm tổng số lượng của số dương và số âm so sánh tìm được kết quả
 * output: so sánh được kết quả số dương và số âm
 */
var soSanh = function() {
    var countSoDuong = 0;
    var countSoAm = 0;
    for(var i = 0; i < arrayLength; i++) {
        if(mangSoNguyen[i] > 0) {
            countSoDuong++;
        } else if(mangSoNguyen[i] < 0) {
            countSoAm++;
        }
    };

    if(countSoDuong > countSoAm) {
        alert('Số lượng số dương nhiều hơn số lượng sô âm');
    }else if(countSoDuong < countSoAm) {
        alert('Số lượng số âm nhiều hơn số lượng số dương')
    } else{
        alert('Số lượng số dương và số lượng số âm bằng nhau')
    }
}