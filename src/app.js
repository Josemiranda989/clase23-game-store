const express = require('express')
const path = require('path')
const app = express()

// Config static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.get('/detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'detail.html'))
})

app.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'create.html'))
})

app.get('*', (req, res) => {
  res.send(`
  <div style="display:flex; flex-direction:column; align-items:center">
  <h1>Esta pagina no existe loco</h1>
  <img style="width:50%" src="/img/not-found.webp" alt="error-404">
  </div>  
  `)
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port} 😎🙌`)
})