// Bài 1: Viết một hàm isEvenNumber(number) nhận vào một số number.
// Nếu số đó chia hết cho 2 (dùng phép chia lấy dư %), trả về true
// Nếu không, trả về false
function isEvenNumber(number) {
    return number % 2 === 0
}
console.log(isEvenNumber(10)); // expect: true
console.log(isEvenNumber(7));  // expect: false


// Bài 2: Tính tiền điện bậc thang
function getElectricityBill(kwh) {
    if (kwh <= 50) {
        return kwh * 1678
    } else if (kwh <= 100) {
        return 50 * 1678 + (kwh - 50) * 1734
    } else if (kwh <= 200) {
        return 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014
    } else if (kwh <= 300) {
        return 50 * 1678 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536
    } else if (kwh <= 400) {
        return 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kwh - 300) * 2834
    } else {
        return 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (kwh - 400) * 2927
    }
}
console.log(getElectricityBill(70))// expect: (50 * 1678) + (20 * 1734) = 118580
console.log(getElectricityBill(120))// expect: (50 * 1678) + (50 * 1734) + (20 * 2014) = 210880

// Bài 3: Dọn dẹp dữ liệu tên người dùng (String)
// Sử dụng các hàm toLowerCase(), trim(), includes() mà bạn đã học.
// Yêu cầu: Viết hàm cleanName(name, keyword) làm hai việc:
// Dọn dẹp biến name: Xóa khoảng trắng thừa ở hai đầu và chuyển tất cả thành chữ thường.
// Kiểm tra xem tên vừa dọn dẹp có chứa từ khóa keyword (cũng được chuyển về chữ thường) hay không.
// Hàm trả về true nếu có chứa, và false nếu không.
function cleanName(name, keyword) {
    cleanedName = name.trim().toLowerCase()
    cleanedKeyword = keyword.trim().toLowerCase()
    return cleanedName.includes(cleanedKeyword)
}
console.log(cleanName('   NGUYEN Van An   ', 'an')); // expect: true (because 'nguyen van an' includes 'an')
console.log(cleanName('   Tran Thi B ', 'hoang'));   // expect:false
console.log(cleanName('   NGUYEN Van An   ', 'AN')); // expect: true
