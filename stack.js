
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add an element to the top of the stack
    push(element) {
        this.items[this.count] = element;
        this.count++;
        return element;
    }

    // Remove the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;
        let deletedItem = this.items[this.count];

        this.items.splice(this.count, 1);

        return deletedItem;
    }

    // Check the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.count === 0;
    }

    // Get the number of elements
    size() {
        return this.count;
    }

    // Print all elements
    print() {
        return this.items.join(" ");
    }

    // Clear the stack
    clear() {
        this.items = [];
        this.count = 0;
    }
}

// Create a Stack object
const stack = new Stack();

// Display the stack in the webpage
function displayStack() {
    $("#stack").empty();

    for (let i = stack.count - 1; i >= 0; i--) {

        let color = i % 2 === 0 ? "bg-primary" : "bg-success";

        let item = $("<div>")
            .addClass("row push " + color + " stack-item")
            .text(stack.items[i]);

        if (i === stack.count - 1) {
            item.addClass("top-item");
        }

        $("#stack").append(item);
    }
}

// Display messages
function showMessage(message) {
    $("#message").text(message);
}

// PUSH BUTTON
$("#pushBtn").click(function() {

    let value = $("#stackInput").val().trim();

    if (value === "") {
        showMessage("Please enter a value!");
        return;
    }

    stack.push(value);

    $("#stackInput").val("");

    $("#deleted").empty();

    showMessage(value + " added to stack!");

    displayStack();
});

// POP BUTTON
$("#popBtn").click(function() {

    if (stack.isEmpty()) {
        showMessage("Stack is empty! Nothing to remove.");
        return;
    }

    let deletedItem = stack.pop();

    $("#deleted").empty();

    let deletedBlock = $("<div>")
        .addClass("row pop text-bg-danger border border-light")
        .text(deletedItem);

    $("#deleted").append(deletedBlock);

    showMessage(deletedItem + " removed from stack!");

    displayStack();
});

// PEEK BUTTON
$("#peekBtn").click(function() {

    if (stack.isEmpty()) {
        showMessage("Stack is empty! Nothing to peek.");
        return;
    }

    showMessage("Top element: " + stack.peek());

    displayStack();

    $("#stack .stack-item").removeClass("top-item");

    $("#stack .stack-item").first().addClass("top-item");
});

// CLEAR BUTTON
$("#clearBtn").click(function() {

    stack.clear();

    $("#stack").empty();
    $("#deleted").empty();

    showMessage("Stack cleared!");

});

// Initialize the simulator
$(document).ready(function() {
    displayStack();
});
