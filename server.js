import express from 'express';

const app = express();
app.use(express.json());

let users = [];
let livros = [];


app.post('/usuarios', (req, res) => {
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/usuarios', (req, res) => {
    res.status(200).json(users);
});

app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id == id);

    if (index === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    users[index] = { ...users[index], ...req.body };
    res.status(200).json(users[index]);
});


app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id == id);

    if (index === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    users.splice(index, 1);
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
});

// Livros
app.post('/livros', (req, res) => {
    const newBook = { id: Date.now(), ...req.body };
    livros.push(newBook);
    res.status(201).json(newBook);
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});


app.put('/livros/:id', (req, res) => {
    const { id } = req.params;
    const index = livros.findIndex(livro => livro.id == id);

    if (index === -1) {
        return res.status(404).json({ message: 'Livro não encontrado' });
    }

    livros[index] = { ...livros[index], ...req.body };
    res.status(200).json(livros[index]);
});

app.delete('/livros/:id', (req, res) => {
    const { id } = req.params;
    const index = livros.findIndex(livro => livro.id == id);

    if (index === -1) {
        return res.status(404).json({ message: 'Livro não encontrado' });
    }

    livros.splice(index, 1);
    res.status(200).json({ message: 'Livro deletado com sucesso' });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
