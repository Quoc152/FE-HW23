// GET all data
document.getElementById('getButton').addEventListener('click', () => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            console.log('GET Success: ', data)
        })
        .catch(error => {
            console.log('GET Error: ', error)
        });
});

// Get a single product
document.getElementById('get-a-pr').addEventListener('click', () => {
    fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(data => {
            console.log('GET Success: ', data)
        })
        .catch(error => {
            console.log('GET Error: ', error)
        });
});

// Search products
document.getElementById('searchbutton').addEventListener('click', () => {
    fetch('https://dummyjson.com/products/search?q=phone')
        .then(res => res.json())
        .then(data => {
            console.log('SEARCH Success: ', data)
        })
        .catch(error => {
            console.log('SEARCH Error: ', error)
        });
});

// Limit and skip products
document.getElementById('limitbutton').addEventListener('click', () => {
    fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
        .then(res => res.json())
        .then(data => {
            console.log('LIMIT & SKIP Success: ', data)
        })
        .catch(error => {
            console.log('LIMIT & SKIP Error: ', error)
        });
});

// Get all products categories
document.getElementById('get-all-cag').addEventListener('click', () => {
    fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(data => {
            console.log('GET Success: ', data)
        })
        .catch(error => {
            console.log('GET Error: ', error)
        });
});

// Get products by a category
document.getElementById('get-a-cag').addEventListener('click', () => {
    fetch('https://dummyjson.com/products/category/smartphones')
        .then(res => res.json())
        .then(data => {
            console.log('GET Success: ', data)
        })
        .catch(error => {
            console.log('GET Error: ', error)
        });
});

// POST a data
document.getElementById('postButton').addEventListener('click', () => {
    fetch('https://dummyjson.com/products/add', {
        method: 'POST', // Phương thức HTTP là POST để tạo mới tài nguyên
        headers: { 'Content-Type': 'application/json' }, // Đặt kiểu dữ liệu của nội dung là JSON
        body: JSON.stringify({ // Chuyển đổi đối tượng JavaScript thành chuỗi JSON
            title: 'BMW Pencil',
            brand: "Essence",
            category: "beauty",
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log('POST Success: ', data)
        })
        .catch(error => {
            console.log('POST Error: ', error)
        });
});

// PUT a data
document.getElementById('putButton').addEventListener('click', () => {
    fetch('https://dummyjson.com/products/1', {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'iPhone 16 Pro Max Ultra Vip'
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log('PUT Success: ', data)
        })
        .catch(error => {
            console.log('PUT Error: ', error)
        });
});

// DELETE a data
document.getElementById('deleteButton').addEventListener('click', () => {
    fetch('https://dummyjson.com/products/1', {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => {
            console.log('DELETE Success: ', data)
        })
        .catch(error => {
            console.log('DELETE Error: ', error)
        });
});