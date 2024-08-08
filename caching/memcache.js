const express = require('express');
const memcached = require('memcached');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Initialize the Memcached client
const client = new memcached('localhost:11211');

// Simulated database fetch function
async function fetchPost(id) {
    // Simulate a delay to mimic database access
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `Post ${id}`;
}

// Cached database fetch function
async function getCachedPost(id) {
    try {
        const cachedPost = await new Promise((resolve, reject) =>
            client.get(id, (error, data) => {
                if (error) reject(error);
                resolve(data);
            })
        );
        return cachedPost;
    } catch (error) {
        console.error('Error fetching cached post:', error);
        return null;
    }
}

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to get a post
app.get('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    const cachedPost = await getCachedPost(postId);
    if (cachedPost) {
        res.json({ post: cachedPost });
    } else {
        const post = await fetchPost(postId);
        client.set(postId, post, 60 * 60, (error, result) => {
            if (error) {
                console.error('Error setting cache:', error);
            } else {
                res.json({ post });
            }
        });
    }
});

// Route to add a new post
app.post('/posts', bodyParser.json(), async (req, res) => {
    const { title, content } = req.body;
    const post = `New Post: ${title}, Content: ${content}`;
    const postId = Math.floor(Math.random() * 10000); // Simulate generating a unique ID
    await fetchPost(postId);
    client.set(postId, post, 60 * 60, (error, result) => {
        if (error) {
            console.error('Error setting cache:', error);
        } else {
            res.status(201).json({ id: postId, post });
        }
    });
});

// Route to update a post
app.put('/posts/:id', bodyParser.json(), async (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;
    const post = `Updated Post: ${title}, Content: ${content}`;
    await fetchPost(postId);
    client.replace(postId, post, 60 * 60, (error, result) => {
        if (error) {
            console.error('Error updating cache:', error);
        } else {
            res.json({ id: postId, post });
        }
    });
});

// Route to delete a post
app.delete('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    await fetchPost(postId);
    client.del(postId, (error, result) => {
        if (error) {
            console.error('Error deleting cache:', error);
        } else {
            res.json({ id: postId, message: 'Deleted successfully' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Blog caching example listening at http://localhost:${port}`);
});
