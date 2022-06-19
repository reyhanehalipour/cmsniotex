let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },
]
const NewMembers =[
    { id:1 , username: 'mohammadamin', title: 'hacker', img: 'image/amir.jpg'},
    { id:2 , username: 'reyhane alipour', title: 'web developer', img: 'image/reyhane.jpg'},
    { id:3 , username: 'zahra', title: 'weblog', img: 'image/zahra.jpg'},
    { id:4 , username: 'tara', title: 'seo eng', img: 'image/tara.jpg'},
]

const transactions = [
    {
        id: 1,
        customer:'Peyman Asadi',
        date: '12 Jun 2022',
        amount: 123,
        status: 'Approved',
        img: 'image/peyman.jpg',
        
    },
    {
        id: 2,
        customer: 'Amin Saeedi',
        date: '23 Jul 2022',
        amount: 123,
        status: 'Declined',
        img: 'image/amin.jpg',
     
    },
    {
        id: 3,
        customer: 'Mohammad karimi',
        date: '28 May 2022',
        amount: 123,
        status: 'Pending',
        img: 'image/mohamad.jpg',
       
    },
    {
        id: 4,
        customer: 'Sasan Moqadam',
        date: '1 Feb 2022',
        amount: 123,
        status: 'Approved',
        img: 'image/sasan.jpg',
      
    },
]

let rows = [
    {
        id: 1,
        username: 'Ahmad panahi',
        avatar: 'image/ahmad.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'ahmadpanahi@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: 'image/amin.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'aminsaeedi@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan Moqadam',
        avatar: 'image/sasan.jpg',
        status: 'active',
        transaction: '$98',
        email: 'sasanmoghadam@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Aghai',
        avatar: 'image/zahra.jpg',
        status: 'active',
        transaction: '$0',
        email: 'zahraaghaii@gmail.com'
    },
    {
        id: 5,
        username: 'Hamze mohammadi',
        avatar: 'image/hamze.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'hamzemohammadi@gmail.com'
    }
]

let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'image/asus.jpeg',
        price: 890
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'image/acer.jpg',
        price: 890
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'image/hp.jpg',
        price: 890
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'image/hp.jpg',
        price: 890
    },

    {
        id: 5,
        title: 'lenovo',
        avatar: 'image/lenovo.jpg',
        price: 890
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]
export {xAxisData , NewMembers , transactions , rows, products, productsData}



