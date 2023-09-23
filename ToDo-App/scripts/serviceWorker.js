const staticTodoApp = "ToDoApp-site-v1"
const assets = [
    "/",
    "/index.html",
    "/mis-tareas.html",
    "/signup.html",
    "/css/globalStyles.css",
    "/css/loginSignupStyles.css",
    "/css/tasksStyles.css",
    "/scripts/login.js",
    "/scripts/signup.js",
    "/scripts/tasks.js",
    "/scripts/utils.js",
    "/assets/icon.png",
    "/assets/loader.gif"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticTodoApp).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})