// INPUT ITEMS 
const form = document.querySelector('.inputs');
const nameInput = document.querySelector('.name');
const courseInput = document.querySelector('.course');
const authorInput = document.querySelector('.author');
const error = document.querySelector('.error');

// OUTPUT ITEMS 
const nameOutput = document.querySelector('.nameOutput');
const courseOutput = document.querySelector('.courseOutput');
const authorOutput = document.querySelector('.authorOutput');

const courses = document.querySelector('.courses');

// COURSE CLASS
class Course {
    constructor(name, course, author) {
        this.name = name;
        this.course = course;
        this.author = author;
    }
}

// UI CLASS
class UI {
    static showCourse (e) {
        e.preventDefault();

        // IF FIELDS ARE FILLED
        if(nameInput.value != '' && courseInput.value != '' && authorInput.value != '') {
            // CREATE NEW COURSE OBJECT
            const newCourse = new Course(nameInput.value, courseInput.value, authorInput.value);


            // OUTPUT NEW COURSE
            courses.innerHTML += `
            <div class="courseBox">
                <div class="nametext">
                    <h2 class="courseBoxName">Name:</h2><span class="nameOutput">${newCourse.name}</span></div>
                <div class="courseText">
                    <h2 class="courseBoxCourse">Course:</h2><span class="courseOutput">${newCourse.course}</span></div>
                <div class="authorText">
                    <h2 class="courseBoxAuthor">Author:</h2><span class="authorOutput">${newCourse.author}</span></div>
            </div>`;

            

        } // IF FIELDS ARE NOT FILLED 
        if (nameInput.value === '' || courseInput.value === '' || authorInput.value === '') {
            // SHOW ERROR
            error.style.display = 'grid';
            // MAKE IT DISAPPEAR AFTER 2S
            setTimeout(() => {
                error.style.display = 'none';
            }, 2000)
        }
        
        UI.clearFields();

    } // END OF SHOWCOURSE

    static clearFields() {
        nameInput.value = '';
        courseInput.value = '';
        authorInput.value = '';
    }
}

// CREATE COURSE EVENT
form.addEventListener('submit', UI.showCourse);