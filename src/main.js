import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from './journal';
$(document).ready(function() {
  $('#entry').submit(function(event) {
    event.preventDefault();
    const title = $('#title').val();
    const entryInput = $('textarea#content').val();
    const newEntry = new Entry(entryInput);
    let wordCount = newEntry.countWords();
    let vcCount = newEntry.countVC();
    $('#response').html(`
    <p>Title: ${title} 
    <p>Word Count: ${wordCount}</p>
    <p>${vcCount}</p>
    `);
  });
});