
## Requirements

The requirements below are broken into separate **tiers**, which model the way we **recommend you approach the project**. That is, we recommend you complete (or complete the majority of) the requirements in Tier 1 before moving on to Tier 2, and so on. Of course, if you get stuck on a particular feature, we recommend moving on and trying another feature - don't sacrifice the good for the perfect!

### Tier 1: All Campuses and Students (21/57)

<details>

#### Backend

- [ x] Write a `products` model with the following information:
  - [ x] name - not empty or null
  - [x ] imageUrl - with a default value
  - [ x] address - not empty or null
  - [x ] description - extremely large text
  
- [ x] Write a `users` model with the following information:
  - [ x] firstName - not empty or null
  - [x ] lastName - not empty or null
  - [x ] email - not empty or null; must be a valid email
  - [ x] imageUrl - with a default value
  - [ x] gpa - decimal between 0.0 and 4.0

- [ x] Students may be associated with at most one campus. Likewise, campuses may be associated with many students

- [ok ] Write a route to serve up all students
- [ok ] Write a route to serve up all campuses

#### Frontend

- [ok] Write a campuses sub-reducer to manage campuses in your Redux store
- [ok] Write a students sub-reducer to manage students in your Redux store
- [ok] Write a component to display a list of all campuses (just their names and images)
- [ok] Write a component to display a list of all students (just their names)
- [ok] Display the all-campuses component when the url matches `/campuses`
- [ok] Display the all-students component when the url matches `/students`
- [OK] Add links to the navbar that can be used to navigate to the all-campuses view and the all-students view

Congrats! You have completed your first vertical slice! Make sure to `commit -m "Feature: Get All Campuses and Students"` before moving on (see `RUBRIC.md` - points are awarded/deducted for a proper git workflow)!

</details>

### Tier 2: Single Student and Single Campus (14/57)

<details>

#### Backend

- [x] Write a route to serve up a single campus (based on its id), _including that campuses' students_
- [x] Write a route to serve up a single student (based on their id), _including that student's campus_

#### Frontend

- [ok] Write a component to display a single campus with the following information:
  - [OK] The campus's name, image, address and description
  - [ok] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
- [x] Display the appropriate campus's info when the url matches `/campuses/:campusId`
- [x] Clicking on a campus from the all-campuses view should navigate to show that campus in the single-campus view

- [x] Write a component to display a single student with the following information:
  - [x] The student's full name, email, image, and gpa
  - [x] The name of their campus (or a helpful message if they don't have one)
- [x] Display the appropriate student when the url matches `/students/:studentId`
- [x] Clicking on a student from the all-students view should navigate to show that student in the single-student view

- [ok] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
- [x] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view

Congrats! You have completed your second vertical slice! Make sure to `commit -m "Feature: Get Single Campus and Student"` before moving on (see `RUBRIC.md` - points are awarded/deducted for a proper git workflow)!

</details>

### Tier 3: Adding a Campus and Adding a Student (12/57)

<details>

#### Backend

- [x] Write a route to add a new campus
- [x] Write a route to add a new student

#### Frontend