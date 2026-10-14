use commerce_assessment
db.createCollection("products")
{ ok: 1 }
db.products.insertMany([
  {
    product_id: 101,
    product_name: "Ultra Laptop",
    category: "Electronics",
    brand: "TechPro",
    price: 72000,
    stock: 12,
    available: true,
    launch_date: ISODate("2026-01-15"),
    colors: ["Black", "Silver"],
    specifications: {
      ram: "16 GB",
      storage: "1 TB SSD",
      warranty_years: 2
    }
  },
  {
    product_id: 102,
    product_name: "Wireless Mouse",
    category: "Accessories",
    brand: "ClickMax",
    price: 1800,
    stock: 40,
    available: true,
    launch_date: ISODate("2026-02-10"),
    colors: ["Black", "Blue", "Red"],
    specifications: {
      wireless: true,
      warranty_years: 1
    }
  },
  {
    product_id: 103,
    product_name: "Office Desk",
    category: "Furniture",
    brand: "WorkSpace",
    price: 14500,
    stock: 8,
    available: true,
    launch_date: ISODate("2025-11-20"),
    colors: ["Brown", "Black"],
    specifications: {
      material: "Wood",
      adjustable: false,
      warranty_years: 3
    }
  },
  {
    product_id: 104,
    product_name: "Smart Monitor",
    category: "Electronics",
    brand: "VisionPlus",
    price: 26000,
    stock: 5,
    available: true,
    launch_date: ISODate("2026-03-01"),
    colors: ["Black"],
    specifications: {
      screen_size: "27 inch",
      resolution: "4K",
      warranty_years: 2
    }
  },
  {
    product_id: 105,
    product_name: "Gaming Chair",
    category: "Furniture",
    brand: "SeatPro",
    price: 18500,
    stock: 0,
    available: false,
    launch_date: ISODate("2026-01-05"),
    colors: ["Black", "Red"],
    specifications: {
      material: "Leather",
      adjustable: true,
      warranty_years: 3
    }
  },
  {
    product_id: 106,
    product_name: "Mechanical Keyboard",
    category: "Accessories",
    brand: "KeyWorks",
    price: 5200,
    stock: 18,
    available: true,
    launch_date: ISODate("2026-04-12"),
    colors: ["Black", "White"],
    specifications: {
      backlit: true,
      wireless: false,
      warranty_years: 1
    }
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6acf125674819f719299ac3a'),
    '1': ObjectId('6acf125674819f719299ac3b'),
    '2': ObjectId('6acf125674819f719299ac3c'),
    '3': ObjectId('6acf125674819f719299ac3d'),
    '4': ObjectId('6acf125674819f719299ac3e'),
    '5': ObjectId('6acf125674819f719299ac3f')
  }
}
db.products.find()
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 1800,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue',
    'Red'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 5,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 0,
  available: false,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_id: 106,
  product_name: 'Mechanical Keyboard',
  category: 'Accessories',
  brand: 'KeyWorks',
  price: 5200,
  stock: 18,
  available: true,
  launch_date: ISODate('2026-04-12T00:00:00.000Z'),
  colors: [
    'Black',
    'White'
  ],
  specifications: {
    backlit: true,
    wireless: false,
    warranty_years: 1
  }
}
db.products.findOne({ product_id: 103 })
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
db.products.insertOne({
  product_id: 107,
  product_name: "Bluetooth Speaker",
  category: "Electronics",
  brand: "SoundMax",
  price: 7500,
  stock: 20,
  available: true
})
{
  acknowledged: true,
  insertedId: ObjectId('6acf127974819f719299ac40')
}
db.products.insertMany([
  {
    product_id: 108,
    product_name: "USB Cable",
    category: "Accessories",
    brand: "CablePro",
    price: 500,
    stock: 30,
    available: true
  },
  {
    product_id: 109,
    product_name: "Study Table",
    category: "Furniture",
    brand: "HomePro",
    price: 8000,
    stock: 15,
    available: true
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6acf128174819f719299ac41'),
    '1': ObjectId('6acf128174819f719299ac42')
  }
}
db.products.updateOne(
  { product_id: 102 },
  { $set: { price: 2000 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.updateOne(
  { product_id: 105 },
  { $set: { stock: 10, available: true } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.updateOne(
  { product_id: 104 },
  { $inc: { stock: 10 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.updateOne(
  { product_id: 106 },
  { $inc: { stock: -3 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.updateOne(
  { product_id: 101 },
  { $set: { discount_percent: 10 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.updateOne(
  { product_id: 101 },
  { $unset: { discount_percent: "" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.deleteOne({ product_id: 109 })
{
  acknowledged: true,
  deletedCount: 1
}
db.products.deleteMany({ stock: 0 })
{
  acknowledged: true,
  deletedCount: 0
}
db.products.find({ stock: 0 })
db.products.deleteMany({ stock: 0 })
{
  acknowledged: true,
  deletedCount: 0
}
db.products.find({ stock: 0 })
db.products.find({ category: "Electronics" })
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_id: 107,
  product_name: 'Bluetooth Speaker',
  category: 'Electronics',
  brand: 'SoundMax',
  price: 7500,
  stock: 20,
  available: true
}
db.products.find({ price: { $gt: 10000 } })
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
db.products.find({
  price: { $gte: 5000, $lte: 30000 }
})
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_id: 106,
  product_name: 'Mechanical Keyboard',
  category: 'Accessories',
  brand: 'KeyWorks',
  price: 5200,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-04-12T00:00:00.000Z'),
  colors: [
    'Black',
    'White'
  ],
  specifications: {
    backlit: true,
    wireless: false,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_id: 107,
  product_name: 'Bluetooth Speaker',
  category: 'Electronics',
  brand: 'SoundMax',
  price: 7500,
  stock: 20,
  available: true
}
db.products.find({ stock: { $lt: 10 } })
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
db.products.find({ available: true })
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 2000,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue',
    'Red'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_id: 106,
  product_name: 'Mechanical Keyboard',
  category: 'Accessories',
  brand: 'KeyWorks',
  price: 5200,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-04-12T00:00:00.000Z'),
  colors: [
    'Black',
    'White'
  ],
  specifications: {
    backlit: true,
    wireless: false,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_id: 107,
  product_name: 'Bluetooth Speaker',
  category: 'Electronics',
  brand: 'SoundMax',
  price: 7500,
  stock: 20,
  available: true
}
{
  _id: ObjectId('6acf128174819f719299ac41'),
  product_id: 108,
  product_name: 'USB Cable',
  category: 'Accessories',
  brand: 'CablePro',
  price: 500,
  stock: 30,
  available: true
}
db.products.find({ available: false })
db.products.find({
  category: { $in: ["Electronics", "Furniture"] }
})
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_id: 107,
  product_name: 'Bluetooth Speaker',
  category: 'Electronics',
  brand: 'SoundMax',
  price: 7500,
  stock: 20,
  available: true
}
db.products.find({
  category: { $ne: "Accessories" }
})
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_id: 107,
  product_name: 'Bluetooth Speaker',
  category: 'Electronics',
  brand: 'SoundMax',
  price: 7500,
  stock: 20,
  available: true
}
db.products.find({
  price: { $gt: 10000 },
  stock: { $gt: 5 }
})
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
db.products.find({
  $or: [
    { category: "Electronics" },
    { price: { $lt: 5000 } }
  ]
})
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 2000,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue',
    'Red'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_id: 107,
  product_name: 'Bluetooth Speaker',
  category: 'Electronics',
  brand: 'SoundMax',
  price: 7500,
  stock: 20,
  available: true
}
{
  _id: ObjectId('6acf128174819f719299ac41'),
  product_id: 108,
  product_name: 'USB Cable',
  category: 'Accessories',
  brand: 'CablePro',
  price: 500,
  stock: 30,
  available: true
}
db.products.find({
  launch_date: { $gt: ISODate("2026-02-01") }
})
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 2000,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue',
    'Red'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_id: 106,
  product_name: 'Mechanical Keyboard',
  category: 'Accessories',
  brand: 'KeyWorks',
  price: 5200,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-04-12T00:00:00.000Z'),
  colors: [
    'Black',
    'White'
  ],
  specifications: {
    backlit: true,
    wireless: false,
    warranty_years: 1
  }
}
db.products.find({
  launch_date: {
    $gte: ISODate("2026-01-01"),
    $lte: ISODate("2026-03-31T23:59:59.999Z")
  }
})
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 2000,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue',
    'Red'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
db.products.find(
  {},
  { _id: 0, product_name: 1, price: 1 }
)
{
  product_name: 'Ultra Laptop',
  price: 72000
}
{
  product_name: 'Wireless Mouse',
  price: 2000
}
{
  product_name: 'Office Desk',
  price: 14500
}
{
  product_name: 'Smart Monitor',
  price: 26000
}
{
  product_name: 'Gaming Chair',
  price: 18500
}
{
  product_name: 'Mechanical Keyboard',
  price: 5200
}
{
  product_name: 'Bluetooth Speaker',
  price: 7500
}
{
  product_name: 'USB Cable',
  price: 500
}
db.products.find(
  {},
  { _id: 0, product_name: 1, category: 1, stock: 1 }
)
{
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  stock: 12
}
{
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  stock: 40
}
{
  product_name: 'Office Desk',
  category: 'Furniture',
  stock: 8
}
{
  product_name: 'Smart Monitor',
  category: 'Electronics',
  stock: 15
}
{
  product_name: 'Gaming Chair',
  category: 'Furniture',
  stock: 10
}
{
  product_name: 'Mechanical Keyboard',
  category: 'Accessories',
  stock: 15
}
{
  product_name: 'Bluetooth Speaker',
  category: 'Electronics',
  stock: 20
}
{
  product_name: 'USB Cable',
  category: 'Accessories',
  stock: 30
}
db.products.find().sort({ price: 1 })
{
  _id: ObjectId('6acf128174819f719299ac41'),
  product_id: 108,
  product_name: 'USB Cable',
  category: 'Accessories',
  brand: 'CablePro',
  price: 500,
  stock: 30,
  available: true
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 2000,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue',
    'Red'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_id: 106,
  product_name: 'Mechanical Keyboard',
  category: 'Accessories',
  brand: 'KeyWorks',
  price: 5200,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-04-12T00:00:00.000Z'),
  colors: [
    'Black',
    'White'
  ],
  specifications: {
    backlit: true,
    wireless: false,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_id: 107,
  product_name: 'Bluetooth Speaker',
  category: 'Electronics',
  brand: 'SoundMax',
  price: 7500,
  stock: 20,
  available: true
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
db.products.find().sort({ price: -1 })
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_id: 107,
  product_name: 'Bluetooth Speaker',
  category: 'Electronics',
  brand: 'SoundMax',
  price: 7500,
  stock: 20,
  available: true
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_id: 106,
  product_name: 'Mechanical Keyboard',
  category: 'Accessories',
  brand: 'KeyWorks',
  price: 5200,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-04-12T00:00:00.000Z'),
  colors: [
    'Black',
    'White'
  ],
  specifications: {
    backlit: true,
    wireless: false,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 2000,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue',
    'Red'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf128174819f719299ac41'),
  product_id: 108,
  product_name: 'USB Cable',
  category: 'Accessories',
  brand: 'CablePro',
  price: 500,
  stock: 30,
  available: true
}
db.products.find().sort({ product_name: 1 })
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_id: 107,
  product_name: 'Bluetooth Speaker',
  category: 'Electronics',
  brand: 'SoundMax',
  price: 7500,
  stock: 20,
  available: true
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_id: 106,
  product_name: 'Mechanical Keyboard',
  category: 'Accessories',
  brand: 'KeyWorks',
  price: 5200,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-04-12T00:00:00.000Z'),
  colors: [
    'Black',
    'White'
  ],
  specifications: {
    backlit: true,
    wireless: false,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf128174819f719299ac41'),
  product_id: 108,
  product_name: 'USB Cable',
  category: 'Accessories',
  brand: 'CablePro',
  price: 500,
  stock: 30,
  available: true
}
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 2000,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue',
    'Red'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1
  }
}
db.products.find().sort({ price: -1 }).limit(3)
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
db.products.find().sort({ stock: 1 }).limit(2)
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
db.products.find({ colors: "Black" })
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 2000,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue',
    'Red'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_id: 106,
  product_name: 'Mechanical Keyboard',
  category: 'Accessories',
  brand: 'KeyWorks',
  price: 5200,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-04-12T00:00:00.000Z'),
  colors: [
    'Black',
    'White'
  ],
  specifications: {
    backlit: true,
    wireless: false,
    warranty_years: 1
  }
}
db.products.find({
  colors: { $all: ["Black", "Silver"] }
})
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
db.products.find({
  colors: { $in: ["White", "Blue"] }
})
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 2000,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue',
    'Red'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_id: 106,
  product_name: 'Mechanical Keyboard',
  category: 'Accessories',
  brand: 'KeyWorks',
  price: 5200,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-04-12T00:00:00.000Z'),
  colors: [
    'Black',
    'White'
  ],
  specifications: {
    backlit: true,
    wireless: false,
    warranty_years: 1
  }
}
db.products.updateOne(
  { product_id: 101 },
  { $push: { colors: "Grey" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.updateOne(
  { product_id: 101 },
  { $addToSet: { colors: "Black" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
}
db.products.updateOne(
  { product_id: 102 },
  { $pull: { colors: "Red" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.find({
  $expr: { $gt: [{ $size: "$colors" }, 1] }
})
MongoServerError[Location17124]: Executor error during find command: commerce_assessment.products :: caused by :: The argument to $size must be an array, but was of type: missing
db.products.find({
  $expr: {
    $and: [
      { $isArray: "$colors" },
      { $gt: [ { $size: "$colors" }, 1 ] }
    ]
  }
})
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver',
    'Grey'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 2000,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_id: 106,
  product_name: 'Mechanical Keyboard',
  category: 'Accessories',
  brand: 'KeyWorks',
  price: 5200,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-04-12T00:00:00.000Z'),
  colors: [
    'Black',
    'White'
  ],
  specifications: {
    backlit: true,
    wireless: false,
    warranty_years: 1
  }
}
db.products.find({
  "specifications.warranty_years": 2
})
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver',
    'Grey'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
db.products.find({
  "specifications.adjustable": true
})
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
db.products.find({
  "specifications.wireless": true
})
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 2000,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1
  }
}
db.products.updateOne(
  { product_id: 103 },
  { $set: { "specifications.warranty_years": 5 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.updateOne(
  { product_id: 101 },
  { $set: { "specifications.country_of_origin": "India" } }
)

db.products.updateOne(
  { product_id: 102 },
  { $set: { "specifications.country_of_origin": "China" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.find({
  "specifications.country_of_origin": "India"
})
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver',
    'Grey'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2,
    country_of_origin: 'India'
  }
}
db.products.find({
  price: { $type: "number" }
})
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_id: 101,
  product_name: 'Ultra Laptop',
  category: 'Electronics',
  brand: 'TechPro',
  price: 72000,
  stock: 12,
  available: true,
  launch_date: ISODate('2026-01-15T00:00:00.000Z'),
  colors: [
    'Black',
    'Silver',
    'Grey'
  ],
  specifications: {
    ram: '16 GB',
    storage: '1 TB SSD',
    warranty_years: 2,
    country_of_origin: 'India'
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_id: 102,
  product_name: 'Wireless Mouse',
  category: 'Accessories',
  brand: 'ClickMax',
  price: 2000,
  stock: 40,
  available: true,
  launch_date: ISODate('2026-02-10T00:00:00.000Z'),
  colors: [
    'Black',
    'Blue'
  ],
  specifications: {
    wireless: true,
    warranty_years: 1,
    country_of_origin: 'China'
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_id: 103,
  product_name: 'Office Desk',
  category: 'Furniture',
  brand: 'WorkSpace',
  price: 14500,
  stock: 8,
  available: true,
  launch_date: ISODate('2025-11-20T00:00:00.000Z'),
  colors: [
    'Brown',
    'Black'
  ],
  specifications: {
    material: 'Wood',
    adjustable: false,
    warranty_years: 5
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_id: 104,
  product_name: 'Smart Monitor',
  category: 'Electronics',
  brand: 'VisionPlus',
  price: 26000,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-03-01T00:00:00.000Z'),
  colors: [
    'Black'
  ],
  specifications: {
    screen_size: '27 inch',
    resolution: '4K',
    warranty_years: 2
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_id: 105,
  product_name: 'Gaming Chair',
  category: 'Furniture',
  brand: 'SeatPro',
  price: 18500,
  stock: 10,
  available: true,
  launch_date: ISODate('2026-01-05T00:00:00.000Z'),
  colors: [
    'Black',
    'Red'
  ],
  specifications: {
    material: 'Leather',
    adjustable: true,
    warranty_years: 3
  }
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_id: 106,
  product_name: 'Mechanical Keyboard',
  category: 'Accessories',
  brand: 'KeyWorks',
  price: 5200,
  stock: 15,
  available: true,
  launch_date: ISODate('2026-04-12T00:00:00.000Z'),
  colors: [
    'Black',
    'White'
  ],
  specifications: {
    backlit: true,
    wireless: false,
    warranty_years: 1
  }
}
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_id: 107,
  product_name: 'Bluetooth Speaker',
  category: 'Electronics',
  brand: 'SoundMax',
  price: 7500,
  stock: 20,
  available: true
}
{
  _id: ObjectId('6acf128174819f719299ac41'),
  product_id: 108,
  product_name: 'USB Cable',
  category: 'Accessories',
  brand: 'CablePro',
  price: 500,
  stock: 30,
  available: true
}
db.products.aggregate([
  {
    $project: {
      product_name: 1,
      launch_date_type: { $type: "$launch_date" }
    }
  }
])
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_name: 'Ultra Laptop',
  launch_date_type: 'date'
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_name: 'Wireless Mouse',
  launch_date_type: 'date'
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_name: 'Office Desk',
  launch_date_type: 'date'
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_name: 'Smart Monitor',
  launch_date_type: 'date'
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_name: 'Gaming Chair',
  launch_date_type: 'date'
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_name: 'Mechanical Keyboard',
  launch_date_type: 'date'
}
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_name: 'Bluetooth Speaker',
  launch_date_type: 'missing'
}
{
  _id: ObjectId('6acf128174819f719299ac41'),
  product_name: 'USB Cable',
  launch_date_type: 'missing'
}
db.products.aggregate([
  {
    $project: {
      product_name: 1,
      colors_type: { $type: "$colors" }
    }
  }
])
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_name: 'Ultra Laptop',
  colors_type: 'array'
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_name: 'Wireless Mouse',
  colors_type: 'array'
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_name: 'Office Desk',
  colors_type: 'array'
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_name: 'Smart Monitor',
  colors_type: 'array'
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_name: 'Gaming Chair',
  colors_type: 'array'
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_name: 'Mechanical Keyboard',
  colors_type: 'array'
}
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_name: 'Bluetooth Speaker',
  colors_type: 'missing'
}
{
  _id: ObjectId('6acf128174819f719299ac41'),
  product_name: 'USB Cable',
  colors_type: 'missing'
}
db.products.aggregate([
  {
    $project: {
      product_name: 1,
      specifications_type: { $type: "$specifications" }
    }
  }
])
{
  _id: ObjectId('6acf125674819f719299ac3a'),
  product_name: 'Ultra Laptop',
  specifications_type: 'object'
}
{
  _id: ObjectId('6acf125674819f719299ac3b'),
  product_name: 'Wireless Mouse',
  specifications_type: 'object'
}
{
  _id: ObjectId('6acf125674819f719299ac3c'),
  product_name: 'Office Desk',
  specifications_type: 'object'
}
{
  _id: ObjectId('6acf125674819f719299ac3d'),
  product_name: 'Smart Monitor',
  specifications_type: 'object'
}
{
  _id: ObjectId('6acf125674819f719299ac3e'),
  product_name: 'Gaming Chair',
  specifications_type: 'object'
}
{
  _id: ObjectId('6acf125674819f719299ac3f'),
  product_name: 'Mechanical Keyboard',
  specifications_type: 'object'
}
{
  _id: ObjectId('6acf127974819f719299ac40'),
  product_name: 'Bluetooth Speaker',
  specifications_type: 'missing'
}
{
  _id: ObjectId('6acf128174819f719299ac41'),
  product_name: 'USB Cable',
  specifications_type: 'missing'
}
db.products.insertOne({
  product_id: 110,
  product_name: "Test Product",
  category: "Electronics",
  brand: "TestBrand",
  price: "25000",
  stock: 5,
  available: true
})
{
  acknowledged: true,
  insertedId: ObjectId('6acf14f174819f719299ac43')
}
db.products.find({
  price: { $type: "string" }
})
{
  _id: ObjectId('6acf14f174819f719299ac43'),
  product_id: 110,
  product_name: 'Test Product',
  category: 'Electronics',
  brand: 'TestBrand',
  price: '25000',
  stock: 5,
  available: true
}
db.products.updateOne(
  { product_id: 110 },
  [{ $set: { price: { $toDouble: "$price" } } }]
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.products.find({ product_id: 110 })
{
  _id: ObjectId('6acf14f174819f719299ac43'),
  product_id: 110,
  product_name: 'Test Product',
  category: 'Electronics',
  brand: 'TestBrand',
  price: 25000,
  stock: 5,
  available: true
}
db.createCollection("customers")
{ ok: 1 }
db.customers.insertMany([
  {
    customer_id: 501,
    customer_name: "Aditya Rao",
    email: "aditya@email.com",
    active: true,
    address: {
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500081"
    },
    interests: ["Electronics", "Accessories"]
  },
  {
    customer_id: 502,
    customer_name: "Maya Thomas",
    email: "maya@email.com",
    active: true,
    address: {
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600028"
    },
    interests: ["Furniture", "Home"]
  },
  {
    customer_id: 503,
    customer_name: "Faisal Ahmed",
    email: "faisal@email.com",
    active: false,
    address: {
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500034"
    },
    interests: ["Electronics"]
  },
  {
    customer_id: 504,
    customer_name: "Nikita Shah",
    email: "nikita@email.com",
    active: true,
    address: {
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400050"
    },
    interests: ["Furniture", "Electronics"]
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6acf151974819f719299ac44'),
    '1': ObjectId('6acf151974819f719299ac45'),
    '2': ObjectId('6acf151974819f719299ac46'),
    '3': ObjectId('6acf151974819f719299ac47')
  }
}
db.customers.find()
{
  _id: ObjectId('6acf151974819f719299ac44'),
  customer_id: 501,
  customer_name: 'Aditya Rao',
  email: 'aditya@email.com',
  active: true,
  address: {
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500081'
  },
  interests: [
    'Electronics',
    'Accessories'
  ]
}
{
  _id: ObjectId('6acf151974819f719299ac45'),
  customer_id: 502,
  customer_name: 'Maya Thomas',
  email: 'maya@email.com',
  active: true,
  address: {
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600028'
  },
  interests: [
    'Furniture',
    'Home'
  ]
}
{
  _id: ObjectId('6acf151974819f719299ac46'),
  customer_id: 503,
  customer_name: 'Faisal Ahmed',
  email: 'faisal@email.com',
  active: false,
  address: {
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500034'
  },
  interests: [
    'Electronics'
  ]
}
{
  _id: ObjectId('6acf151974819f719299ac47'),
  customer_id: 504,
  customer_name: 'Nikita Shah',
  email: 'nikita@email.com',
  active: true,
  address: {
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050'
  },
  interests: [
    'Furniture',
    'Electronics'
  ]
}
db.customers.find({ active: true })
{
  _id: ObjectId('6acf151974819f719299ac44'),
  customer_id: 501,
  customer_name: 'Aditya Rao',
  email: 'aditya@email.com',
  active: true,
  address: {
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500081'
  },
  interests: [
    'Electronics',
    'Accessories'
  ]
}
{
  _id: ObjectId('6acf151974819f719299ac45'),
  customer_id: 502,
  customer_name: 'Maya Thomas',
  email: 'maya@email.com',
  active: true,
  address: {
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600028'
  },
  interests: [
    'Furniture',
    'Home'
  ]
}
{
  _id: ObjectId('6acf151974819f719299ac47'),
  customer_id: 504,
  customer_name: 'Nikita Shah',
  email: 'nikita@email.com',
  active: true,
  address: {
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050'
  },
  interests: [
    'Furniture',
    'Electronics'
  ]
}
db.customers.find({ "address.city": "Hyderabad" })
{
  _id: ObjectId('6acf151974819f719299ac44'),
  customer_id: 501,
  customer_name: 'Aditya Rao',
  email: 'aditya@email.com',
  active: true,
  address: {
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500081'
  },
  interests: [
    'Electronics',
    'Accessories'
  ]
}
{
  _id: ObjectId('6acf151974819f719299ac46'),
  customer_id: 503,
  customer_name: 'Faisal Ahmed',
  email: 'faisal@email.com',
  active: false,
  address: {
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500034'
  },
  interests: [
    'Electronics'
  ]
}
db.customers.find({ interests: "Electronics" })
{
  _id: ObjectId('6acf151974819f719299ac44'),
  customer_id: 501,
  customer_name: 'Aditya Rao',
  email: 'aditya@email.com',
  active: true,
  address: {
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500081'
  },
  interests: [
    'Electronics',
    'Accessories'
  ]
}
{
  _id: ObjectId('6acf151974819f719299ac46'),
  customer_id: 503,
  customer_name: 'Faisal Ahmed',
  email: 'faisal@email.com',
  active: false,
  address: {
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500034'
  },
  interests: [
    'Electronics'
  ]
}
{
  _id: ObjectId('6acf151974819f719299ac47'),
  customer_id: 504,
  customer_name: 'Nikita Shah',
  email: 'nikita@email.com',
  active: true,
  address: {
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050'
  },
  interests: [
    'Furniture',
    'Electronics'
  ]
}
db.customers.find({
  interests: { $all: ["Furniture", "Electronics"] }
})
{
  _id: ObjectId('6acf151974819f719299ac47'),
  customer_id: 504,
  customer_name: 'Nikita Shah',
  email: 'nikita@email.com',
  active: true,
  address: {
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050'
  },
  interests: [
    'Furniture',
    'Electronics'
  ]
}
db.customers.updateOne(
  { customer_id: 503 },
  { $set: { active: true } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.customers.updateOne(
  { customer_id: 504 },
  { $set: { "address.city": "Chennai" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.customers.updateOne(
  { customer_id: 502 },
  { $addToSet: { interests: "Electronics" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.createCollection("orders")
{ ok: 1 }
db.orders.insertMany([
  {
    order_id: 9001,
    customer_id: 501,
    order_date: ISODate("2026-09-01"),
    status: "Delivered",
    items: [
      {
        product: "Ultra Laptop",
        quantity: 1,
        price: 72000
      },
      {
        product: "Wireless Mouse",
        quantity: 2,
        price: 2000
      }
    ]
  },
  {
    order_id: 9002,
    customer_id: 502,
    order_date: ISODate("2026-09-03"),
    status: "Processing",
    items: [
      {
        product: "Office Desk",
        quantity: 1,
        price: 14500
      }
    ]
  },
  {
    order_id: 9003,
    customer_id: 503,
    order_date: ISODate("2026-09-05"),
    status: "Delivered",
    items: [
      {
        product: "Smart Monitor",
        quantity: 2,
        price: 26000
      },
      {
        product: "Mechanical Keyboard",
        quantity: 1,
        price: 5200
      }
    ]
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6acf156474819f719299ac48'),
    '1': ObjectId('6acf156474819f719299ac49'),
    '2': ObjectId('6acf156474819f719299ac4a')
  }
}
db.orders.find({ status: "Delivered" })
{
  _id: ObjectId('6acf156474819f719299ac48'),
  order_id: 9001,
  customer_id: 501,
  order_date: ISODate('2026-09-01T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      product: 'Ultra Laptop',
      quantity: 1,
      price: 72000
    },
    {
      product: 'Wireless Mouse',
      quantity: 2,
      price: 2000
    }
  ]
}
{
  _id: ObjectId('6acf156474819f719299ac4a'),
  order_id: 9003,
  customer_id: 503,
  order_date: ISODate('2026-09-05T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      product: 'Smart Monitor',
      quantity: 2,
      price: 26000
    },
    {
      product: 'Mechanical Keyboard',
      quantity: 1,
      price: 5200
    }
  ]
}
db.orders.find({
  "items.product": "Ultra Laptop"
})
{
  _id: ObjectId('6acf156474819f719299ac48'),
  order_id: 9001,
  customer_id: 501,
  order_date: ISODate('2026-09-01T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      product: 'Ultra Laptop',
      quantity: 1,
      price: 72000
    },
    {
      product: 'Wireless Mouse',
      quantity: 2,
      price: 2000
    }
  ]
}
db.orders.find({
  items: { $elemMatch: { quantity: { $gt: 1 } } }
})
{
  _id: ObjectId('6acf156474819f719299ac48'),
  order_id: 9001,
  customer_id: 501,
  order_date: ISODate('2026-09-01T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      product: 'Ultra Laptop',
      quantity: 1,
      price: 72000
    },
    {
      product: 'Wireless Mouse',
      quantity: 2,
      price: 2000
    }
  ]
}
{
  _id: ObjectId('6acf156474819f719299ac4a'),
  order_id: 9003,
  customer_id: 503,
  order_date: ISODate('2026-09-05T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      product: 'Smart Monitor',
      quantity: 2,
      price: 26000
    },
    {
      product: 'Mechanical Keyboard',
      quantity: 1,
      price: 5200
    }
  ]
}
db.orders.find({
  items: {
    $elemMatch: {
      product: "Smart Monitor",
      quantity: 2
    }
  }
})
{
  _id: ObjectId('6acf156474819f719299ac4a'),
  order_id: 9003,
  customer_id: 503,
  order_date: ISODate('2026-09-05T00:00:00.000Z'),
  status: 'Delivered',
  items: [
    {
      product: 'Smart Monitor',
      quantity: 2,
      price: 26000
    },
    {
      product: 'Mechanical Keyboard',
      quantity: 1,
      price: 5200
    }
  ]
}
db.orders.updateOne(
  { order_id: 9002 },
  {
    $push: {
      items: {
        product: "Wireless Mouse",
        quantity: 2,
        price: 2000
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
  { order_id: 9002 },
  { $set: { status: "Delivered" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.orders.updateOne(
  { order_id: 9003 },
  { $pull: { items: { product: "Mechanical Keyboard" } } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.createCollection("suppliers")
{ ok: 1 }
db.suppliers.insertMany([
  {
    supplier_id: 201,
    supplier_name: "TechWorld",
    city: "Chennai",
    active: true,
    categories: ["Electronics", "Accessories"],
    contact: {
      phone: "9876543210",
      email: "techworld@email.com"
    },
    warehouses: ["Chennai", "Bengaluru"],
    registration_date: ISODate("2026-02-10")
  },
  {
    supplier_id: 202,
    supplier_name: "HomeStyle",
    city: "Mumbai",
    active: true,
    categories: ["Furniture", "Home"],
    contact: {
      phone: "9876543211",
      email: "homestyle@email.com"
    },
    warehouses: ["Mumbai", "Pune"],
    registration_date: ISODate("2025-12-15")
  },
  {
    supplier_id: 203,
    supplier_name: "DigitalMart",
    city: "Hyderabad",
    active: false,
    categories: ["Electronics", "Accessories"],
    contact: {
      phone: "9876543212",
      email: "digitalmart@email.com"
    },
    warehouses: ["Hyderabad", "Vijayawada"],
    registration_date: ISODate("2026-03-20")
  },
  {
    supplier_id: 204,
    supplier_name: "OfficeNeeds",
    city: "Chennai",
    active: true,
    categories: ["Furniture", "Office Supplies"],
    contact: {
      phone: "9876543213",
      email: "officeneeds@email.com"
    },
    warehouses: ["Chennai", "Coimbatore"],
    registration_date: ISODate("2026-04-05")
  },
  {
    supplier_id: 205,
    supplier_name: "GadgetPoint",
    city: "Bengaluru",
    active: true,
    categories: ["Electronics", "Home"],
    contact: {
      phone: "9876543214",
      email: "gadgetpoint@email.com"
    },
    warehouses: ["Bengaluru", "Mysuru"],
    registration_date: ISODate("2026-05-12")
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6acf172e74819f719299ac4b'),
    '1': ObjectId('6acf172e74819f719299ac4c'),
    '2': ObjectId('6acf172e74819f719299ac4d'),
    '3': ObjectId('6acf172e74819f719299ac4e'),
    '4': ObjectId('6acf172e74819f719299ac4f')
  }
}
db.suppliers.find({ active: true })
{
  _id: ObjectId('6acf172e74819f719299ac4b'),
  supplier_id: 201,
  supplier_name: 'TechWorld',
  city: 'Chennai',
  active: true,
  categories: [
    'Electronics',
    'Accessories'
  ],
  contact: {
    phone: '9876543210',
    email: 'techworld@email.com'
  },
  warehouses: [
    'Chennai',
    'Bengaluru'
  ],
  registration_date: ISODate('2026-02-10T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4c'),
  supplier_id: 202,
  supplier_name: 'HomeStyle',
  city: 'Mumbai',
  active: true,
  categories: [
    'Furniture',
    'Home'
  ],
  contact: {
    phone: '9876543211',
    email: 'homestyle@email.com'
  },
  warehouses: [
    'Mumbai',
    'Pune'
  ],
  registration_date: ISODate('2025-12-15T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4e'),
  supplier_id: 204,
  supplier_name: 'OfficeNeeds',
  city: 'Chennai',
  active: true,
  categories: [
    'Furniture',
    'Office Supplies'
  ],
  contact: {
    phone: '9876543213',
    email: 'officeneeds@email.com'
  },
  warehouses: [
    'Chennai',
    'Coimbatore'
  ],
  registration_date: ISODate('2026-04-05T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4f'),
  supplier_id: 205,
  supplier_name: 'GadgetPoint',
  city: 'Bengaluru',
  active: true,
  categories: [
    'Electronics',
    'Home'
  ],
  contact: {
    phone: '9876543214',
    email: 'gadgetpoint@email.com'
  },
  warehouses: [
    'Bengaluru',
    'Mysuru'
  ],
  registration_date: ISODate('2026-05-12T00:00:00.000Z')
}
db.suppliers.find({ city: "Chennai" })
{
  _id: ObjectId('6acf172e74819f719299ac4b'),
  supplier_id: 201,
  supplier_name: 'TechWorld',
  city: 'Chennai',
  active: true,
  categories: [
    'Electronics',
    'Accessories'
  ],
  contact: {
    phone: '9876543210',
    email: 'techworld@email.com'
  },
  warehouses: [
    'Chennai',
    'Bengaluru'
  ],
  registration_date: ISODate('2026-02-10T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4e'),
  supplier_id: 204,
  supplier_name: 'OfficeNeeds',
  city: 'Chennai',
  active: true,
  categories: [
    'Furniture',
    'Office Supplies'
  ],
  contact: {
    phone: '9876543213',
    email: 'officeneeds@email.com'
  },
  warehouses: [
    'Chennai',
    'Coimbatore'
  ],
  registration_date: ISODate('2026-04-05T00:00:00.000Z')
}
db.suppliers.find({ categories: "Electronics" })
{
  _id: ObjectId('6acf172e74819f719299ac4b'),
  supplier_id: 201,
  supplier_name: 'TechWorld',
  city: 'Chennai',
  active: true,
  categories: [
    'Electronics',
    'Accessories'
  ],
  contact: {
    phone: '9876543210',
    email: 'techworld@email.com'
  },
  warehouses: [
    'Chennai',
    'Bengaluru'
  ],
  registration_date: ISODate('2026-02-10T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4d'),
  supplier_id: 203,
  supplier_name: 'DigitalMart',
  city: 'Hyderabad',
  active: false,
  categories: [
    'Electronics',
    'Accessories'
  ],
  contact: {
    phone: '9876543212',
    email: 'digitalmart@email.com'
  },
  warehouses: [
    'Hyderabad',
    'Vijayawada'
  ],
  registration_date: ISODate('2026-03-20T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4f'),
  supplier_id: 205,
  supplier_name: 'GadgetPoint',
  city: 'Bengaluru',
  active: true,
  categories: [
    'Electronics',
    'Home'
  ],
  contact: {
    phone: '9876543214',
    email: 'gadgetpoint@email.com'
  },
  warehouses: [
    'Bengaluru',
    'Mysuru'
  ],
  registration_date: ISODate('2026-05-12T00:00:00.000Z')
}
db.suppliers.find({
  registration_date: { $gt: ISODate("2026-01-01") }
})
{
  _id: ObjectId('6acf172e74819f719299ac4b'),
  supplier_id: 201,
  supplier_name: 'TechWorld',
  city: 'Chennai',
  active: true,
  categories: [
    'Electronics',
    'Accessories'
  ],
  contact: {
    phone: '9876543210',
    email: 'techworld@email.com'
  },
  warehouses: [
    'Chennai',
    'Bengaluru'
  ],
  registration_date: ISODate('2026-02-10T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4d'),
  supplier_id: 203,
  supplier_name: 'DigitalMart',
  city: 'Hyderabad',
  active: false,
  categories: [
    'Electronics',
    'Accessories'
  ],
  contact: {
    phone: '9876543212',
    email: 'digitalmart@email.com'
  },
  warehouses: [
    'Hyderabad',
    'Vijayawada'
  ],
  registration_date: ISODate('2026-03-20T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4e'),
  supplier_id: 204,
  supplier_name: 'OfficeNeeds',
  city: 'Chennai',
  active: true,
  categories: [
    'Furniture',
    'Office Supplies'
  ],
  contact: {
    phone: '9876543213',
    email: 'officeneeds@email.com'
  },
  warehouses: [
    'Chennai',
    'Coimbatore'
  ],
  registration_date: ISODate('2026-04-05T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4f'),
  supplier_id: 205,
  supplier_name: 'GadgetPoint',
  city: 'Bengaluru',
  active: true,
  categories: [
    'Electronics',
    'Home'
  ],
  contact: {
    phone: '9876543214',
    email: 'gadgetpoint@email.com'
  },
  warehouses: [
    'Bengaluru',
    'Mysuru'
  ],
  registration_date: ISODate('2026-05-12T00:00:00.000Z')
}
db.suppliers.updateOne(
  { supplier_id: 201 },
  { $addToSet: { warehouses: "Coimbatore" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.suppliers.updateOne(
  { supplier_id: 203 },
  { $set: { active: true } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.suppliers.updateOne(
  { supplier_id: 201 },
  { $pull: { categories: "Accessories" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.suppliers.find(
  {},
  { _id: 0, supplier_name: 1, city: 1 }
)
{
  supplier_name: 'TechWorld',
  city: 'Chennai'
}
{
  supplier_name: 'HomeStyle',
  city: 'Mumbai'
}
{
  supplier_name: 'DigitalMart',
  city: 'Hyderabad'
}
{
  supplier_name: 'OfficeNeeds',
  city: 'Chennai'
}
{
  supplier_name: 'GadgetPoint',
  city: 'Bengaluru'
}
db.suppliers.find().sort({ registration_date: 1 })
{
  _id: ObjectId('6acf172e74819f719299ac4c'),
  supplier_id: 202,
  supplier_name: 'HomeStyle',
  city: 'Mumbai',
  active: true,
  categories: [
    'Furniture',
    'Home'
  ],
  contact: {
    phone: '9876543211',
    email: 'homestyle@email.com'
  },
  warehouses: [
    'Mumbai',
    'Pune'
  ],
  registration_date: ISODate('2025-12-15T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4b'),
  supplier_id: 201,
  supplier_name: 'TechWorld',
  city: 'Chennai',
  active: true,
  categories: [
    'Electronics'
  ],
  contact: {
    phone: '9876543210',
    email: 'techworld@email.com'
  },
  warehouses: [
    'Chennai',
    'Bengaluru',
    'Coimbatore'
  ],
  registration_date: ISODate('2026-02-10T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4d'),
  supplier_id: 203,
  supplier_name: 'DigitalMart',
  city: 'Hyderabad',
  active: true,
  categories: [
    'Electronics',
    'Accessories'
  ],
  contact: {
    phone: '9876543212',
    email: 'digitalmart@email.com'
  },
  warehouses: [
    'Hyderabad',
    'Vijayawada'
  ],
  registration_date: ISODate('2026-03-20T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4e'),
  supplier_id: 204,
  supplier_name: 'OfficeNeeds',
  city: 'Chennai',
  active: true,
  categories: [
    'Furniture',
    'Office Supplies'
  ],
  contact: {
    phone: '9876543213',
    email: 'officeneeds@email.com'
  },
  warehouses: [
    'Chennai',
    'Coimbatore'
  ],
  registration_date: ISODate('2026-04-05T00:00:00.000Z')
}
{
  _id: ObjectId('6acf172e74819f719299ac4f'),
  supplier_id: 205,
  supplier_name: 'GadgetPoint',
  city: 'Bengaluru',
  active: true,
  categories: [
    'Electronics',
    'Home'
  ],
  contact: {
    phone: '9876543214',
    email: 'gadgetpoint@email.com'
  },
  warehouses: [
    'Bengaluru',
    'Mysuru'
  ],
  registration_date: ISODate('2026-05-12T00:00:00.000Z')
}
db.suppliers.find().sort({ registration_date: -1 })