// Simulated database fetch function
export async function fetchPost(id) {
    // Simulate a delay to mimic database access
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `Post ${id}`;
}
