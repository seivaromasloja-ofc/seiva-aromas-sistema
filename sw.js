// Seiva Aromas — service worker mínimo, só para permitir instalar o sistema no celular.
// Não guarda cópia das páginas: o sistema sempre carrega a versão mais recente do GitHub.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
