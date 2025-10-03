# ACTION-DEMO

## GitHub Actions Cache Demo 🚀

This repository demonstrates the use of GitHub Actions caching to speed up workflow runs by caching dependencies.

### What is Caching?

GitHub Actions caching allows you to cache dependencies and other commonly reused files between workflow runs. This significantly reduces build times by avoiding redundant downloads and installations.

### Features

- **Node.js Dependency Caching**: Demonstrates caching of `node_modules` directory
- **Cache Hit/Miss Detection**: Shows whether dependencies were restored from cache or installed fresh
- **Automatic Cache Key Generation**: Uses `package-lock.json` hash for intelligent cache invalidation
- **Workflow Dispatch**: Manually trigger the workflow to see caching in action

### How It Works

1. The workflow checks out the code
2. Sets up Node.js environment
3. Attempts to restore `node_modules` from cache using the cache action
4. If cache miss: Installs dependencies and caches them for future runs
5. If cache hit: Skips installation and uses cached dependencies
6. Reports the cache status

### Running the Demo

The cache demo workflow runs automatically on:
- Push to `main` branch
- Pull requests to `main` branch
- Manual workflow dispatch

To see the workflow in action:
1. Go to the "Actions" tab in this repository
2. Select the "Cache Demo" workflow
3. Click "Run workflow" to trigger it manually
4. Observe the cache behavior in the workflow logs

### Cache Benefits

- ⚡ **Faster Builds**: Subsequent runs are significantly faster
- 💰 **Reduced Costs**: Less time spent on dependency installation
- 🌍 **Lower Bandwidth**: Fewer downloads from package registries
- ♻️ **Better Resource Usage**: More efficient use of GitHub Actions minutes

### Application

This repository includes a simple Express.js application that can be run locally:

```bash
npm install
npm start
```

Visit `http://localhost:3000` to see the demo app running.

### Endpoints

- `/` - Welcome message
- `/cache-info` - Information about the caching feature

### Learn More

- [GitHub Actions Caching Documentation](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows)
- [actions/cache Repository](https://github.com/actions/cache)