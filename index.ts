import { serve } from "https://deno.land/std@0.207.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.207.0/http/file_server.ts";
import { dirname, fromFileUrl } from "https://deno.land/std@0.207.0/path/mod.ts";


import npm from "https://deno.land/x/npm/mod.ts";
const particlesPackage = await npm("particles.js");

const port = 8000;
const __dirname = dirname(fromFileUrl(import.meta.url));

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  let filepath = url.pathname;

  if (filepath === "/" || filepath === "") {
    filepath = "/src/index.html";
  }

  try {
    const response = await serveFile(request, `${__dirname}${filepath}`);
    
    if (filepath.endsWith('.css')) {
      response.headers.set('Content-Type', 'text/css');
    } else if (filepath.endsWith('.js')) {
      response.headers.set('Content-Type', 'application/javascript');
    }
    return response;
  } catch {
    return new Response("404 Not Found", { status: 404 });
  }
}

console.log(`Server running on http://localhost:${port}`);
await serve(handleRequest, { port });