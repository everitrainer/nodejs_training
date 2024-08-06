class CustomEventEmitter {
    constructor() {
        this.events = {}; // Object to store events and their listeners
    }

    // Method to add a listener for a specific event
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = []; // Initialize an array if event doesn't exist
        }
        this.events[event].push(listener); // Add the listener to the array
    }

    // Method to remove a listener for a specific event
    off(event, listener) {
        if (!this.events[event]) return; // If the event doesn't exist, do nothing

        // Filter out the listener from the array
        this.events[event] = this.events[event].filter(l => l !== listener);
    }

    // Method to emit an event and notify all listeners
    emit(event, ...args) {
        if (!this.events[event]) return; // If no listeners for the event, do nothing

        // Call each listener with the provided arguments
        this.events[event].forEach(listener => listener(...args));
    }
}

module.exports = CustomEventEmitter;
