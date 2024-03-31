const express = require('express');
const path = require('path');
const app = express();
const projectsData = require('./data.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/projects/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= projectsData.projects.length) {
    return next(); 
  }
  const project = projectsData.projects[id];
  res.render('project', { project });
});

app.get('/', (req, res) => {
  res.render('index', { projects: projectsData.projects });
});

app.get('/about', (req, res) => {
  res.render('about', { projectsData: projectsData });
});


app.use((req, res, next) => {
  const err = new Error('Page not found');
  err.status = 404;
  console.error(`Error ${err.status}: ${err.message}`);
  next(err); 
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  const statusCode = err.status || 500;
  const errorMessage = err.message || 'Internal Server Error';
  console.error(`Error ${statusCode}: ${errorMessage}`);
  res.status(statusCode).render('error', { errorMessage });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
