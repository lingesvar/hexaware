db.stock_logs.insertMany([
  {
    product_id: 1,
    warehouse_id: 1,
    action: "STOCK_IN",
    quantity: 25,
    reason: "Initial stock entry",
    date: "2026-10-01"
  },
  {
    product_id: 2,
    warehouse_id: 1,
    action: "STOCK_ADJUSTMENT",
    quantity: -5,
    reason: "Damaged items",
    date: "2026-10-05"
  },
  {
    product_id: 3,
    warehouse_id: 2,
    action: "STOCK_IN",
    quantity: 8,
    reason: "New delivery",
    date: "2026-10-06"
  }
]);

db.stock_logs.createIndex({ product_id: 1 });
db.stock_logs.createIndex({ warehouse_id: 1 });
db.stock_logs.find();