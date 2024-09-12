function giveJobToStudent(student, jobName) {
    const studentCopy = student;
    studentCopy.jobName = jobName;
    alert(`Поздравляем! У студента ${studentCopy.fullName} появилась новая работа! Теперь он ${studentCopy.jobName}`);
}

const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  }
  
  const updatedStudent = giveJobToStudent(student, 'программист');
  /*
  updatedStudent = {
      fullName: 'Максим',
      experienceInMonths: 12,
      stack: ['HTML', 'CSS', 'JavaScript', 'React'],
      job: 'веб-разработчик',
  }
  */