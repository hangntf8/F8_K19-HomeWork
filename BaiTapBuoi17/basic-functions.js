// Bài 1: Viết một hàm isEvenNumber(number) nhận vào một số number.
// Nếu số đó chia hết cho 2 (dùng phép chia lấy dư %), trả về true
// Nếu không, trả về false
function isEvenNumber(number) {
    return number % 2 === 0
}
console.log(isEvenNumber(10)); // Kết quả mong đợi: true
console.log(isEvenNumber(7));  // Kết quả mong đợi: false


// Bài 2: Tính tiền điện bậc thang
function getElectricityBill(kwh) {
    if (kwh <= 50) {
        return kwh * 1.678
    } else if (kwh <= 100) {
        return 50 * 1.678 + (kwh - 50) * 1.734
    } else if (kwh <= 200) {
        return 50 * 1.678 + 50 * 1.734 + (kwh - 100) * 2.014
    } else if (kwh <= 300) {
        return 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + (kwh - 200) * 2.536
    } else if (kwh <= 400) {
        return 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + (kwh - 300) * 2.834
    } else {
        return 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + 100 * 2.834 + (kwh - 400) * 2.927
    }
}
console.log(getElectricityBill(70))// Mong đợi: (50 * 1678) + (20 * 1734) = 118580
console.log(getElectricityBill(120))// Mong đợi: (50 * 1678) + (50 * 1734) + (20 * 2014) = 210880

// Bài 3: Dọn dẹp dữ liệu tên người dùng (String)
// Sử dụng các hàm toLowerCase(), trim(), includes() mà bạn đã học.
// Yêu cầu: Viết hàm cleanName(name, keyword) làm hai việc:
// Dọn dẹp biến name: Xóa khoảng trắng thừa ở hai đầu và chuyển tất cả thành chữ thường.
// Kiểm tra xem tên vừa dọn dẹp có chứa từ khóa keyword (cũng được chuyển về chữ thường) hay không.
// Hàm trả về true nếu có chứa, và false nếu không.
function cleanName(name, keyword) {
    name = name.trim().toLowerCase()
    keyword = keyword.trim().toLowerCase()
    return name.includes(keyword)
}
console.log(cleanName('   NGUYEN Van An   ', 'an')); // Mong đợi: true (vì 'nguyen van an' có chứa 'an')
console.log(cleanName('   Tran Thi B ', 'hoang'));   // Mong đợi: false
console.log(cleanName('   NGUYEN Van An   ', 'AN')); // Mong đợi: true (vì 'nguyen van an' có chứa 'an')
