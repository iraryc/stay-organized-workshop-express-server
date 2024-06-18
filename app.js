"use strict"
// Assuming you have a backend API to fetch users and their todos
const apiUrl = 'http://localhost:8083/api/users';

// Fetch users and populate the dropdown
$(document).ready(function() {
    $.getJSON(`${apiUrl}/users`, function(users) {
        const userDropdown = $('#userDropdown');
        users.forEach(user => {
            userDropdown.append(`<option value="${user.id}">${user.name}</option>`);
        });
    });

    // Handle user selection and fetch todos
    $('#userDropdown').change(function() {
        const userId = $(this).val();
        if (userId) {
            $.getJSON(`${apiUrl}/users/${userId}/todos`, function(todos) {
                const todoList = $('#todoList');
                todoList.empty();
                todos.forEach(todo => {
                    todoList.append(`<li>${todo.title}</li>`);
                });
            });
        } else {
            $('#todoList').empty();
        }
    });
});