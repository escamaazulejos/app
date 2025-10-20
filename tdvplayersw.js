// Importa as bibliotecas necessárias do Firebase
importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-messaging.js');

// Inicializa o Firebase
firebase.initializeApp({
    apiKey:             'AIzaSyCMagGPLVM2pmaOc0uM6DXIV-FDdSEpxjg',
    projectId:          'tdvremote',
    messagingSenderId:  '498700427739',
    appId:              '1:498700427739:web:fecf2f1441975690b247fe'
});

// Inicializa o Firebase Messaging apenas se suportado pelo navegador
var messaging;
if (firebase.messaging.isSupported()) {
    messaging = firebase.messaging();

    // Manipula mensagens recebidas em background (quando o app está fechado)
    messaging.setBackgroundMessageHandler(function(payload) {
        const notificationTitle = payload.notification.title || 'Notificação';
        const notificationOptions = {
            body: payload.notification.body || '',
            icon: payload.notification.icon || '/icon.png'
        };

        return self.registration.showNotification(notificationTitle, notificationOptions);
    });
}

// Garante que o service worker ativa imediatamente após instalação
self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
});

// Garante que o service worker toma controle de todas as abas abertas
self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});

// Intercepta as requisições de rede
self.addEventListener('fetch', function(event) {
    const request = event.request;

    // Evita problemas com requisições específicas
    if ((request.cache === 'only-if-cached') && (request.mode !== 'same-origin')) return;
    if (request.url.indexOf('swbypass=true') >= 0) return;

    event.respondWith(
        fetch(request).catch(function() {
            // Se a requisição falhar (ex: offline), tenta buscar no cache
            return caches.match(request, { ignoreSearch: true, ignoreMethod: true })
                .then(function(response) {
                    if (response) {
                        return response;
                    }
                    // Caso não exista cache, retorna uma resposta genérica válida
                    return new Response('Network request failed and no cache available.', {
                        status: 408,
                        statusText: 'Offline or network error'
                    });
                });
        })
    );
});
