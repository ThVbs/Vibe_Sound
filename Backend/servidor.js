const express = require("express")
const app = express()
const PORT = 3000;
const pg = require("pg")
const bcrypt = require("bcrypt")
const path = require('path')

app.use(express.json());
const cors = require("cors");
app.use(cors());

/* Nome do banco de dados criado no pgAdmin: Vibesound
   Nome da tabela: usuarios */
const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Vibesound", /*nome do banco de dados criado no postgres/pgAdmin */
    password: "postgres",
    port: 5432,
    max: 5,
    idleTimeoutMillis: 30000 
});

app.get("/", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../Frontend/Views/login.html"));
    } 
    catch(erro) {
        res.status(418).send(`Erro de conexão: ${erro.message}`);
    }
})

/* Endpoints para cadastrar usuário, fazer login e excluir usuário */
app.post("/api/registrar", async (req, res) => {
    try {
      const { nome, data_nascimento, telefone, email, senha } = req.body;
      if (!nome || !data_nascimento || !telefone || !senha || !email) {
        return res.status(400).send("Todos os dados são obrigatórios: " + erro.message);
      }
      const hash = await bcrypt.hash(senha, 10);
      await pool.query(
        "INSERT INTO usuarios(nome, data_nascimento, telefone, email, senha) VALUES($1, $2, $3, $4, $5)",
        [nome, data_nascimento, telefone, email, hash]
      );
      res.status(201).send("Usuário registrado com sucesso");
    } catch (erro) {
      console.erro("Erro ao registrar usuário: ", erro.message);
      res.status(500).send("Erro ao registrar usuário: " + erro.message );
    }
});
  
app.post("/api/login", async (req, res) => {
    try {
        const { email, senha } = req.body;
        const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
        if (result.rows.length === 0) {
        return res.status(404).send("Usuário não encontrado: " + erro.message);
        }
        const user = result.rows[0];
        const validPassword = await bcrypt.compare(senha, user.senha);
        if (!validPassword) {
        return res.status(401).send("Senha incorreta: "+erro.message);
        }
        res.status(200).send("Login bem-sucedido");
    } catch (erro) {
        console.erro("Erro ao fazer login: ", erro.message);
        res.status(500).send("Erro ao fazer login: " + erro.message);
    }
});
  
app.delete("/api/deletaruser", async (req, res) => {
    try {
        const { id } = req.body;
        const result = await pool.query("DELETE FROM usuarios WHERE usuario_id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
        }
        res.status(200).send("Usuário excluído com sucesso");
    } catch (erro) {
        console.erro("Erro ao excluir usuário: ", erro.message);
        res.status(500).send("Erro ao excluir usuário" + erro.message);
    }
});
  
app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta localhost:${PORT}`)
})

// Endpoint para mostrar todas as músicas na tela principal
async function dbSelectMusicas() {
    try {
        const responseDB = await pool.query("SELECT * FROM musicas")
        return responseDB.rows
    } catch (erro) {
        console.log("A consulta retornou o seguinte erro: " + erro.message)
        throw erro; 
    }
}
app.get("/api/musicas", async (req, res) => {
    try {
        const responseDB = await dbSelectMusicas()
        res.json(responseDB)
    } catch (erro) {
        res.status(500).send("Erro ao buscar músicas: " + erro.message)
    }
});

// Endpoints para o administrador adicionar(post), editar(put) e deletar(delete) a lista de músicas global
async function dbAdicionarMusica(titulo, album, duracao, genero, artista, musica_url) {
    try {
        const respondeDB = await pool.query("INSERT INTO musicas (titulo, album, duracao, genero, artista, musica_url) VALUES ($1,$2,$3,$4,$5,$6)",[titulo, album, duracao, genero, artista, musica_url])
    } catch (erro) {
        console.log("A consulta retornou o seguinte erro: " + erro.message)
        throw erro;
    }
}
app.post("/api/musicas", async (req, res) => {
    try {
        await dbAdicionarMusica(
            req.body.titulo,
            req.body.album,
            req.body.duracao,
            req.body.genero,
            req.body.artista,
            req.body.musica_url
        );
        res.status(201).send("Música adicionada com sucesso");
    } catch (erro) {
        res.status(500).send("Erro ao adicionar música: " + erro.message);
    }
});

async function dbEditarMusica(id, titulo, album, duracao, genero, artista, musica_url) {
    try {
        const responseDB = await pool.query(`UPDATE musicas SET titulo=$2, album=$3, duracao=$4, genero=$5, artista=$6, musica_url=$7 WHERE id = $1;`,[id, titulo, album, duracao, genero, artista, musica_url])
    } catch (erro) {
        console.log("A consulta retornou o seguinte erro: " + erro.message)
        throw erro;
    }
}
app.put("/api/musicas", async (req,res)=>{
    try {
        await dbEditarMusica(
            req.body.id,
            req.body.titulo,
            req.body.album,
            req.body.duracao,
            req.body.genero,
            req.body.artista,
            req.body.musica_url
        );
        res.status(201).send("Musica editada com sucesso")
    } catch (erro) {
        res.status(500).json({ erro: "Erro moderador ao editar música: " + erro.message })
    }
})

async function dbExcluirMusica(id) {
    try {
        const responseDB = await pool.query(`DELETE FROM musicas WHERE id=$1`,[id])
    } catch (erro) {
        console.log("A consulta retornou o seguinte erro: " + erro.message)
        throw erro; 
    }
}
app.delete("/api/musicas", async(req,res)=>{
    try {
        await dbExcluirMusica(req.body.id)
        res.status(201).send("Musica excluida com sucesso")
    } catch (erro) {
        res.status(500).json({ erro: "Erro moderador ao deletar música: " + erro.message })
    }
})

// Endpoints para o usuário ver a lista de musicas pessoal(get),postar uma nova música(post) e deletar uma musica(delete)
async function dbSelectListaUsuario() {
    try {
        const responseDB = await pool.query("SELECT * FROM lista_musicas")
        return responseDB.rows
    } catch (erro) {
        console.log("A consulta retornou o seguinte erro: " + erro.message)
        throw erro; 
    }
}
app.get("/api/lista/user", async (req,res)=>{
    try {
        const responseDB = await dbSelectListaUsuario()
        res.json(responseDB)
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar músicas: " + erro.message })
    }
})

async function dbAdicionarMusicaLista(usuario_id, musica_id) {
    try {
        const respondeDB = await pool.query("INSERT INTO lista_musicas (usuario_id, musica_id) VALUES ($1,$2)",[usuario_id, musica_id])
    } catch (erro) {
        console.log("A consulta retornou o seguinte erro: " + erro.message)
        throw erro; // Lança o erro para ser tratado no endpoint
    }
}
app.post("/api/lista/user", async (req, res) => {
    try {
        await dbAdicionarMusicaLista(
            req.body.usuario_id,
            req.body.musica_id
        );
        res.status(201).send("Música adicionada a lista com sucesso");
    } catch (erro) {
        res.status(500).send("Erro ao adicionar música: " + erro.message);
    }
});

async function dbExcluirMusicaLista(id) {
    try {
        const responseDB = await pool.query(`DELETE FROM lista_musicas WHERE id=$1`,[id])
    } catch (erro) {
        console.log("A consulta retornou o seguinte erro: " + erro.message)
        throw erro; 
    }
}
app.delete("/api/lista/user", async(req,res)=>{
    try {
        await dbExcluirMusicaLista(req.body.id)
        res.status(201).send("Musica excluida com sucesso")
    } catch (erro) {
        res.status(500).send("Erro moderador ao deletar música: " + erro.message )
    }
})