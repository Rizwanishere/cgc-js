// ---PHONEBOOK--- //
var p1 = {
    firstName: 'Rizwan',
    lastName: 'ali',
    mobile: [
        { number: '+91-2827583272', type: 'Personal', primary: true },
        { number: '+91-2892347583', type: 'Home', primary: false },
        { number: '+91-2637852497', type: 'Office', primary: false },
    ],
    email: ['abc@gmail.com', 'abc@work.com'],
    address: {
        hNo: '1-123',
        city: 'Hyderabad',
        country: 'IN',
        state: 'TS',
        zip: '503199',
    }
};
var p2 = {
    firstName: 'Sohaib',
    lastName: 'Samad',
    mobile: [
        { number: '+91-9902424329', type: 'Personal', primary: true },
        { number: '+91-4748283832', type: 'Home', primary: false },
        { number: '+91-2429842832', type: 'Office', primary: false },
    ],
    email: ['abc@gmail.com', 'abc@work.com'],
    address: {
        hNo: '1-123',
        city: 'Hyderabad',
        country: 'IN',
        state: 'TS',
        zip: '503199',
    }
};

var phoneBook = [p1,p2];

function search(str) {
    var res = [];
    for (var i = 0; i < phoneBook.length; i++) {
        var obj = phoneBook[i];
        if (obj.firstName.indexOf(str) > -1 || obj.lastName.indexOf(str) > -1) {
            res.push(obj);
        }
    }
    return res;
}
console.log(search("Riz"));