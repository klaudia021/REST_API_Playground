const getMenu = (req, res, next) => {
    res.status(200).json({
        menu:
        [
            { foodName: 'Tomato Basil Soup', type: 'Soup', price: 6.99 },
            { foodName: 'Grilled Salmon', type: 'Main Courses', price: 18.99 },
            { foodName: 'Mozzarella Sticks', type: 'Appetizer', price: 4.22 }
        ]
    });
};

const addMenuItem = (req, res, next) => {
    const foodName = req.body.foodName;
    const type = req.body.type;
    const price = req.body.price;

    res.status(201).json({
        message: 'Menu item created successfully!',
        menuItem: {
            foodName: foodName,
            type: type,
            price: price
        }
    });
}

module.exports.addMenuItem = addMenuItem;
module.exports.getMenu = getMenu;
