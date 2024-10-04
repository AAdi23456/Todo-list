const express = require('express');
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors())
let items = [
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Build a To-Do List', completed: false },
    { id: 3, task: 'Master JavaScript', completed: false }
];

// Get all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Add a new item
app.post('/api/items', (req, res) => {
    const newItem = { id: Date.now(), ...req.body };
    items.push(newItem);
    res.json(newItem);
});

// Update an item
app.put('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id == req.params.id);
    if (item) {
     item.completed=!item.completed
     console.log(items)
        res.json(item);
        
    } else {
        res.status(404).send('Item not found');
    }
});

// Delete an item
app.delete('/api/items/:id', (req, res) => {
    items = items.filter(i => i.id != req.params.id);
    res.json({ success: true });
    console.log(items);
    
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
