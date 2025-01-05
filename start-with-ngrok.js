import { exec } from 'child_process';
import ngrok from 'ngrok';

(async function start() {
  // Start the Vite server
  const vite = exec('pnpm run dev');

  // Forward Vite's output to the current terminal
  vite.stdout.pipe(process.stdout);
  vite.stderr.pipe(process.stderr);

  // Wait a bit for the server to start
  setTimeout(async () => {
    const url = await ngrok.connect(5173);
    console.log(`ngrok tunnel created: ${url}`);
  }, 3000); // Adjust delay as needed
})();
