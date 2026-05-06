// ===== Bài 1 =====
const student = {
    name: 'hoang',
    parent: {
        name: 'bo hoang'
    }
}

const mentor = { ...student }

mentor.name = 'bang'
mentor.parent.name = 'bo bang'

console.log(student)
console.log(mentor)

// 1. student.name có bị đổi không? Không
// 2. student.parent.name có bị đổi không? Có
// 3. Giải thích vì sao? Vì code dòng 9 đang thực hiện copy nông, chỉ copy 1 lớp, tức là với kiểu nguyên thuỷ thì copy giá trị, còn kiểu object thì chỉ copy địa chỉ trong RAM
// Khi code dòng 9 chạy thì biến mentor sẽ được cấp phát 1 địa chỉ ô nhớ mới trong RAM có:
// - mentor.name: copy giá trị của student.name.Lúc này, khi sửa mentor.name là đang sửa ở ô địa chỉ khác ô địa chỉ của student.name nên student.name không bị đổi.
// - mentor.parent: copy địa chỉ RAM của student.parent. Tức cả mentor.parent và student.parent đều đang cùng trỏ chung về 1 ô địa chỉ của object parent. Nên khi sửa mentor.parent.name là đang sửa ở ô địa chỉ của parent nên student.parent.name cũng sẽ bị đổi.

// ===== Bài 2 =====
const student2 = {
    name: 'hoang',
    parent2: {
        name: 'bo hoang'
    }
}

const mentor2 = JSON.parse(JSON.stringify(student2))

mentor2.parent2.name = 'bo bang'

console.log(student2)
console.log(mentor2)

// 1. student2.parent2.name có bị ảnh hưởng không? Không
// 2. Vì sao cách này khác spread (const mentor = { ...student })? Vì cách này là cách copy sâu khác với spread là copy nông.
// Copy nông thì chỉ copy giá trị kiểu nguyên thuỷ, còn kiểu object thì chỉ copy địa chỉ nên chúng vẫn trỏ chung về ô địa chỉ object, khi sửa thì sẽ ảnh hưởng toàn bộ giống nhau.
// Copy sâu thì tạo mới lại hoàn toàn object trên vùng nhớ mới nên ô địa chỉ tham chiếu của chúng khác nhau hoàn toàn, khi sửa thì không ảnh hưởng gì nhau.
// Khi code dòng 32 được thực thi thì sẽ diễn ra 2 quá trình:
// - Ép kiểu từ object student sang kiểu chuỗi
// - Tạo object mới hoàn toàn từ kiễu chuỗi vừa rồi trên vùng nhớ mới
// Nên khi sửa mentor2.parent2 là đang sửa ở ô địa chỉ mới khác ô địa chỉ của object parent2 trong student2 nên không bị thay đổi.

// ===== Bài 3 =====
const students = [
    { name: 'a' },
    { name: 'b' }
]

const newStudents = [...students]

newStudents[0].name = 'z'

console.log(students)
console.log(newStudents)

// 1.Mảng có bị thay đổi không? Không, vì 2 mảng kháu nhau
// 2.Phần tử bên trong có bị không? Có, vì spread là copy nông, chỉ copy mảng còn object trong nó thì chỉ copy địa chỉ tham chiếu
// nên tuy 2 mảng khác nhau nhưng object trong nó vẫn trỏ chung về cùng địa chỉ vùng nhớ trên RAM
// nên khi sửa sẽ bị đổi hết giống nhau.

// ===== Bài 4 =====
const user = {
    name: 'hoang',
    address: {
        city: 'HN',
        location: {
            lat: 123
        }
    }
}

const newUser = { ...user }

newUser.address.location.lat = 999

console.log(user.address.location.lat)


// Câu hỏi: Kết quả là bao nhiêu? Vì sao? 999 vì spread là copy nông , object trong nó chỉ copy địa chỉ tham chiếu nên vẫn trỏ chung về cùng 1 object trên vùng nhớ RAM
// Khi sửa thì sẽ bị ảnh hưởng giống nhau.