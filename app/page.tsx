"use client";

import Image from "next/image";
import { useState } from "react";

const DIRECTIONS = "https://maps.app.goo.gl/jDgP2zoeXUoRQ2UP6";
const PHONE = "tel:+84965030442";
const MESSENGER = "https://m.me/mrjameschicken";

const categories = [
  { id: "burgers", label: "Chicken burgers" },
  { id: "fried", label: "Fried chicken" },
  { id: "sides", label: "Sides" },
  { id: "drinks", label: "Desserts & drinks" },
] as const;

type Category = (typeof categories)[number]["id"];

const menu: { category: Category; name: string; price: string; description: string; detail?: string }[] = [
  { category: "burgers", name: "Classic Crispy Chicken Burger", price: "115,000₫", description: "Crispy chicken breast, house pickles, lettuce and diner sauce on a buttery brioche bun. Served with seasoned fries.", detail: "Add cheese +15,000₫" },
  { category: "burgers", name: "Spicy Cave Trekker Burger", price: "125,000₫", description: "Spicy chicken fillet with cayenne glaze, jalapeños, purple cabbage slaw and chipotle mayo. Served with fries." },
  { category: "burgers", name: "Double Stack Chicken Burger", price: "160,000₫", description: "Two crispy chicken fillets with cheddar, grilled onions, pickles and a smoked barbecue spread." },
  { category: "fried", name: "3-Piece Crispy Basket", price: "135,000₫", description: "Two drumsticks and a bone-in thigh in seasoned buttermilk batter. Served with chips and a garlic dip." },
  { category: "fried", name: "Wild Honey Glazed Chicken", price: "135,000₫", description: "Crispy chicken finished with wild honey and cracked pepper. Served with golden potato chips." },
  { category: "fried", name: "6-Piece Hand-Breaded Tenders", price: "120,000₫", description: "Chicken breast tenders in seasoned flour, served with ranch or spicy honey." },
  { category: "sides", name: "Hand-Cut Russet Potato Chips", price: "45,000₫", description: "Thick-cut potatoes fried until golden, with rosemary, garlic salt and cracked pepper." },
  { category: "sides", name: "Crisp Homemade Coleslaw", price: "35,000₫", description: "Cabbage, carrot and parsley in a tangy buttermilk and apple cider dressing." },
  { category: "drinks", name: "Crisp Fried Apple Pie", price: "50,000₫", description: "Warm pastry filled with cinnamon-spiced apples, finished with sugar and vanilla drizzle." },
  { category: "drinks", name: "Cold Beverages & Fresh Limeade", price: "25–40,000₫", description: "Sodas, iced lemon tea, limeade with mint, mineral water and Saigon lager." },
];

const favorites = [
  { name: "Classic Crispy Chicken Burger", price: "115,000₫", image: "/images/hero-burger-illustrative.png", alt: "Illustrative serving of a crispy chicken burger with fries", caption: "Illustrative serving", description: "The crisp, generous burger people come back for." },
  { name: "3-Piece Crispy Basket", price: "135,000₫", image: "/images/crispy-basket-illustrative.png", alt: "Illustrative serving of three pieces of crispy chicken with fries and garlic dip", caption: "Illustrative serving", description: "Golden fried chicken, chips and a house dip." },
  { name: "Wild Honey Glazed Chicken", price: "135,000₫", image: "/images/wild-honey-illustrative.png", alt: "Illustrative serving of honey-glazed fried chicken with potato chips", caption: "Illustrative serving", description: "A sweet and savory finish with pepper and honey." },
];

const reviews = [
  { name: "Liam W.", source: "Melbourne, Australia · Google Review", quote: "Hands down the best chicken burger I have eaten anywhere in Southeast Asia. After a 2-day jungle trek in Phong Nha caves, this place hit the spot. Super fresh, juicy chicken and great chips." },
  { name: "Nguyễn Tuấn", source: "Phong Nha Local Guide · Verified Visit", quote: "Gà rất tươi và thơm ngon! Thịt gà đồi tự nhiên săn chắc chứ không bở như gà công nghiệp. Chủ quán nhiệt tình và mến khách. Cả gia đình tôi thường ghé ăn mỗi cuối tuần." },
  { name: "Sophie K.", source: "Germany · Backpacker & Food Lover", quote: "The crispiness of the chicken is unmatched, and knowing it is fresh made all the difference. Fair prices in VND and the friendliest atmosphere. A must-visit when in Phong Nha." },
];

function Icon({ name, size = 20 }: { name: "pin" | "arrow" | "clock" | "star" | "phone" | "menu" | "close"; size?: number }) {
  const paths = {
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    star: <path d="m12 2 3.1 6.3 7 1-5 4.9 1.2 6.9-6.3-3.3-6.3 3.3 1.2-6.9-5-4.9 7-1Z" />,
    phone: <path d="M6.6 2.8 9.7 6l-1.6 2.3a15 15 0 0 0 7.6 7.6l2.3-1.6 3.2 3.1-1.8 3.6C10.2 20.4 3.6 13.8 3 4.6l3.6-1.8Z" />,
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
    close: <path d="M5 5l14 14M19 5 5 19" />,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill={name === "star" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Brand() {
  return <span className="brand-lockup"><span className="brand-mark" aria-hidden="true"><Image src="/images/mr-james-logo.png" alt="Mr. James Chicken logo" width={120} height={120} priority /></span><span className="brand-type"><strong>MR. JAMES<br />CHICKEN</strong><small>PHONG NHA</small></span></span>;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("burgers");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleMenu = menu.filter((item) => item.category === activeCategory);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>

    <header className="site-header" id="home">
      <div className="header-inner shell">
        <a href="#home" className="brand-link" aria-label="Mr. James Chicken, home" onClick={() => setMenuOpen(false)}><Brand /></a>
        <nav className="main-nav" aria-label="Main navigation"><a href="#home">Home</a><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#reviews">Reviews</a><a href="#visit">Visit</a></nav>
        <a className="header-directions" href={DIRECTIONS} target="_blank" rel="noopener noreferrer"><Icon name="pin" size={18} /> Get directions</a>
        <button className="nav-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="main-navigation-mobile" onClick={() => setMenuOpen((open) => !open)}><Icon name={menuOpen ? "close" : "menu"} size={25} /></button>
      </div>
      <nav id="main-navigation-mobile" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation"><a href="#menu" onClick={() => setMenuOpen(false)}>Explore menu</a><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a><a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a><a href="#visit" onClick={() => setMenuOpen(false)}>Hours & location</a></nav>
    </header>

    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><div className="hero-copy-inner"><h1 id="hero-title">MR. JAMES<br />CHICKEN</h1><p className="hero-place">PHONG NHA</p><p className="hero-experience">30+ YEARS OF COOKING</p><p className="hero-intro">Crispy chicken, generous burgers and a welcome worth stopping for. Find us on ĐT20 in the heart of Phong Nha.</p><div className="hero-actions"><a className="button button-primary" href={DIRECTIONS} target="_blank" rel="noopener noreferrer"><Icon name="pin" /> Get directions</a><a className="button button-outline" href="#menu">View menu <Icon name="arrow" /></a></div></div></div>
        <figure className="hero-media"><Image src="/images/hero-burger-illustrative.png" alt="Illustrative serving of a crispy chicken burger with fries" fill priority sizes="(max-width: 760px) 100vw, 55vw" /><figcaption>Illustrative serving</figcaption></figure>
      </section>

      <section className="proof-strip" aria-label="Restaurant details"><div className="shell proof-grid"><div><Icon name="star" size={26} /><p><strong>4.9 RATING</strong><span>Google reviews</span></p></div><div><span className="proof-since">1984</span><p><strong>SINCE 1984</strong><span>Gabriel’s experience</span></p></div><div><Icon name="clock" size={28} /><p><strong>OPEN DAILY</strong><span>10:00 AM – 10:30 PM</span></p></div><div><Icon name="pin" size={29} /><p><strong>ĐT20 · PHONG NHA</strong><span>Walk in and eat with us</span></p></div></div></section>

      <section className="favorites section-space shell" id="bestsellers" aria-labelledby="favorites-title"><div className="section-title-row"><h2 id="favorites-title">OUR BESTSELLERS</h2><a href="#menu" className="text-link">See the full menu <Icon name="arrow" size={18} /></a></div><div className="favorites-grid">{favorites.map((item) => <article className="favorite" key={item.name}><div className="favorite-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /><span>{item.caption}</span></div><div className="favorite-body"><div className="favorite-heading"><h3>{item.name}</h3><strong>{item.price}</strong></div><p>{item.description}</p></div></article>)}</div></section>

      <section className="menu-section section-space" id="menu" aria-labelledby="menu-title"><div className="shell"><div className="menu-heading"><div><h2 id="menu-title">THE MENU</h2><p>Find your reason to stop in. Prices are in Vietnamese đồng.</p></div><span className="menu-stamp">COOKED FRESH<br />TO ORDER</span></div><div className="menu-filters" role="group" aria-label="Menu categories">{categories.map((category) => <button type="button" key={category.id} aria-pressed={activeCategory === category.id} className={activeCategory === category.id ? "is-active" : ""} onClick={() => setActiveCategory(category.id)}>{category.label}</button>)}</div><div className="menu-list" aria-live="polite" key={activeCategory}>{visibleMenu.map((item) => <article className="menu-item" key={item.name}><div className="menu-item-top"><h3>{item.name}</h3><strong>{item.price}</strong></div><p>{item.description}</p>{item.detail && <small>{item.detail}</small>}</article>)}</div><div className="menu-note"><p>Ready to eat? We welcome walk-ins for dine-in and takeaway.</p><a href={DIRECTIONS} target="_blank" rel="noopener noreferrer">Find the restaurant <Icon name="arrow" size={18} /></a></div></div></section>

      <section className="story section-space shell" id="story" aria-labelledby="story-title"><div className="story-year" aria-hidden="true"><span>SINCE</span><strong>1984</strong><span>IN THE KITCHEN</span></div><div className="story-copy"><h2 id="story-title">A GOOD MEAL HAS A STORY.</h2><p>Mr. Gabriel began working in restaurants in 1984. More than three decades in kitchens taught him the value of careful preparation, balanced seasoning and food that brings people to the table.</p><p>Today, Mr. James Chicken welcomes Phong Nha neighbors and travelers looking for a satisfying meal after a day out. Come in, take a seat and find your favorite.</p><a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="text-link">Visit Gabriel’s kitchen <Icon name="arrow" size={18} /></a></div></section>

      <section className="reviews-section section-space" id="reviews" aria-labelledby="reviews-title"><div className="shell"><div className="reviews-heading"><h2 id="reviews-title">GOOD WORD TRAVELS.</h2><div><span aria-hidden="true">★★★★★</span><strong>4.9 / 5 Google rating</strong></div></div><div className="reviews-grid">{reviews.map((review) => <figure className="review" key={review.name}><blockquote>“{review.quote}”</blockquote><figcaption><strong>{review.name}</strong><span>{review.source}</span></figcaption></figure>)}</div></div></section>

      <section className="visit-section section-space" id="visit" aria-labelledby="visit-title"><div className="shell visit-grid"><div className="visit-copy"><h2 id="visit-title">COME HUNGRY.<br />LEAVE HAPPY.</h2><p>We’re on ĐT20 in Phong Nha. Drop in for a burger, a crispy chicken basket or something to share.</p><div className="visit-actions"><a className="button button-light" href={DIRECTIONS} target="_blank" rel="noopener noreferrer"><Icon name="pin" /> Get directions</a><a className="button button-ghost" href={PHONE}><Icon name="phone" /> Call us</a></div></div><div className="visit-details"><div><span>ADDRESS</span><p>ĐT20, tổ dân phố Xuân Tiến<br />Phong Nha, Quảng Trị 47257, Vietnam</p></div><div><span>OPENING HOURS</span><p>Every day<br />10:00 AM – 10:30 PM</p></div><div><span>SERVICE</span><p>Dine-in · Takeaway · Walk-ins welcome</p></div><div><span>PHONE</span><p><a href={PHONE}>+84 965 030 442</a></p></div></div></div></section>
    </main>

    <footer className="site-footer"><div className="shell footer-top"><a href="#home" className="brand-link" aria-label="Mr. James Chicken, back to top"><Brand /></a><nav aria-label="Footer navigation"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#reviews">Reviews</a><a href="#visit">Visit</a><a href={MESSENGER} target="_blank" rel="noopener noreferrer">Messenger</a></nav></div><div className="shell footer-bottom"><span>© 2026 Mr. James Chicken Phong Nha</span><span>ĐT20 · Xuân Tiến · Phong Nha</span></div></footer>
    <nav className="mobile-actions" aria-label="Quick actions"><a href="#menu">View menu</a><a href={DIRECTIONS} target="_blank" rel="noopener noreferrer"><Icon name="pin" size={17} /> Directions</a></nav>
  </>;
}
