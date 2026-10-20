import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

function teleprompterPlugin() {
  return {
    name: 'teleprompter-route',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/teleprompter' || url === '/teleprompter/' || url === '/teleprompter/index.html') {
          const filePath = path.resolve(process.cwd(), 'public/teleprompter/index.html');
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');
            return fs.createReadStream(filePath).pipe(res);
          }
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/teleprompter' || url === '/teleprompter/' || url === '/teleprompter/index.html') {
          const filePath = path.resolve(process.cwd(), 'dist/teleprompter/index.html');
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');
            return fs.createReadStream(filePath).pipe(res);
          }
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), teleprompterPlugin()],
  build: {
    target: 'es2022',
    cssMinify: true,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion-dom') || id.includes('node_modules/motion-utils')) {
            return 'motion';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
        },
      },
    },
  },
})
