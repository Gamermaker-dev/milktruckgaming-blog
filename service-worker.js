/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2021/10/28/introduction/index.html",
    "revision": "bd5cb61519ed918e7ff2f39915a3b883"
  },
  {
    "url": "404.html",
    "revision": "d839d0ede612bf2a2dbef303398b3184"
  },
  {
    "url": "anime/index.html",
    "revision": "7b606c8362a03d634769f2a2cbdb6c4f"
  },
  {
    "url": "assets/css/0.styles.c874a581.css",
    "revision": "3892f6ae7ab3e8cfcfdffda72f3383d1"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/js/10.8f7538ba.js",
    "revision": "e365aaf13cfa936f89f302ec7ab57d40"
  },
  {
    "url": "assets/js/11.95f68035.js",
    "revision": "5e9362c5a4a45306270258a2ce8b2288"
  },
  {
    "url": "assets/js/12.9a82dfc2.js",
    "revision": "70a699556e1f091158e7551f622ebe11"
  },
  {
    "url": "assets/js/13.0012c0e1.js",
    "revision": "7b9ed334411caae18e357aa88ed6815f"
  },
  {
    "url": "assets/js/14.04dfd157.js",
    "revision": "10129a37cbebf324421d501658a417d3"
  },
  {
    "url": "assets/js/15.9ef95f52.js",
    "revision": "d499b8f59819dd217226d11701c698da"
  },
  {
    "url": "assets/js/16.809607a4.js",
    "revision": "b3b3ca751ea263548ddcecdd74910e94"
  },
  {
    "url": "assets/js/17.53fe01e0.js",
    "revision": "cfd6b55a11c4eb63c166ea70fcebf88a"
  },
  {
    "url": "assets/js/18.bf9c1462.js",
    "revision": "d82df51c1a4857310ce309ba504b2970"
  },
  {
    "url": "assets/js/19.9480f82b.js",
    "revision": "814a71247839d0ac0a3deead4377e137"
  },
  {
    "url": "assets/js/20.96071165.js",
    "revision": "e3cdb39666bb7ad918d466a1daac97c6"
  },
  {
    "url": "assets/js/21.f5975583.js",
    "revision": "86427fe6c3853afcec80526461e67ace"
  },
  {
    "url": "assets/js/22.4f409f80.js",
    "revision": "ff9f90832ecfd3a65dd9512c62ec476b"
  },
  {
    "url": "assets/js/23.a38d9250.js",
    "revision": "ee9c04ebc6b4d74727ddfcb15fcb6c2d"
  },
  {
    "url": "assets/js/24.2e4113ad.js",
    "revision": "c364b57d357384b818fe2541972122da"
  },
  {
    "url": "assets/js/25.5df456f2.js",
    "revision": "9d137b9556173ecf2dbf7113eb982307"
  },
  {
    "url": "assets/js/3.fe32f60e.js",
    "revision": "80533a7fa8a03672b4b5a6c01954ee6e"
  },
  {
    "url": "assets/js/4.14f9deb9.js",
    "revision": "2248e3b8ac0fac2976d2c18338478abe"
  },
  {
    "url": "assets/js/5.78dc512e.js",
    "revision": "f686e745117027c65afdb6168a7591af"
  },
  {
    "url": "assets/js/6.137dae0f.js",
    "revision": "0d03ad284761630804329722b28b6d79"
  },
  {
    "url": "assets/js/7.9b52c576.js",
    "revision": "078e3e619d23d76ebcdbd447ee310b24"
  },
  {
    "url": "assets/js/8.cbcf01d2.js",
    "revision": "0d9b087bfe717b080b759fe62f5614f6"
  },
  {
    "url": "assets/js/9.28234810.js",
    "revision": "003ae1902a8d3bc45faf71698459f91e"
  },
  {
    "url": "assets/js/app.2af4a597.js",
    "revision": "c7c0c60454bacf47641ecd75a35f04f9"
  },
  {
    "url": "assets/js/vuejs-paginate.bd83baaf.js",
    "revision": "011f2b8b531e6a5570017d232be8944b"
  },
  {
    "url": "devotions/first-devotion/index.html",
    "revision": "54e7000577d40369a58996f2554a5d7e"
  },
  {
    "url": "devotions/index.html",
    "revision": "97ff0ebb68023dd474e96c2136f04e89"
  },
  {
    "url": "games/day-1-sonic/index.html",
    "revision": "3976c85a670d36186572dff0d9b61418"
  },
  {
    "url": "games/day-2-pokemon-red/index.html",
    "revision": "f4e170aebac05d3907fefee792b3758d"
  },
  {
    "url": "games/day-3-ff7/index.html",
    "revision": "f8a3d6b93c225e4a259abc9b4246be2e"
  },
  {
    "url": "games/day-4-spyro/index.html",
    "revision": "9f6d27ab1ebbf917eff8fa5a484fcc1d"
  },
  {
    "url": "games/day-5-jak-and-daxter/index.html",
    "revision": "a7235952fb3a4b9fd235421bb63f4a65"
  },
  {
    "url": "games/index.html",
    "revision": "3def4c53e81d83a3ec2fffe80030484b"
  },
  {
    "url": "images/hero.png",
    "revision": "30de96853e777159eea9376075d78bfe"
  },
  {
    "url": "index.html",
    "revision": "460c6e629496ada1efd268a674dbc506"
  },
  {
    "url": "life/dogs-insecurities-trust/index.html",
    "revision": "f11955dd9449c94f3f3fe389da8f2585"
  },
  {
    "url": "life/index.html",
    "revision": "a8411f18ce990223f081607060f693a9"
  },
  {
    "url": "projects/index.html",
    "revision": "05679f23c5f3db44999b2de2c81d0fd9"
  },
  {
    "url": "tag/23/index.html",
    "revision": "d49ff7fe2e6ce6d55312ea1e8c699a47"
  },
  {
    "url": "tag/30 Days of Gaming/index.html",
    "revision": "4f42df0142d76545f660a69ae817a15f"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "76b703576d1a6eb7ea718261b4291c71"
  },
  {
    "url": "tag/childhood/index.html",
    "revision": "47a41d3e67c5c333d9b3506fbeb8b8fa"
  },
  {
    "url": "tag/devotion/index.html",
    "revision": "d3971afedc329c6dcc02887f2a2900db"
  },
  {
    "url": "tag/dogs/index.html",
    "revision": "c0e1f67c7004a5bb68aae18ecd1e11f7"
  },
  {
    "url": "tag/Final Fantasy VII/index.html",
    "revision": "979c30379e93985b3cd0452b87db68a8"
  },
  {
    "url": "tag/Final Fantasy/index.html",
    "revision": "e920e2ccb70b67364dc5f5c694e6d013"
  },
  {
    "url": "tag/humour/index.html",
    "revision": "1fa8489a74d25e8072ffc491b9b11714"
  },
  {
    "url": "tag/index.html",
    "revision": "173a7af44c5eaa10901e5a83302d53c6"
  },
  {
    "url": "tag/introduction/index.html",
    "revision": "b080f4208df9a60268a67eb78ffb6b16"
  },
  {
    "url": "tag/Jak and Daxter/index.html",
    "revision": "dfb9f7dad7ffab670d034c9df24087cc"
  },
  {
    "url": "tag/life/index.html",
    "revision": "d17842e4a57298262f11be5030a8a438"
  },
  {
    "url": "tag/pokemon/index.html",
    "revision": "18796ed020b1bde43f552bb7ac38b54d"
  },
  {
    "url": "tag/psalm/index.html",
    "revision": "a3e5e4b94d4cc6dd348fb7ffbbe7c3e1"
  },
  {
    "url": "tag/psalms/index.html",
    "revision": "e05c83fd85952086369bbe1d2b747d3b"
  },
  {
    "url": "tag/Ripto's Rage/index.html",
    "revision": "a6f3ce475f89de1c50b34473fe983ad5"
  },
  {
    "url": "tag/sonic/index.html",
    "revision": "0bb617a98c95882315dc6f7ec1b8b5de"
  },
  {
    "url": "tag/Spyro the Dragon/index.html",
    "revision": "a94b8f21a657c0a09d26b9e40d24c844"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
