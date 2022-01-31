
import $ from 'jquery';
import _ from 'lodash';

const content = [
    '<p>Holberton Dashboard</p>',
    '<p>Dashboard data for the students</p>',
    "<button>Click here to get started</button>",
    "<p id='count'></p>",
    "<p>Copyright - Holberton School</p>"
]

content.forEach(i => $("body").append(i))

let counter = 0;

function updateCounter() {
    counter += 1;
    document.getElementById("count").innerHTML = `${counter} clicks on the button`;
}

$("button").on('click', _.debounce(updateCounter, 500))