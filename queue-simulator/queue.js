
class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element at the rear
    enqueue(element) {
        this.items.push(element);
        return element;
    }

    // Remove an element from the front
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.shift();
    }

    // View the front element without removing it
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const queue = new Queue();

// Display the queue
function displayQueue() {
    $("#queue").empty();

    for (let i = 0; i < queue.items.length; i++) {
        let color = i % 2 === 0 ? "bg-primary" : "bg-success";

        let item = $("<div>")
            .addClass("row push queue-item " + color)
            .text(queue.items[i]);

        if (i === 0) {
            item.addClass("front-item");
        }

        $("#queue").append(item);
    }

    if (queue.isEmpty()) {
        $("#frontLabel").text("Front: —");
        $("#rearLabel").text("Rear: —");
    } else {
        $("#frontLabel").text("Front: " + queue.items[0]);
        $("#rearLabel").text("Rear: " + queue.items[queue.items.length - 1]);
    }
}

// Display messages
function showMessage(message) {
    $("#message").text(message);
}

// ENQUEUE BUTTON
$("#enqueueBtn").click(function() {
    let value = $("#queueInput").val().trim();

    if (value === "") {
        showMessage("Please enter a value!");
        return;
    }

    queue.enqueue(value);

    $("#queueInput").val("");
    $("#deleted").empty();

    showMessage(value + " added to the queue!");

    displayQueue();
});

// DEQUEUE BUTTON
$("#dequeueBtn").click(function() {
    if (queue.isEmpty()) {
        showMessage("Queue is empty! Nothing to remove.");
        return;
    }

    let deletedItem = queue.dequeue();

    $("#deleted").empty();

    let deletedBlock = $("<div>")
        .addClass("row pop text-bg-danger border border-light")
        .text(deletedItem);

    $("#deleted").append(deletedBlock);

    showMessage(deletedItem + " removed from the queue!");

    displayQueue();
});

// PEEK BUTTON
$("#peekBtn").click(function() {
    if (queue.isEmpty()) {
        showMessage("Queue is empty! Nothing to peek.");
        return;
    }

    showMessage("Front element: " + queue.peek());

    displayQueue();
});

// CLEAR BUTTON
$("#clearBtn").click(function() {
    queue.clear();

    $("#queue").empty();
    $("#deleted").empty();

    showMessage("Queue cleared!");

    displayQueue();
});

// Initial display
$(document).ready(function() {
    displayQueue();
});
