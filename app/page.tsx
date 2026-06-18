"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  MessageCircle,
  Music,
  Sparkles,
  VolumeX,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const products = [
  { name: "Appala Gampalu", image: "/products/appala-gampalu.png", price: "₹1,800", pieces: "6 Pieces", each: "₹300 each" },
  { name: "Designer Bondam", image: "/products/designer-bondam.png", price: "₹1,800", pieces: "1 Piece", each: "Customizable" },
  { name: "Ganesh Kobbari Bondam", image: "/products/ganesh-kobbari-bondam.png", price: "₹1,800", pieces: "1 Piece", each: "Customizable" },
  { name: "Garagabuddi", image: "/products/garagabuddi.png", price: "₹600", pieces: "1 Piece", each: "Customizable" },
  { name: "Irani Kundalu", image: "/products/irani-kundalu.png", price: "₹800", pieces: "2 Pieces", each: "₹400 each" },
  { name: "Kobbari Bondam", image: "/products/kobbari-bondam.png", price: "₹1,800", pieces: "1 Piece", each: "Customizable" },
  { name: "Kuradi Kundalu", image: "/products/kuradi-kundalu.png", price: "₹1,500", pieces: "5 Pieces", each: "₹300 each" },
  { name: "Designer Kuradi Kundalu", image: "/products/muradu-kundalu.png", price: "₹1,500", pieces: "5 Pieces", each: "₹300 each" },
  { name: "Pesthe Kudukalu", image: "/products/pesthe-kudukalu.png", price: "₹400", pieces: "2 Pieces", each: "₹200 each" },
  { name: "Saana", image: "/products/saana.png", price: "₹500", pieces: "1 Piece", each: "Customizable" },
  { name: "Sharapetta", image: "/products/sharapetta.png", price: "₹1,800", pieces: "1 Piece", each: "Customizable" },
];

const galleryImages = [
  "/gallery/1.JPG", "/gallery/2.JPG", "/gallery/3.JPG", "/gallery/4.JPG",
  "/gallery/5.JPG", "/gallery/6.JPG", "/gallery/7.JPG", "/gallery/8.JPG",
  "/gallery/9.JPG", "/gallery/10.JPG", "/gallery/11.JPG", "/gallery/12.JPG",
  "/gallery/13.JPG", "/gallery/14.JPG", "/gallery/15.JPG", "/gallery/16.JPG",
  "/gallery/17.JPG", "/gallery/18.JPG",
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

function VideoBg({ src, dark = false }: { src: string; dark?: boolean }) {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>

      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-black/62"
            : "bg-gradient-to-b from-black/30 via-[#2B1008]/35 to-[#080301]/90"
        }`}
      />
    </>
  );
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<null | (typeof products)[0]>(null);
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const ammaWhatsApp =
    "https://wa.me/919059062567?text=Namaste%20Seetha%20Kalyanam%20🙏%20I%20am%20interested%20in%20your%20handmade%20wedding%20products.%20Please%20share%20details.";

  const athayaWhatsApp =
    "https://wa.me/919177187333?text=Namaste%20Seetha%20Kalyanam%20🙏%20I%20am%20interested%20in%20customized%20wedding%20creations.%20Please%20share%20details.";

  const emailLink =
    "mailto:seethakalyanam03@gmail.com?subject=Seetha%20Kalyanam%20Order%20Enquiry";

  useEffect(() => {
    const startMusic = () => {
      if (!audioRef.current) return;

      audioRef.current.volume = 0.1;
      audioRef.current
        .play()
        .then(() => setMusicOn(true))
        .catch(() => {});

      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
    } else {
      audioRef.current.volume = 0.1;
      await audioRef.current.play();
      setMusicOn(true);
    }
  };

  return (
    <main className="bg-[#080301] text-[#2B160D]">
      <audio ref={audioRef} src="/audio/ramayana-theme.mp3" loop preload="auto" />

      <nav className="fixed left-0 top-0 z-50 w-full px-3 py-4 md:px-5 md:py-5">
        <div className="liquid-glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 md:px-6">
          <a href="#home" className="font-serif text-lg font-bold text-white md:text-xl">
            Seetha Kalyanam
          </a>

          <div className="hidden gap-7 text-sm font-medium text-white/85 md:flex">
            <a href="#products">Products</a>
            <a href="#gallery">Gallery</a>
            <a href="#story">Our Story</a>
            <a href="#blessings">Blessings</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="rounded-full bg-[#8B1216] px-4 py-2 text-xs font-semibold text-white shadow-xl md:px-5 md:text-sm">
            Order Now
          </a>
        </div>
      </nav>

      <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 text-center md:px-6">
        <VideoBg src="/videos/rama-seetha-hero.mp4" />
        <div className="video-soft-overlay" />
        <div className="section-fade-bottom" />

        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 1.1 }} className="relative z-20 mt-20 max-w-5xl">
          <p className="mb-5 text-[10px] font-semibold tracking-[0.35em] text-[#FFD989] md:text-sm md:tracking-[0.55em]">
            HANDCRAFTED TELUGU WEDDING TRADITIONS
          </p>

          <h1 className="font-serif text-5xl font-bold text-white drop-shadow-2xl md:text-8xl">
            Seetha Kalyanam
          </h1>

          <div className="mx-auto my-6 h-[2px] w-44 bg-gradient-to-r from-transparent via-[#F2C76E] to-transparent md:w-56" />

          <h2 className="text-2xl font-bold text-white md:text-5xl">
            సీతారాముల ఆశీస్సులతో
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 md:text-lg md:leading-8">
            With the blessings of Seetha & Rama, handmade wedding essentials crafted with devotion by Amma and Athaya.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#products" className="rounded-full bg-[#8B1216] px-8 py-4 font-semibold text-white shadow-2xl transition hover:scale-105">
              Explore Collections
            </a>

            <a href="#contact" className="liquid-glass rounded-full px-8 py-4 font-semibold text-white transition hover:scale-105">
              Custom Order
            </a>
          </div>
        </motion.div>
      </section>

      <section id="products" className="relative overflow-hidden px-5 py-24 md:px-6 md:py-32">
        <VideoBg src="/videos/ayodhya-dharbar.mp4" />
        <div className="video-soft-overlay" />
        <div className="section-fade-top" />
        <div className="section-fade-bottom" />

        <div className="relative z-20 mx-auto max-w-7xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="text-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#F2C76E] md:text-sm md:tracking-[0.45em]">
              SACRED COLLECTIONS
            </p>

            <h2 className="font-serif text-4xl font-bold text-white md:text-7xl">
              Handmade Creations
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/85 md:text-base">
              Every piece can be customized with colors, stones, designs, and themes for your auspicious occasion.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-16">
            {products.map((product, index) => (
              <motion.button
                key={product.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.02 }}
                onClick={() => setSelectedProduct(product)}
                className="liquid-card group overflow-hidden rounded-[28px] p-3 text-left md:rounded-[32px] md:p-4"
              >
                <div className="h-56 overflow-hidden rounded-[22px] bg-[#fff4db] md:h-64 md:rounded-[24px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-3 pt-5">
                  <h3 className="text-lg font-bold text-white md:text-xl">{product.name}</h3>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <p className="text-xl font-bold text-[#FFD989] md:text-2xl">{product.price}</p>
                    <p className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white md:text-xs">{product.pieces}</p>
                  </div>

                  <p className="mt-2 text-sm text-white/70">{product.each}</p>

                  <p className="mt-4 flex items-center gap-2 text-sm text-white/85">
                    <Sparkles size={16} className="text-[#FFD989]" />
                    Customization Available
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="relative overflow-hidden bg-[#080301] px-5 py-24 md:px-6 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8B121630,transparent_60%)]" />

        <div className="relative z-20 mx-auto max-w-7xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="text-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#FFD989] md:text-sm md:tracking-[0.45em]">
              OUR REAL CREATIONS
            </p>

            <h2 className="font-serif text-4xl font-bold text-white md:text-7xl">
              Handmade Moments
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
              Real creations made with love, tradition and Seetha Rama blessings.
            </p>
          </motion.div>

          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 md:mt-16 md:gap-6">
            {galleryImages.map((img, index) => (
              <motion.button
                key={img}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: (index % 6) * 0.035 }}
                onClick={() => setSelectedGallery(img)}
                className="liquid-card mb-5 block w-full overflow-hidden rounded-[28px] p-2 transition hover:scale-[1.01] md:mb-6 md:rounded-[32px] md:p-3"
              >
                <img
                  src={img}
                  alt="Seetha Kalyanam real handmade creation"
                  loading="lazy"
                  className="w-full rounded-[22px] object-cover transition duration-700 hover:scale-105 md:rounded-[24px]"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="relative overflow-hidden px-5 py-24 md:px-6 md:py-32">
        <VideoBg src="/videos/family-heritage.mp4" />
        <div className="video-soft-overlay" />
        <div className="section-fade-top" />
        <div className="section-fade-bottom" />

        <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="liquid-card rounded-[32px] p-6 md:rounded-[38px] md:p-10">
            <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#FFD989] md:text-sm md:tracking-[0.4em]">
              OUR STORY
            </p>

            <h2 className="font-serif text-4xl font-bold text-white md:text-6xl">
              Crafted by Amma & Athaya
            </h2>

            <p className="mt-6 text-base leading-8 text-white/85 md:text-lg md:leading-9">
              Seetha Kalyanam began as a family tradition — handmade with love by Amma and Athaya,
              preserving Telugu wedding customs through every kundalu, bondam and sacred creation.
            </p>

            <p className="mt-5 text-sm leading-7 text-white/75 md:text-base">
              Their work carries devotion, patience, and the blessings of Seetha & Rama into every celebration.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
            <motion.div className="liquid-card rounded-[28px] p-4 md:rounded-[32px] md:p-5">
              <div className="h-80 overflow-hidden rounded-[22px] md:h-96 md:rounded-[24px]">
                <img src="/founders/amma.png" alt="Amma" loading="lazy" className="h-full w-full object-cover object-center" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">Amma</h3>
              <p className="text-white/70">Founder & Handmade Artist</p>
            </motion.div>

            <motion.div className="liquid-card rounded-[28px] p-4 md:rounded-[32px] md:p-5">
              <div className="h-80 overflow-hidden rounded-[22px] md:h-96 md:rounded-[24px]">
                <img src="/founders/athaya.png" alt="Athaya" loading="lazy" className="h-full w-full object-cover object-center" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">Athaya</h3>
              <p className="text-white/70">Co-Founder & Creative Artisan</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="blessings" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 py-24 md:px-6 md:py-32">
        <VideoBg src="/videos/hanuman-devotion.mp4" dark />
        <div className="video-soft-overlay" />
        <div className="section-fade-top" />

        <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div />

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="liquid-card rounded-[34px] p-6 md:rounded-[40px] md:p-12">
            <Heart className="mb-6 text-[#FFD989]" size={42} />

            <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#FFD989] md:text-sm md:tracking-[0.4em]">
              BLESSED WITH DEVOTION
            </p>

            <h2 className="font-serif text-4xl font-bold text-white md:text-7xl">
              Crafted With Devotion
            </h2>

            <p className="mt-6 text-base leading-8 text-white/85 md:text-lg md:leading-9">
              Every handmade creation is prepared with care, tradition, and divine blessings for your most auspicious moments.
            </p>

            <div id="contact" className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href={ammaWhatsApp} target="_blank" className="flex items-center justify-center gap-2 rounded-full bg-[#8B1216] px-7 py-4 font-semibold text-white transition hover:scale-105">
                <MessageCircle size={20} />
                Contact Amma
              </a>

              <a href={athayaWhatsApp} target="_blank" className="liquid-glass flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold text-white">
                <MessageCircle size={20} />
                Contact Athaya
              </a>

              <a href={emailLink} className="liquid-glass flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold text-white">
                Email Us
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md">
          <motion.div initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="relative max-h-[92svh] w-full max-w-5xl overflow-auto rounded-[30px] bg-[#FAF6EE] p-4 shadow-2xl md:grid md:grid-cols-2 md:gap-8 md:rounded-[38px] md:p-5">
            <button onClick={() => setSelectedProduct(null)} className="absolute right-4 top-4 z-10 rounded-full bg-[#8B1216] p-3 text-white">
              <X size={20} />
            </button>

            <div className="overflow-hidden rounded-[24px] bg-white md:rounded-[28px]">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full max-h-[520px] w-full object-cover md:max-h-[650px]" />
            </div>

            <div className="flex flex-col justify-center p-3 md:p-5">
              <p className="mt-4 text-xs font-semibold tracking-[0.3em] text-[#A67A27] md:mt-0 md:text-sm md:tracking-[0.35em]">
                SEETHA KALYANAM
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold text-[#8B1216] md:text-5xl">
                {selectedProduct.name}
              </h2>

              <p className="mt-5 text-3xl font-bold md:text-4xl">{selectedProduct.price}</p>
              <p className="mt-2 text-lg">{selectedProduct.pieces}</p>
              <p className="mt-2 text-[#7B5B2A]">{selectedProduct.each}</p>

              <div className="mt-6 rounded-3xl border border-[#D8B767] bg-white/60 p-5">
                <p className="font-semibold text-[#8B1216]">✨ Customization Available</p>
                <p className="mt-2 text-sm leading-7">
                  Colors, stones, design style, and wedding theme can be customized based on your function.
                </p>
              </div>

              <a href={ammaWhatsApp} target="_blank" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#8B1216] px-8 py-4 font-semibold text-white">
                <MessageCircle size={20} />
                Ask for Custom Order
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {selectedGallery && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl">
          <button onClick={() => setSelectedGallery(null)} className="absolute right-5 top-5 rounded-full bg-[#8B1216] p-4 text-white">
            <X />
          </button>

          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src={selectedGallery} alt="Seetha Kalyanam gallery preview" className="max-h-[88svh] max-w-[94vw] rounded-[26px] shadow-2xl md:rounded-[35px]" />
        </div>
      )}

      <button onClick={toggleMusic} className="liquid-glass fixed bottom-5 right-5 z-[200] rounded-full p-4 text-white transition hover:scale-110 md:bottom-6 md:right-6 md:p-5" aria-label="Toggle music">
        {musicOn ? <Music size={22} /> : <VolumeX size={22} />}
      </button>
    </main>
  );
}