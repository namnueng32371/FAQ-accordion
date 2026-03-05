const textFAQs = document.querySelector('.sub_hide');
const Id_textFAQs = document.querySelectorAll('.sub_hide');
const iconFAQs = document.querySelectorAll('.iconFaqs');

// console.log(Id_textFAQs);

// console.log(typeof textFAQs.className);
// console.log(textFAQs.classList)

//📕 learning
// classList.contains('sub_hide') เช็คหาคำว่า sub_hide เป็น array เป็นคำๆ
// className.includes('sub_hide') เช็คใน class ว่าที คำว่า sub_hide มั้ย เช็ค string
//dsd

// ✅ ใช้ได้จริง
function ShowAccroding(button) {
    Id_textFAQs[button.id].classList.toggle('sub_hide');
    if (iconFAQs[button.id].id == '0') {
        iconFAQs[button.id].id = '1';
        iconFAQs[button.id].src = '/assets/images/icon-minus.svg';
    }
    else {
        iconFAQs[button.id].id = '0';
        iconFAQs[button.id].src = '/assets/images/icon-plus.svg';
    }
}

// ✅ ใช้ได้จริง
// function ShowAccroding(button) {
//     const content = button.nextElementSibling;
//     console.log(content); // content จะเป็น tag p
//     content.classList.toggle('sub_hide');
//     if (iconFAQs[button.id].src.includes('plus')) {
//         iconFAQs[button.id].src = '/assets/images/icon-minus.svg';
//     } else {
//         iconFAQs[button.id].src = '/assets/images/icon-plus.svg';
//     }

// ✅ ใช้ได้จริง
// function ShowAccroding(button) {
//     // dataset ย่อมากจาก getAttribute("data-index")
//     const element = button.dataset.index;
//     console.log(element); // element = 0;
//     Id_textFAQs[element].classList.toggle('sub_hide');

//     if (iconFAQs[element].src.includes('plus')) {
//         iconFAQs[element].src = '/assets/images/icon-minus.svg';
//     } else {
//         iconFAQs[element].src = '/assets/images/icon-plus.svg';
//     }
// }