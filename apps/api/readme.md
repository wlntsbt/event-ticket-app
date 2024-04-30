Manually post these data on POSTMAN

POST @ http://localhost:8000/register/user
[
{
"firstName": 'Wulan',
"lastName": 'Tsabita',
"username": 'wlntsbt',
"email": 'wulan@test.com',
"password": 'wulan123',
},
{
firstName: 'Bogi',
lastName: 'Prasetyandi',
username: 'bogx',
email: 'bogi@test.com',
password: 'bogi123',
},
{
firstName: 'Kareem',
lastName: 'Akbar',
username: 'kareem1',
email: 'kareem@test.com',
password: 'kareem123',
},
{
firstName: 'Barent',
lastName: 'Limita',
username: 'barentnolimit',
email: 'barent@test.com',
password: 'barent123',
},
{
firstName: 'Delia',
lastName: 'Menorah',
username: 'deliaaa',
email: 'delia@test.com',
password: 'delia123',
},
];

POST @ http://localhost:8000/register/promoter
const promotorData = [
{
name: 'Plainsong Live',
username: 'plainsonglive',
email: 'plainsonglive@test.com',
password: 'plainsong',
},
{
name: 'KRAPELLA',
username: 'krapellalive',
email: 'krapellalive@test.com',
password: 'krapella',
},
{
name: 'ISMAYA Live',
username: 'ismaya',
email: 'ismaya@test.com',
password: 'ismaya',
},
];

POST @ http://localhost:8000/promoter/event/new
{
"name": "Joyland 2024",
"startDate": "2024-12-20",
"endDate": "2024-12-22",
"startTime": "15:30",
"endTime": "23:59",
"category": "Entertainment",
"location": "BALI",
"namePIC": "Sakamoto",
"phonePIC": "+62896777888",
"emailPIC": "sakamoto@test.com",
"description": "super chill family friendly festival"
"imageLink": "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20240213090546.jpg"
}

POST @ http://localhost:8000/promoter/event/ticket
[{
"ticketName": "Early Entry - 3 Days",
"ticketAmount": 15,
"ticketPrice": 250000,
"ticketDescription": "Ticket for entry before 16:00. You can not come in after 16:00.",
"salesStart": "2024-06-26",
"salesEnd": "2024-06-30"
},
{
"ticketName": "General Admission - 3 Days",
"ticketAmount": 15,
"ticketPrice": 450000,
"ticketDescription": "Ticket for general admission. No arrival time rules.",
"salesStart": "2024-06-26",
"salesEnd": "2024-06-30"
}]
