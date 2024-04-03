const conf = {
    apiKey: String(import.meta.env.VITE_FB_APIKEY),
    authDomain: String(import.meta.env.VITE_FB_AUTHDOMAIN),
    projectId: String(import.meta.env.VITE_FB_PROJECTID),
    storageBucket: String(import.meta.env.VITE_FB_STORAGEBUCKET),
    messagingSenderId: String(import.meta.env.VITE_FB_MESSAGINGSENDERID),
    appId: String(import.meta.env.VITE_FB_APPID),
}

export default conf;
