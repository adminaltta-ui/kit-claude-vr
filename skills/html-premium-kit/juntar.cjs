/* JUNTAR: transforma a página em ARQUIVO UNICO, para mandar a alguém ou subir no GitHub e na Vercel.
   Coloca o CSS e o JS locais DENTRO do HTML. Uso:  node juntar.cjs pagina.html [saida.html]
   Sem saida, sobrescreve a propria pagina. Link e script com http(s) ficam como estao (as fontes do Google). */
const fs = require('fs'), path = require('path');
const entrada = process.argv[2], saida = process.argv[3] || entrada;
if (!entrada) { console.log('uso: node juntar.cjs pagina.html [saida.html]'); process.exit(2); }
const dir = path.dirname(path.resolve(entrada));
let h = fs.readFileSync(entrada, 'utf8'), n = 0;
const local = u => u && !/^(https?:)?\/\//.test(u) && !/^data:/.test(u);
h = h.replace(/<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi, tag => {
  const u = (tag.match(/href=["']([^"']+)["']/i) || [])[1]; if (!local(u)) return tag;
  n++; return '<style>\n' + fs.readFileSync(path.join(dir, u), 'utf8') + '\n</style>';
});
h = h.replace(/<script\b[^>]*src=["']([^"']+)["'][^>]*>\s*<\/script>/gi, (tag, u) => {
  if (!local(u)) return tag;
  n++; return '<script>\n' + fs.readFileSync(path.join(dir, u), 'utf8').replace(/<\/script/gi, '<\\/script') + '\n</script>';
});
fs.writeFileSync(saida, h);
console.log(`ok: ${n} arquivo(s) colados dentro de ${path.basename(saida)} (${Math.round(h.length / 1024)} KB)`);
