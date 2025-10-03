const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from GitHub Actions Cache Demo! 🚀');
});

app.get('/cache-info', (req, res) => {
  res.json({
    message: 'This application demonstrates GitHub Actions caching',
    feature: 'Node modules are cached to speed up workflow runs',
    benefit: 'Faster builds and reduced dependency installation time'
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Cache Demo app listening at http://localhost:${port}`);
  });
}

module.exports = app;
