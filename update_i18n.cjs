const fs = require('fs');
let code = fs.readFileSync('src/i18n.ts', 'utf8');

const reps = [
  {
    lang: 'en',
    insertAfter: '"step3Download": "Click Download",',
    content: `
      "howToIntro1": "With TikTok's global popularity, the demand for downloading videos from this platform has been growing significantly. However, many users are not entirely satisfied with the built-in download feature on TikTok due to various reasons.",
      "howToIntro2": "Many users prefer third-party tools because they want to avoid watermarks and handle restricted content. In this guide, we will show you how to use TikFlow - a free TikTok video downloader that works on all platforms.",
      "step1VTitle": "Select the TikTok video you want to download on your phone or browser.",
      "step2VTitle": "Tap/Click on the Share/Arrow icon and select 'Copy link'.",
      "step3VTitle": "Open your web browser and go to TikFlow (tikflow-prstyadev.vercel.app).",
      "step4VTitle": "Paste the copied link into TikFlow's input field (or let auto-paste do it).",
      "step5VTitle": "Click the 'Download' button to start processing the video.",
      "step6VTitle": "Choose your preferred format (HD Video / No Watermark).",
      "step7VTitle": "Save the video directly to your device gallery or download folder.",`
  },
  {
    lang: 'id',
    insertAfter: '"step3Download": "Klik Unduh",',
    content: `
      "howToIntro1": "Dengan popularitas global TikTok, permintaan untuk mengunduh video dari platform ini telah berkembang pesat. Namun, banyak pengguna tidak sepenuhnya puas dengan fitur unduhan bawaan di TikTok karena berbagai alasan.",
      "howToIntro2": "Banyak pengguna lebih memilih alat pihak ketiga karena ingin menghindari tanda air dan menangani konten yang dibatasi. Dalam panduan ini, kami akan menunjukkan cara menggunakan TikFlow - pengunduh video TikTok gratis yang berfungsi di semua platform.",
      "step1VTitle": "Pilih video TikTok yang ingin Anda unduh di ponsel atau peramban Anda.",
      "step2VTitle": "Ketuk/Klik ikon Bagikan/Panah dan pilih 'Salin tautan'.",
      "step3VTitle": "Buka peramban web Anda dan buka TikFlow (tikflow-prstyadev.vercel.app).",
      "step4VTitle": "Tempel tautan yang disalin ke bidang masukan TikFlow (atau biarkan tempel otomatis melakukannya).",
      "step5VTitle": "Klik tombol 'Unduh' untuk mulai memproses video.",
      "step6VTitle": "Pilih format pilihan Anda (Video HD / Tanpa Tanda Air).",
      "step7VTitle": "Simpan video langsung ke galeri perangkat atau folder unduhan Anda.",`
  },
  {
    lang: 'es',
    insertAfter: '"step3Download": "Haz clic en Descargar",',
    content: `
      "howToIntro1": "Con la popularidad mundial de TikTok, la demanda para descargar videos de esta plataforma ha crecido significativamente. Sin embargo, muchos usuarios no están completamente satisfechos con la función de descarga incorporada en TikTok debido a varias razones.",
      "howToIntro2": "Muchos usuarios prefieren herramientas de terceros porque quieren evitar las marcas de agua y manejar contenido restringido. En esta guía, te mostraremos cómo usar TikFlow - un descargador de videos de TikTok gratuito que funciona en todas las plataformas.",
      "step1VTitle": "Selecciona el video de TikTok que quieres descargar en tu teléfono o navegador.",
      "step2VTitle": "Toca/Haz clic en el icono de Compartir/Flecha y selecciona 'Copiar enlace'.",
      "step3VTitle": "Abre tu navegador web y ve a TikFlow (tikflow-prstyadev.vercel.app).",
      "step4VTitle": "Pega el enlace copiado en el campo de entrada de TikFlow (o deja que lo haga el pegado automático).",
      "step5VTitle": "Haz clic en el botón 'Descargar' para empezar a procesar el video.",
      "step6VTitle": "Elige tu formato preferido (Video HD / Sin marca de agua).",
      "step7VTitle": "Guarda el video directamente en la galería de tu dispositivo o en la carpeta de descargas.",`
  },
  {
    lang: 'fr',
    insertAfter: '"step3Download": "Cliquez sur Télécharger",',
    content: `
      "howToIntro1": "Avec la popularité mondiale de TikTok, la demande de téléchargement de vidéos de cette plateforme a considérablement augmenté. Cependant, de nombreux utilisateurs ne sont pas entièrement satisfaits de la fonction de téléchargement intégrée à TikTok pour diverses raisons.",
      "howToIntro2": "De nombreux utilisateurs préfèrent les outils tiers car ils souhaitent éviter les filigranes et gérer les contenus restreints. Dans ce guide, nous allons vous montrer comment utiliser TikFlow - un téléchargeur de vidéos TikTok gratuit qui fonctionne sur toutes les plateformes.",
      "step1VTitle": "Sélectionnez la vidéo TikTok que vous souhaitez télécharger sur votre téléphone ou votre navigateur.",
      "step2VTitle": "Appuyez/Cliquez sur l'icône Partager/Flèche et sélectionnez 'Copier le lien'.",
      "step3VTitle": "Ouvrez votre navigateur Web et accédez à TikFlow (tikflow-prstyadev.vercel.app).",
      "step4VTitle": "Collez le lien copié dans le champ de saisie de TikFlow (ou laissez le collage automatique le faire).",
      "step5VTitle": "Cliquez sur le bouton 'Télécharger' pour lancer le traitement de la vidéo.",
      "step6VTitle": "Choisissez votre format préféré (Vidéo HD / Sans filigrane).",
      "step7VTitle": "Enregistrez la vidéo directement dans la galerie de votre appareil ou le dossier de téléchargement.",`
  }
];

reps.forEach(r => {
  code = code.replace(r.insertAfter, r.insertAfter + r.content);
});

fs.writeFileSync('src/i18n.ts', code);
