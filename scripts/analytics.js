const gaScript = document.createElement('script');
gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-J2H6BBV34K";
gaScript.async = true;
document.head.appendChild(gaScript);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-J2H6BBV34K');
