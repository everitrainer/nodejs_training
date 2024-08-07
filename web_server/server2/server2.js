const http = require('http');
const url = require('url');
const PORT = 3000;
// Sample data 
let data = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' },];

// Create server 
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parsedUrl.pathname;
    // Handle different methods 
    if (path === '/items' && method === 'GET') {
        // Get all items 
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } else if (path === '/item' && method === 'POST') {
        // Add new item 
        let body = ''; req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const newItem = JSON.parse(body);
            newItem.id = data.length + 1; data.push(newItem);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newItem));
        });
    } else if (path.startsWith('/item/') && method === 'PUT') {
        // Update an item 
        const id = parseInt(path.split('/')[2], 10);
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const updatedItem = JSON.parse(body);
            data = data.map(item => item.id === id ? { ...item, ...updatedItem } : item);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(updatedItem));
        });
    } else if (path.startsWith('/item/') && method === 'PATCH') {
        // Partial update of an item 
        const id = parseInt(path.split('/')[2], 10);
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const patchData = JSON.parse(body);
            data = data.map(item => {
                if (item.id === id) {
                    return { ...item, ...patchData };
                }
                return item;
            });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data.find(item => item.id === id)));
        });
    }
    else if (path.startsWith('/item/') && method === 'DELETE') {
        // Delete an item 
        const id = parseInt(path.split('/')[2], 10);
        data = data.filter(item => item.id !== id);
        res.writeHead(204); // No content 
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
// Start server 
server.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}/`); });