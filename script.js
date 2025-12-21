function welcome() {
    alert("Welcome to StudyHub!");
}

function searchCourse() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let items = document.querySelectorAll("#courseList li");

    items.forEach(course => {
        let name = course.textContent.toLowerCase();
        course.style.display = name.includes(input) ? "" : "none";
    });
}