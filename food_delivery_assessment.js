use food_delivery_assessment
db.restaurants.insertMany([
  {
    restaurant_id: 101,
    restaurant_name: "Spice Kitchen",
    city: "Hyderabad",
    cuisine: ["Indian", "Biryani"],
    rating: 4.5,
    active: true,
    contact: {
      phone: "9876543210",
      email: "spice@email.com"
    }
  },
  {
    restaurant_id: 102,
    restaurant_name: "Urban Pizza",
    city: "Mumbai",
    cuisine: ["Italian", "Fast Food"],
    rating: 4.2,
    active: true,
    contact: {
      phone: "9988776655",
      email: "pizza@email.com"
    }
  },
  {
    restaurant_id: 103,
    restaurant_name: "Green Bowl",
    city: "Bangalore",
    cuisine: ["Healthy", "Vegetarian"],
    rating: 4.7,
    active: true,
    contact: {
      phone: "9123456780",
      email: "green@email.com"
    }
  },
  {
    restaurant_id: 104,
    restaurant_name: "Burger Point",
    city: "Hyderabad",
    cuisine: ["Fast Food", "Burgers"],
    rating: 3.9,
    active: false,
    contact: {
      phone: "9000011111",
      email: "burger@email.com"
    }
  },
  {
    restaurant_id: 105,
    restaurant_name: "Asian Wok",
    city: "Delhi",
    cuisine: ["Chinese", "Thai"],
    rating: 4.4,
    active: true,
    contact: {
      phone: "9222233333",
      email: "wok@email.com"
    }
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6acf4586d5ab16c0b6864578'),
    '1': ObjectId('6acf4586d5ab16c0b6864579'),
    '2': ObjectId('6acf4586d5ab16c0b686457a'),
    '3': ObjectId('6acf4586d5ab16c0b686457b'),
    '4': ObjectId('6acf4586d5ab16c0b686457c')
  }
}
db.orders.insertMany([
  {
    order_id: 5001,
    restaurant_id: 101,
    customer_name: "Adil",
    order_date: ISODate("2026-09-01"),
    status: "Delivered",
    items: [
      { name: "Chicken Biryani", quantity: 2, price: 320 },
      { name: "Coke", quantity: 2, price: 60 }
    ],
    delivery: {
      city: "Hyderabad",
      fee: 40
    }
  },
  {
    order_id: 5002,
    restaurant_id: 102,
    customer_name: "Megha",
    order_date: ISODate("2026-09-02"),
    status: "Processing",
    items: [
      { name: "Farmhouse Pizza", quantity: 1, price: 550 }
    ],
    delivery: {
      city: "Mumbai",
      fee: 60
    }
  },
  {
    order_id: 5003,
    restaurant_id: 103,
    customer_name: "Kabir",
    order_date: ISODate("2026-09-03"),
    status: "Delivered",
    items: [
      { name: "Protein Bowl", quantity: 2, price: 400 },
      { name: "Juice", quantity: 1, price: 150 }
    ],
    delivery: {
      city: "Bangalore",
      fee: 50
    }
  },
  {
    order_id: 5004,
    restaurant_id: 101,
    customer_name: "Nisha",
    order_date: ISODate("2026-09-04"),
    status: "Cancelled",
    items: [
      { name: "Veg Biryani", quantity: 1, price: 250 }
    ],
    delivery: {
      city: "Hyderabad",
      fee: 40
    }
  },
  {
    order_id: 5005,
    restaurant_id: 105,
    customer_name: "Rohan",
    order_date: ISODate("2026-09-05"),
    status: "Delivered",
    items: [
      { name: "Thai Curry", quantity: 1, price: 480 },
      { name: "Noodles", quantity: 2, price: 300 }
    ],
    delivery: {
      city: "Delhi",
      fee: 70
    }
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6acf4590d5ab16c0b686457d'),
    '1': ObjectId('6acf4590d5ab16c0b686457e'),
    '2': ObjectId('6acf4590d5ab16c0b686457f'),
    '3': ObjectId('6acf4590d5ab16c0b6864580'),
    '4': ObjectId('6acf4590d5ab16c0b6864581')
  }
}
db.restaurants.find()
{
  _id: ObjectId('6acf4586d5ab16c0b6864578'),
  restaurant_id: 101,
  restaurant_name: 'Spice Kitchen',
  city: 'Hyderabad',
  cuisine: [
    'Indian',
    'Biryani'
  ],
  rating: 4.5,
  active: true,
  contact: {
    phone: '9876543210',
    email: 'spice@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b6864579'),
  restaurant_id: 102,
  restaurant_name: 'Urban Pizza',
  city: 'Mumbai',
  cuisine: [
    'Italian',
    'Fast Food'
  ],
  rating: 4.2,
  active: true,
  contact: {
    phone: '9988776655',
    email: 'pizza@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457a'),
  restaurant_id: 103,
  restaurant_name: 'Green Bowl',
  city: 'Bangalore',
  cuisine: [
    'Healthy',
    'Vegetarian'
  ],
  rating: 4.7,
  active: true,
  contact: {
    phone: '9123456780',
    email: 'green@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457b'),
  restaurant_id: 104,
  restaurant_name: 'Burger Point',
  city: 'Hyderabad',
  cuisine: [
    'Fast Food',
    'Burgers'
  ],
  rating: 3.9,
  active: false,
  contact: {
    phone: '9000011111',
    email: 'burger@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457c'),
  restaurant_id: 105,
  restaurant_name: 'Asian Wok',
  city: 'Delhi',
  cuisine: [
    'Chinese',
    'Thai'
  ],
  rating: 4.4,
  active: true,
  contact: {
    phone: '9222233333',
    email: 'wok@email.com'
  }
}
db.restaurants.find({ city: "Hyderabad" })
{
  _id: ObjectId('6acf4586d5ab16c0b6864578'),
  restaurant_id: 101,
  restaurant_name: 'Spice Kitchen',
  city: 'Hyderabad',
  cuisine: [
    'Indian',
    'Biryani'
  ],
  rating: 4.5,
  active: true,
  contact: {
    phone: '9876543210',
    email: 'spice@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457b'),
  restaurant_id: 104,
  restaurant_name: 'Burger Point',
  city: 'Hyderabad',
  cuisine: [
    'Fast Food',
    'Burgers'
  ],
  rating: 3.9,
  active: false,
  contact: {
    phone: '9000011111',
    email: 'burger@email.com'
  }
}
db.restaurants.find({
  active: true,
  rating: { $gt: 4.3 }
})
{
  _id: ObjectId('6acf4586d5ab16c0b6864578'),
  restaurant_id: 101,
  restaurant_name: 'Spice Kitchen',
  city: 'Hyderabad',
  cuisine: [
    'Indian',
    'Biryani'
  ],
  rating: 4.5,
  active: true,
  contact: {
    phone: '9876543210',
    email: 'spice@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457a'),
  restaurant_id: 103,
  restaurant_name: 'Green Bowl',
  city: 'Bangalore',
  cuisine: [
    'Healthy',
    'Vegetarian'
  ],
  rating: 4.7,
  active: true,
  contact: {
    phone: '9123456780',
    email: 'green@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457c'),
  restaurant_id: 105,
  restaurant_name: 'Asian Wok',
  city: 'Delhi',
  cuisine: [
    'Chinese',
    'Thai'
  ],
  rating: 4.4,
  active: true,
  contact: {
    phone: '9222233333',
    email: 'wok@email.com'
  }
}
db.restaurants.insertOne({
  restaurant_id: 106,
  restaurant_name: "Royal Meals",
  city: "Chennai",
  cuisine: ["Indian", "South Indian"],
  rating: 4.6,
  active: true,
  contact: {
    phone: "9876501234",
    email: "royal@email.com"
  }
})
{
  acknowledged: true,
  insertedId: ObjectId('6acf45bed5ab16c0b6864582')
}
db.restaurants.updateOne(
  { restaurant_id: 104 },
  { $set: { rating: 4.1 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.restaurants.updateOne(
  { restaurant_id: 104 },
  { $set: { active: true } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.restaurants.deleteOne({ restaurant_id: 106 })
{
  acknowledged: true,
  deletedCount: 1
}
db.restaurants.find({ cuisine: "Fast Food" })
{
  _id: ObjectId('6acf4586d5ab16c0b6864579'),
  restaurant_id: 102,
  restaurant_name: 'Urban Pizza',
  city: 'Mumbai',
  cuisine: [
    'Italian',
    'Fast Food'
  ],
  rating: 4.2,
  active: true,
  contact: {
    phone: '9988776655',
    email: 'pizza@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457b'),
  restaurant_id: 104,
  restaurant_name: 'Burger Point',
  city: 'Hyderabad',
  cuisine: [
    'Fast Food',
    'Burgers'
  ],
  rating: 4.1,
  active: true,
  contact: {
    phone: '9000011111',
    email: 'burger@email.com'
  }
}
db.restaurants.find({
  cuisine: { $all: ["Italian", "Fast Food"] }
})
{
  _id: ObjectId('6acf4586d5ab16c0b6864579'),
  restaurant_id: 102,
  restaurant_name: 'Urban Pizza',
  city: 'Mumbai',
  cuisine: [
    'Italian',
    'Fast Food'
  ],
  rating: 4.2,
  active: true,
  contact: {
    phone: '9988776655',
    email: 'pizza@email.com'
  }
}
db.restaurants.updateOne(
  { restaurant_id: 102 },
  { $addToSet: { cuisine: "Desserts" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.restaurants.updateOne(
  { restaurant_id: 103 },
  { $set: { "contact.email": "greenbowl@email.com" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.restaurants.find({
  "contact.phone": /^9/
})
{
  _id: ObjectId('6acf4586d5ab16c0b6864578'),
  restaurant_id: 101,
  restaurant_name: 'Spice Kitchen',
  city: 'Hyderabad',
  cuisine: [
    'Indian',
    'Biryani'
  ],
  rating: 4.5,
  active: true,
  contact: {
    phone: '9876543210',
    email: 'spice@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b6864579'),
  restaurant_id: 102,
  restaurant_name: 'Urban Pizza',
  city: 'Mumbai',
  cuisine: [
    'Italian',
    'Fast Food',
    'Desserts'
  ],
  rating: 4.2,
  active: true,
  contact: {
    phone: '9988776655',
    email: 'pizza@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457a'),
  restaurant_id: 103,
  restaurant_name: 'Green Bowl',
  city: 'Bangalore',
  cuisine: [
    'Healthy',
    'Vegetarian'
  ],
  rating: 4.7,
  active: true,
  contact: {
    phone: '9123456780',
    email: 'greenbowl@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457b'),
  restaurant_id: 104,
  restaurant_name: 'Burger Point',
  city: 'Hyderabad',
  cuisine: [
    'Fast Food',
    'Burgers'
  ],
  rating: 4.1,
  active: true,
  contact: {
    phone: '9000011111',
    email: 'burger@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457c'),
  restaurant_id: 105,
  restaurant_name: 'Asian Wok',
  city: 'Delhi',
  cuisine: [
    'Chinese',
    'Thai'
  ],
  rating: 4.4,
  active: true,
  contact: {
    phone: '9222233333',
    email: 'wok@email.com'
  }
}
db.orders.find({ status: "Delivered" })
{
  _id: ObjectId('6acf4590d5ab16c0b686457d'),
  order_id: 5001,
  restaurant_id: 101,
  customer_name: 'Adil',
  order_date: ISODate('2026-09-01T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      name: 'Chicken Biryani',
      quantity: 2,
      price: 320
    },
    {
      name: 'Coke',
      quantity: 2,
      price: 60
    }
  ],
  delivery: {
    city: 'Hyderabad',
    fee: 40
  }
}
{
  _id: ObjectId('6acf4590d5ab16c0b686457f'),
  order_id: 5003,
  restaurant_id: 103,
  customer_name: 'Kabir',
  order_date: ISODate('2026-09-03T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      name: 'Protein Bowl',
      quantity: 2,
      price: 400
    },
    {
      name: 'Juice',
      quantity: 1,
      price: 150
    }
  ],
  delivery: {
    city: 'Bangalore',
    fee: 50
  }
}
{
  _id: ObjectId('6acf4590d5ab16c0b6864581'),
  order_id: 5005,
  restaurant_id: 105,
  customer_name: 'Rohan',
  order_date: ISODate('2026-09-05T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      name: 'Thai Curry',
      quantity: 1,
      price: 480
    },
    {
      name: 'Noodles',
      quantity: 2,
      price: 300
    }
  ],
  delivery: {
    city: 'Delhi',
    fee: 70
  }
}
db.orders.find({
  order_date: { $gt: ISODate("2026-09-02") }
})
{
  _id: ObjectId('6acf4590d5ab16c0b686457f'),
  order_id: 5003,
  restaurant_id: 103,
  customer_name: 'Kabir',
  order_date: ISODate('2026-09-03T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      name: 'Protein Bowl',
      quantity: 2,
      price: 400
    },
    {
      name: 'Juice',
      quantity: 1,
      price: 150
    }
  ],
  delivery: {
    city: 'Bangalore',
    fee: 50
  }
}
{
  _id: ObjectId('6acf4590d5ab16c0b6864580'),
  order_id: 5004,
  restaurant_id: 101,
  customer_name: 'Nisha',
  order_date: ISODate('2026-09-04T00:00:00.000Z'),
  status: 'Cancelled',
  items: [
    {
      name: 'Veg Biryani',
      quantity: 1,
      price: 250
    }
  ],
  delivery: {
    city: 'Hyderabad',
    fee: 40
  }
}
{
  _id: ObjectId('6acf4590d5ab16c0b6864581'),
  order_id: 5005,
  restaurant_id: 105,
  customer_name: 'Rohan',
  order_date: ISODate('2026-09-05T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      name: 'Thai Curry',
      quantity: 1,
      price: 480
    },
    {
      name: 'Noodles',
      quantity: 2,
      price: 300
    }
  ],
  delivery: {
    city: 'Delhi',
    fee: 70
  }
}
db.orders.find({
  "delivery.city": "Hyderabad"
})
{
  _id: ObjectId('6acf4590d5ab16c0b686457d'),
  order_id: 5001,
  restaurant_id: 101,
  customer_name: 'Adil',
  order_date: ISODate('2026-09-01T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      name: 'Chicken Biryani',
      quantity: 2,
      price: 320
    },
    {
      name: 'Coke',
      quantity: 2,
      price: 60
    }
  ],
  delivery: {
    city: 'Hyderabad',
    fee: 40
  }
}
{
  _id: ObjectId('6acf4590d5ab16c0b6864580'),
  order_id: 5004,
  restaurant_id: 101,
  customer_name: 'Nisha',
  order_date: ISODate('2026-09-04T00:00:00.000Z'),
  status: 'Cancelled',
  items: [
    {
      name: 'Veg Biryani',
      quantity: 1,
      price: 250
    }
  ],
  delivery: {
    city: 'Hyderabad',
    fee: 40
  }
}
db.orders.find({
  "items.name": "Noodles"
})
{
  _id: ObjectId('6acf4590d5ab16c0b6864581'),
  order_id: 5005,
  restaurant_id: 105,
  customer_name: 'Rohan',
  order_date: ISODate('2026-09-05T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      name: 'Thai Curry',
      quantity: 1,
      price: 480
    },
    {
      name: 'Noodles',
      quantity: 2,
      price: 300
    }
  ],
  delivery: {
    city: 'Delhi',
    fee: 70
  }
}
db.orders.find({
  items: {
    $elemMatch: {
      quantity: { $gt: 1 }
    }
  }
})
{
  _id: ObjectId('6acf4590d5ab16c0b686457d'),
  order_id: 5001,
  restaurant_id: 101,
  customer_name: 'Adil',
  order_date: ISODate('2026-09-01T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      name: 'Chicken Biryani',
      quantity: 2,
      price: 320
    },
    {
      name: 'Coke',
      quantity: 2,
      price: 60
    }
  ],
  delivery: {
    city: 'Hyderabad',
    fee: 40
  }
}
{
  _id: ObjectId('6acf4590d5ab16c0b686457f'),
  order_id: 5003,
  restaurant_id: 103,
  customer_name: 'Kabir',
  order_date: ISODate('2026-09-03T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      name: 'Protein Bowl',
      quantity: 2,
      price: 400
    },
    {
      name: 'Juice',
      quantity: 1,
      price: 150
    }
  ],
  delivery: {
    city: 'Bangalore',
    fee: 50
  }
}
{
  _id: ObjectId('6acf4590d5ab16c0b6864581'),
  order_id: 5005,
  restaurant_id: 105,
  customer_name: 'Rohan',
  order_date: ISODate('2026-09-05T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      name: 'Thai Curry',
      quantity: 1,
      price: 480
    },
    {
      name: 'Noodles',
      quantity: 2,
      price: 300
    }
  ],
  delivery: {
    city: 'Delhi',
    fee: 70
  }
}
db.orders.find({
  items: {
    $elemMatch: {
      name: "Chicken Biryani",
      quantity: 2
    }
  }
})
{
  _id: ObjectId('6acf4590d5ab16c0b686457d'),
  order_id: 5001,
  restaurant_id: 101,
  customer_name: 'Adil',
  order_date: ISODate('2026-09-01T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      name: 'Chicken Biryani',
      quantity: 2,
      price: 320
    },
    {
      name: 'Coke',
      quantity: 2,
      price: 60
    }
  ],
  delivery: {
    city: 'Hyderabad',
    fee: 40
  }
}
db.orders.updateOne(
  { order_id: 5002 },
  {
    $push: {
      items: {
        name: "Garlic Bread",
        quantity: 1,
        price: 150
      }
    }
  }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.orders.updateOne(
  { order_id: 5002 },
  { $set: { status: "Delivered" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.restaurants.find(
  {},
  {
    _id: 0,
    restaurant_name: 1,
    city: 1,
    rating: 1
  }
)
{
  restaurant_name: 'Spice Kitchen',
  city: 'Hyderabad',
  rating: 4.5
}
{
  restaurant_name: 'Urban Pizza',
  city: 'Mumbai',
  rating: 4.2
}
{
  restaurant_name: 'Green Bowl',
  city: 'Bangalore',
  rating: 4.7
}
{
  restaurant_name: 'Burger Point',
  city: 'Hyderabad',
  rating: 4.1
}
{
  restaurant_name: 'Asian Wok',
  city: 'Delhi',
  rating: 4.4
}
db.restaurants.find().sort({ rating: -1 })
{
  _id: ObjectId('6acf4586d5ab16c0b686457a'),
  restaurant_id: 103,
  restaurant_name: 'Green Bowl',
  city: 'Bangalore',
  cuisine: [
    'Healthy',
    'Vegetarian'
  ],
  rating: 4.7,
  active: true,
  contact: {
    phone: '9123456780',
    email: 'greenbowl@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b6864578'),
  restaurant_id: 101,
  restaurant_name: 'Spice Kitchen',
  city: 'Hyderabad',
  cuisine: [
    'Indian',
    'Biryani'
  ],
  rating: 4.5,
  active: true,
  contact: {
    phone: '9876543210',
    email: 'spice@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457c'),
  restaurant_id: 105,
  restaurant_name: 'Asian Wok',
  city: 'Delhi',
  cuisine: [
    'Chinese',
    'Thai'
  ],
  rating: 4.4,
  active: true,
  contact: {
    phone: '9222233333',
    email: 'wok@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b6864579'),
  restaurant_id: 102,
  restaurant_name: 'Urban Pizza',
  city: 'Mumbai',
  cuisine: [
    'Italian',
    'Fast Food',
    'Desserts'
  ],
  rating: 4.2,
  active: true,
  contact: {
    phone: '9988776655',
    email: 'pizza@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457b'),
  restaurant_id: 104,
  restaurant_name: 'Burger Point',
  city: 'Hyderabad',
  cuisine: [
    'Fast Food',
    'Burgers'
  ],
  rating: 4.1,
  active: true,
  contact: {
    phone: '9000011111',
    email: 'burger@email.com'
  }
}
db.restaurants.find()
  .sort({ rating: -1 })
  .limit(3)
{
  _id: ObjectId('6acf4586d5ab16c0b686457a'),
  restaurant_id: 103,
  restaurant_name: 'Green Bowl',
  city: 'Bangalore',
  cuisine: [
    'Healthy',
    'Vegetarian'
  ],
  rating: 4.7,
  active: true,
  contact: {
    phone: '9123456780',
    email: 'greenbowl@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b6864578'),
  restaurant_id: 101,
  restaurant_name: 'Spice Kitchen',
  city: 'Hyderabad',
  cuisine: [
    'Indian',
    'Biryani'
  ],
  rating: 4.5,
  active: true,
  contact: {
    phone: '9876543210',
    email: 'spice@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457c'),
  restaurant_id: 105,
  restaurant_name: 'Asian Wok',
  city: 'Delhi',
  cuisine: [
    'Chinese',
    'Thai'
  ],
  rating: 4.4,
  active: true,
  contact: {
    phone: '9222233333',
    email: 'wok@email.com'
  }
}
db.restaurants.find({
  rating: { $type: "number" }
})
{
  _id: ObjectId('6acf4586d5ab16c0b6864578'),
  restaurant_id: 101,
  restaurant_name: 'Spice Kitchen',
  city: 'Hyderabad',
  cuisine: [
    'Indian',
    'Biryani'
  ],
  rating: 4.5,
  active: true,
  contact: {
    phone: '9876543210',
    email: 'spice@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b6864579'),
  restaurant_id: 102,
  restaurant_name: 'Urban Pizza',
  city: 'Mumbai',
  cuisine: [
    'Italian',
    'Fast Food',
    'Desserts'
  ],
  rating: 4.2,
  active: true,
  contact: {
    phone: '9988776655',
    email: 'pizza@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457a'),
  restaurant_id: 103,
  restaurant_name: 'Green Bowl',
  city: 'Bangalore',
  cuisine: [
    'Healthy',
    'Vegetarian'
  ],
  rating: 4.7,
  active: true,
  contact: {
    phone: '9123456780',
    email: 'greenbowl@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457b'),
  restaurant_id: 104,
  restaurant_name: 'Burger Point',
  city: 'Hyderabad',
  cuisine: [
    'Fast Food',
    'Burgers'
  ],
  rating: 4.1,
  active: true,
  contact: {
    phone: '9000011111',
    email: 'burger@email.com'
  }
}
{
  _id: ObjectId('6acf4586d5ab16c0b686457c'),
  restaurant_id: 105,
  restaurant_name: 'Asian Wok',
  city: 'Delhi',
  cuisine: [
    'Chinese',
    'Thai'
  ],
  rating: 4.4,
  active: true,
  contact: {
    phone: '9222233333',
    email: 'wok@email.com'
  }
}
db.orders.aggregate([
  {
    $project: {
      order_id: 1,
      order_date_type: { $type: "$order_date" }
    }
  }
])
{
  _id: ObjectId('6acf4590d5ab16c0b686457d'),
  order_id: 5001,
  order_date_type: 'date'
}
{
  _id: ObjectId('6acf4590d5ab16c0b686457e'),
  order_id: 5002,
  order_date_type: 'date'
}
{
  _id: ObjectId('6acf4590d5ab16c0b686457f'),
  order_id: 5003,
  order_date_type: 'date'
}
{
  _id: ObjectId('6acf4590d5ab16c0b6864580'),
  order_id: 5004,
  order_date_type: 'date'
}
{
  _id: ObjectId('6acf4590d5ab16c0b6864581'),
  order_id: 5005,
  order_date_type: 'date'
}
db.orders.aggregate([
  {
    $project: {
      order_id: 1,
      items_type: { $type: "$items" }
    }
  }
])
{
  _id: ObjectId('6acf4590d5ab16c0b686457d'),
  order_id: 5001,
  items_type: 'array'
}
{
  _id: ObjectId('6acf4590d5ab16c0b686457e'),
  order_id: 5002,
  items_type: 'array'
}
{
  _id: ObjectId('6acf4590d5ab16c0b686457f'),
  order_id: 5003,
  items_type: 'array'
}
{
  _id: ObjectId('6acf4590d5ab16c0b6864580'),
  order_id: 5004,
  items_type: 'array'
}
{
  _id: ObjectId('6acf4590d5ab16c0b6864581'),
  order_id: 5005,
  items_type: 'array'
}
db.restaurants.insertOne({
  restaurant_id: 107,
  restaurant_name: "Test Restaurant",
  city: "Chennai",
  cuisine: ["Indian"],
  rating: "4.3",
  active: true,
  contact: {
    phone: "9876509876",
    email: "test@email.com"
  }
})
{
  acknowledged: true,
  insertedId: ObjectId('6acf4668d5ab16c0b6864583')
}
db.restaurants.find({
  rating: { $type: "string" }
})
{
  _id: ObjectId('6acf4668d5ab16c0b6864583'),
  restaurant_id: 107,
  restaurant_name: 'Test Restaurant',
  city: 'Chennai',
  cuisine: [
    'Indian'
  ],
  rating: '4.3',
  active: true,
  contact: {
    phone: '9876509876',
    email: 'test@email.com'
  }
}
db.restaurants.updateOne(
  { restaurant_id: 107 },
  [
    {
      $set: {
        rating: { $toDouble: "$rating" }
      }
    }
  ]
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.restaurants.find({
  restaurant_id: 107,
  rating: { $type: "number" }
})
{
  _id: ObjectId('6acf4668d5ab16c0b6864583'),
  restaurant_id: 107,
  restaurant_name: 'Test Restaurant',
  city: 'Chennai',
  cuisine: [
    'Indian'
  ],
  rating: 4.3,
  active: true,
  contact: {
    phone: '9876509876',
    email: 'test@email.com'
  }
}
db.createCollection("delivery_partners")
{ ok: 1 }
db.delivery_partners.insertMany([
  {
    partner_id: 201,
    partner_name: "Arun Kumar",
    city: "Hyderabad",
    rating: 4.8,
    active: true,
    vehicle: "Bike",
    skills: ["Food Delivery", "Express Delivery"],
    contact: {
      phone: "9876511111",
      email: "arun@email.com"
    }
  },
  {
    partner_id: 202,
    partner_name: "Priya Sharma",
    city: "Mumbai",
    rating: 4.5,
    active: true,
    vehicle: "Scooter",
    skills: ["Food Delivery", "Parcel Delivery"],
    contact: {
      phone: "9876522222",
      email: "priya@email.com"
    }
  },
  {
    partner_id: 203,
    partner_name: "Rahul Das",
    city: "Hyderabad",
    rating: 3.9,
    active: false,
    vehicle: "Bike",
    skills: ["Food Delivery", "Grocery Delivery"],
    contact: {
      phone: "9876533333",
      email: "rahul@email.com"
    }
  },
  {
    partner_id: 204,
    partner_name: "Sneha Reddy",
    city: "Chennai",
    rating: 4.6,
    active: true,
    vehicle: "Electric Bike",
    skills: ["Food Delivery", "Express Delivery"],
    contact: {
      phone: "9876544444",
      email: "sneha@email.com"
    }
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6acf468fd5ab16c0b6864584'),
    '1': ObjectId('6acf468fd5ab16c0b6864585'),
    '2': ObjectId('6acf468fd5ab16c0b6864586'),
    '3': ObjectId('6acf468fd5ab16c0b6864587')
  }
}
db.delivery_partners.find({
  city: "Hyderabad",
  active: true
})
{
  _id: ObjectId('6acf468fd5ab16c0b6864584'),
  partner_id: 201,
  partner_name: 'Arun Kumar',
  city: 'Hyderabad',
  rating: 4.8,
  active: true,
  vehicle: 'Bike',
  skills: [
    'Food Delivery',
    'Express Delivery'
  ],
  contact: {
    phone: '9876511111',
    email: 'arun@email.com'
  }
}
db.delivery_partners.find({
  rating: { $gt: 4 }
})
{
  _id: ObjectId('6acf468fd5ab16c0b6864584'),
  partner_id: 201,
  partner_name: 'Arun Kumar',
  city: 'Hyderabad',
  rating: 4.8,
  active: true,
  vehicle: 'Bike',
  skills: [
    'Food Delivery',
    'Express Delivery'
  ],
  contact: {
    phone: '9876511111',
    email: 'arun@email.com'
  }
}
{
  _id: ObjectId('6acf468fd5ab16c0b6864585'),
  partner_id: 202,
  partner_name: 'Priya Sharma',
  city: 'Mumbai',
  rating: 4.5,
  active: true,
  vehicle: 'Scooter',
  skills: [
    'Food Delivery',
    'Parcel Delivery'
  ],
  contact: {
    phone: '9876522222',
    email: 'priya@email.com'
  }
}
{
  _id: ObjectId('6acf468fd5ab16c0b6864587'),
  partner_id: 204,
  partner_name: 'Sneha Reddy',
  city: 'Chennai',
  rating: 4.6,
  active: true,
  vehicle: 'Electric Bike',
  skills: [
    'Food Delivery',
    'Express Delivery'
  ],
  contact: {
    phone: '9876544444',
    email: 'sneha@email.com'
  }
}
db.delivery_partners.updateOne(
  { partner_id: 201 },
  { $addToSet: { skills: "Late Night Delivery" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.delivery_partners.updateOne(
  { partner_id: 202 },
  { $set: { rating: 4.7 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.delivery_partners.find().sort({ rating: -1 })