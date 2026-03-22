let courses = [
  {
    name: "Python",
    price: 999,
    instructor: "John",
    image: "images/python.jpg"
  },
  {
    name: "Java",
    price: 1299,
    instructor: "Smith",
    image: "images/java.jpg"
  },
  {
    name: "JavaScript",
    price: 899,
    instructor: "David",
    image: "images/javascript.jpg"
  },
  {
    name: "DSA",
    price: 1499,
    instructor: "Ravi",
    image: "images/dsa.jpg"
  },
  {
    name: "Web Dev",
    price: 1999,
    instructor: "Anjali",
    image: "images/webdev.jpg"
  },
  {
    name: "DBMS",
    price: 799,
    instructor: "Kiran",
    image: "images/dbms.jpg"
  }
];

function displayCourses(list) {
  let container = document.getElementById("courseList");
  container.innerHTML = "";

  list.forEach(c => {
    container.innerHTML += `
      <div class="card">
        <img src=\"${c.image}\">
        <h3>${c.name}</h3>
        <p>${c.instructor}</p>
        <p>₹${c.price}</p>
        <button onclick="enroll('${c.name}')">Enroll</button>
      </div>`;
  });
}

function filterCourses() {
  let search = document.getElementById("search").value.toLowerCase();
  let filtered = courses.filter(c => c.name.toLowerCase().includes(search));
  displayCourses(filtered);
}

function enroll(course) {
  alert("Enrolled in " + course);
}

function validateForm() {
  let p = document.getElementById("password").value;
  let c = document.getElementById("confirm").value;
  if (p !== c) {
    alert("Passwords do not match");
    return false;
  }
  alert("Registration successful");
  return true;
}

function scrollToCourses() {
  document.getElementById("courses").scrollIntoView({behavior:'smooth'});
}

window.onload = () => displayCourses(courses);
