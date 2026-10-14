CREATE DATABASE IF NOT EXISTS course_tracker;
USE course_tracker;
USE course_tracker;

CREATE TABLE IF NOT EXISTS students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

CREATE TABLE IF NOT EXISTS courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    duration_weeks INT
);

CREATE TABLE IF NOT EXISTS enrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE,
    status VARCHAR(20) DEFAULT 'Enrolled',
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE IF NOT EXISTS progress (
    progress_id INT PRIMARY KEY AUTO_INCREMENT,
    enrollment_id INT NOT NULL UNIQUE,
    completion_percentage DECIMAL(5,2) DEFAULT 0,
    FOREIGN KEY (enrollment_id)
        REFERENCES enrollments(enrollment_id)
);
INSERT IGNORE INTO students (student_name, email)
VALUES
('Arun', 'arun@example.com'),
('Priya', 'priya@example.com'),
('Kumar', 'kumar@example.com');

INSERT INTO courses (course_name, duration_weeks)
VALUES
('Python', 8),
('SQL', 6),
('Power BI', 4);

INSERT INTO enrollments
    (student_id, course_id, enrollment_date, status)
VALUES
(1, 1, '2026-10-01', 'Enrolled'),
(2, 2, '2026-10-02', 'Enrolled'),
(3, 3, '2026-10-03', 'Enrolled');

INSERT IGNORE INTO progress (enrollment_id, completion_percentage)
VALUES
(1, 75),
(2, 40),
(3, 100);

SELECT * FROM students;
SELECT * FROM courses;
SELECT * FROM enrollments;
SELECT * FROM progress;
-- CREATE: Add a student
INSERT IGNORE INTO students (student_name, email)
VALUES ('Meena', 'meena@example.com');

-- READ: View students
SELECT * FROM students;

-- UPDATE: Change Arun's progress
UPDATE progress
SET completion_percentage = 85
WHERE enrollment_id = 1;
DELIMITER //

CREATE PROCEDURE IF NOT EXISTS GetStudentCompletion(
    IN p_student_id INT
)
BEGIN
    SELECT
        s.student_name,
        ROUND(AVG(p.completion_percentage), 2)
            AS average_completion
    FROM students s
    JOIN enrollments e
        ON s.student_id = e.student_id
    JOIN progress p
        ON e.enrollment_id = p.enrollment_id
    WHERE s.student_id = p_student_id
    GROUP BY s.student_id, s.student_name;
END //

DELIMITER ;
CALL GetStudentCompletion(1);
CREATE INDEX idx_enrollment_student
ON enrollments(student_id);

CREATE INDEX idx_enrollment_course
ON enrollments(course_id);
