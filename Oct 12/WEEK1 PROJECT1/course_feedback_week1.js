
use course_feedback

db.reviews.insertMany([
  {
    student_id: 1,
    course_name: "Python",
    rating: 5,
    feedback: "Easy to understand"
  },
  {
    student_id: 2,
    course_name: "SQL",
    rating: 4,
    feedback: "Useful course"
  },
  {
    student_id: 3,
    course_name: "Power BI",
    rating: 5,
    feedback: "Good practical lessons"
  }
])

db.reviews.createIndex({ student_id: 1 })
db.reviews.createIndex({ course_name: 1 })
db.reviews.getIndexes()
db.reviews.find();
