const fs = require('fs');

const countStudents = (path) => {
  try {
    // read the file
    const contents = fs.readFileSync(path, 'utf8');
    const students = contents.split('\n').slice(1);
    const numberOfStudents = students.length;
    console.log('Number of students: ', numberOfStudents);
    // track students and their fields
    const fieldData = {};
    for (const student of students) {
      // split student details
      const studentData = student.split(',');
      // get the field and name for this student
      const field = studentData[3];
      const name = studentData[0];
      // put the student's name into `fieldData`
      if (!fieldData[field]) {
        // create the field's key if it does not exist
        fieldData[field] = [];
        // add this student to the empty list
        fieldData[field].push(name);
      } else {
        fieldData[field].push(name);
      }
    }
    // print the summary for each field
    for (const [field, students] of Object.entries(fieldData)) {
      const count = students.length;
      const fieldMembers = students.join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${fieldMembers}`);
    }
  } catch (error) {
    // error handling
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
