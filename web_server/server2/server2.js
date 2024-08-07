const http = require('http');
const url = require('url');
const PORT = 3000;
// Sample games 
const games = [
    { id: 1, name: 'Super Fun Kids', category: 'kids', price: 19.99, quantity: 3 },
    { id: 2, name: 'Epic Adventure', category: 'adults', price: 49.99, quantity: 1 },
    { id: 3, name: 'Battle Royale', category: 'war', price: 39.99, quantity: 2 },
    { id: 4, name: 'Puzzle Mania', category: 'kids', price: 14.99, quantity: 4 },
    { id: 5, name: 'Strategy Master', category: 'adults', price: 59.99, quantity: 1 },
    { id: 6, name: 'Space Invaders', category: 'adults', price: 29.99, quantity: 2 },
    { id: 7, name: 'War Heroes', category: 'war', price: 44.99, quantity: 1 },
    { id: 8, name: 'Adventure Quest', category: 'kids', price: 24.99, quantity: 3 },
    { id: 9, name: 'Combat Fury', category: 'war', price: 39.99, quantity: 2 },
    { id: 10, name: 'Mystery Solver', category: 'adults', price: 34.99, quantity: 2 }
];
// Create server 
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    // console.log(parsedUrl)
    const method = req.method;
    const path = parsedUrl.pathname;
    // Handle different methods 
    if (path === '/games' && method === 'GET') {
        // Get all games
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(games));
    } else if (path === '/game' && method === 'POST') {
        // Add new game 

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        console.log("POST")
        req.on('end', () => {
            console.log(body)
            const newItem = JSON.parse(body);
            newItem.id = games.length + 1;
            games.push(newItem);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newItem));
        });
    } else if (path.startsWith('/game/') && method === 'PUT') {
        // Update an item 
        const id = parseInt(path.split('/')[2], 10);
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const updatedItem = JSON.parse(body);
            games = games.map(item => item.id === id ? { ...item, ...updatedItem } : item);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(updatedItem));
        });
    } else if (path.startsWith('/game/') && method === 'PATCH') {
        // Partial update of an item 
        const id = parseInt(path.split('/')[2], 10);
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const patchData = JSON.parse(body);
            games = games.map(item => {
                if (item.id === id) {
                    return { ...item, ...patchData };
                }
                return item;
            });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(games.find(item => item.id === id)));
        });
    } else if (path.startsWith('/game/') && method === 'DELETE') {
        // Delete an item 
        const id = parseInt(path.split('/')[2], 10);
        games = games.filter(item => item.id !== id);
        res.writeHead(204); // No content 
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
// Start server 
server.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}/`); });