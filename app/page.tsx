"use client";

import Image from "next/image";
import { useState } from "react";

const menu = [
  { category: "burgers", badge: "#1 Bestseller", name: "Classic Crispy Chicken Burger", price: "115,000₫", usd: "~$4.50", copy: "Crunchy organic chicken breast, homemade pickles, crisp lettuce, and diner sauce on a buttery brioche bun. Includes seasoned fries.", note: "Served with hand-cut fries", extra: "Add cheese +15,000₫" },
  { category: "burgers", badge: "Spicy Special", name: "Spicy Cave Trekker Burger", price: "125,000₫", usd: "~$4.90", copy: "Double-dipped spicy organic fillet tossed in cayenne glaze, jalapeños, purple cabbage slaw, and chipotle mayo. Includes fries.", note: "Served with hand-cut fries", extra: "Extra kick" },
  { category: "burgers", badge: "Giant Feast", name: "Double Stack Chicken Burger", price: "160,000₫", usd: "~$6.30", copy: "Two crispy organic fillets, double melted cheddar, grilled onions, crunchy pickles, and house smoked barbecue spread.", note: "Huge post-cave portion", extra: "Very filling" },
  { category: "fried", badge: "House Heritage", name: "3-Piece Crispy Basket", price: "135,000₫", usd: "~$5.30", copy: "Two organic drumsticks and one bone-in thigh soaked in seasoned buttermilk. Served with homemade chips and sweet garlic dip.", note: "Includes 2 house dips", extra: "Hot & juicy" },
  { category: "fried", badge: "Pure Tenderloin", name: "6-Piece Hand-Breaded Tenders", price: "120,000₫", usd: "~$4.70", copy: "Whole strips of fresh organic chicken breast dredged in seasoned flour. Light, extra crunchy, served with ranch or spicy honey.", note: "Kid & adult favorite", extra: "100% breast meat" },
  { category: "sides", badge: "Fresh Cut", name: "Hand-Cut Russet Potato Chips", price: "45,000₫", usd: "~$1.75", copy: "Thick-cut country potatoes fried until golden and crisp, dusted in rosemary, garlic salt, and cracked pepper.", note: "Made fresh daily", extra: "Piping hot" },
  { category: "sides", badge: "Cool & Crisp", name: "Crisp Homemade Coleslaw", price: "35,000₫", usd: "~$1.40", copy: "Finely shredded local cabbage, carrot, and fresh parsley tossed in chilled tangy buttermilk and apple cider vinaigrette.", note: "Refreshing balance", extra: "Scratch made" },
  { category: "drinks", badge: "Diner Dessert", name: "Crisp Fried Apple Pie", price: "50,000₫", usd: "~$2.00", copy: "Flaky pastry pocket stuffed with cinnamon-spiced caramel apples, dusted with confectioner sugar and vanilla drizzle.", note: "Warm & comforting", extra: "Sweet finish" },
  { category: "drinks", badge: "Cold Drinks", name: "Cold Beverages & Fresh Limeade", price: "25–40,000₫", usd: "~$1.00–$1.60", copy: "Local craft sodas, iced lemon tea, fresh Vietnamese limeade with mint, mineral water, and Saigon lager.", note: "Ice-cold refresher", extra: "Great after caving" },
];

const filters = [
  ["burgers", "Chicken Burgers"],
  ["fried", "Fried Chicken Combos"],
  ["sides", "Homestyle Chips & Sides"],
  ["drinks", "Desserts & Cold Drinks"],
];

const bestsellers = [
  { image: "/images/chicken-burger.png", badge: "#1 TOP BESTSELLER", name: "Mr. James Chicken Burger", price: "115,000₫", usd: "~$4.50 USD", label: "Signature House Bun", copy: "Thick organic fried chicken fillet, house-brined crunchy pickles, fresh greens, and secret diner mayo on toasted brioche. Served with hand-cut fries.", detail: "Voted #1 Burger in Phong Nha" },
  { image: "/images/crispy-combo.png", badge: "ORGANIC CRUNCH", name: "Crispy Heritage Combo", price: "145,000₫", usd: "~$5.70 USD", label: "24-Hr Brined", copy: "Golden drumstick, bone-in thigh, and crisp tender fillet seasoned in herb buttermilk batter. Served with golden fries and homemade garlic-lime dip.", detail: "Mild or Spicy Rub" },
  { image: "/images/honey-chicken.png", badge: "GABRIEL'S SPECIAL", name: "Wild Honey Glazed Chicken", price: "135,000₫", usd: "~$5.30 USD", label: "Wild Forest Honey", copy: "Crisp battered organic chicken basted after frying with Quang Binh wild flower honey, cracked black pepper, and sea salt.", detail: "Local Mountain Honey" },
];

const reviews = [
  { initials: "LW", name: "Liam W.", meta: "Melbourne, Australia · Google Review", quote: "Hands down the best chicken burger I have eaten anywhere in Southeast Asia. After a 2-day jungle trek in Phong Nha caves, this place hit the spot. Super fresh, juicy chicken and great chips." },
  { initials: "NT", name: "Nguyễn Tuấn", meta: "Phong Nha Local Guide · Verified Visit", quote: "Gà rất tươi và thơm ngon! Thịt gà đồi tự nhiên săn chắc chứ không bở như gà công nghiệp. Chủ quán nhiệt tình và mến khách. Cả gia đình tôi thường ghé ăn mỗi cuối tuần." },
  { initials: "SK", name: "Sophie K.", meta: "Germany · Backpacker & Food Lover", quote: "The crispiness of the chicken is unmatched, and knowing it is fresh made all the difference. Fair prices in VND and the friendliest atmosphere. A must-visit when in Phong Nha." },
];

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("burgers");

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="notice-bar">
        <div className="notice-inner"><span className="open-chip"><i />Open Daily</span><span>10:00 AM – 10:30 PM · ĐT20, Phong Nha National Park Region</span><span className="policy-chip">Dine-in · Takeaway · Walk-ins welcome</span><a href="tel:+84965030442">+84 965 030 442</a></div>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#hero" aria-label="Mr. James Chicken home">
            <Image src="/images/logo.png" width={56} height={56} alt="Mr. James Chicken Phong Nha logo" priority />
            <span><strong>Mr. James Chicken</strong><small>Phong Nha · Organic & Fresh</small></span>
          </a>
          <nav aria-label="Main navigation"><a href="#menu">Menu</a><a href="#bestsellers">Bestsellers</a><a href="#story">Our Story</a><a href="#reviews">Reviews</a><a href="#location">Find Us</a></nav>
          <div className="header-actions"><span className="language"><b>EN</b><span>VI</span></span><a className="direction-small" href="https://maps.google.com/?q=Mr.+James+Chicken+Phong+Nha+Vietnam" target="_blank" rel="noreferrer"><Icon>➤</Icon><span>Directions</span></a></div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow-row"><span className="eyebrow"><Icon>❧</Icon> Organic chicken and always fresh</span><span className="eyebrow pale"><Icon>⌂</Icon> Dine-in & takeaway</span></div>
              <h1>Fresh, artisanal chicken in the heart of Phong Nha</h1>
              <p className="lead">Welcome to Phong Nha&apos;s haven for crispy fried chicken, chicken burgers, and homestyle hospitality. Crafted with over 30 years of culinary experience and cooked fresh to order every day.</p>
              <div className="hero-actions"><a className="button primary" href="#menu"><Icon>☷</Icon>Explore food menu</a><a className="button amber" href="https://maps.google.com/?q=Mr.+James+Chicken+Phong+Nha+Vietnam" target="_blank" rel="noreferrer"><Icon>➤</Icon>Find on Google Maps</a><a className="button outline" href="https://m.me/mrjameschicken" target="_blank" rel="noreferrer"><Icon>✉</Icon>Messenger</a></div>
              <div className="facts"><div><strong>4.9 <span className="stars">★★★★★</span></strong><small>Google Reviews</small></div><div><strong>ĐT20 Road</strong><small>Xuân Tiến, Phong Nha</small></div><div><strong><i className="live-dot" /> 10:00 – 22:30</strong><small>Open all 7 days</small></div></div>
            </div>
            <div className="hero-plaque">
              <div className="plaque-top"><span>Since 1984 expertise</span><span>Phong Nha National Park</span></div>
              <div className="emblem"><Image src="/images/heritage-logo.png" fill sizes="240px" alt="Mr. James Chicken heritage emblem" /><b>Freshly prepared</b></div>
              <h2>Mr. James Chicken Phong Nha</h2>
              <p>Handcrafted chicken burgers, golden crunchy drumsticks, and comforting sides after a day of cave trekking.</p>
              <div className="dining-note"><Icon>♨</Icon><span><strong>Dine-in & Takeaway</strong><small>No reservations needed</small></span><b>✓</b></div>
            </div>
          </div>
        </section>

        <section className="section" id="bestsellers">
          <div className="container">
            <div className="section-heading split"><div><span className="kicker">✓ Traveler & local favorites</span><h2>Phong Nha&apos;s signature bestsellers</h2></div><p>Fresh chicken hand-seasoned and cooked to crisp perfection. Generous portions packed with flavor for hungry explorers.</p></div>
            <div className="bestseller-grid">{bestsellers.map((item, index) => <article className={`food-card ${index === 0 ? "featured" : ""}`} key={item.name}><div className="food-photo"><Image src={item.image} fill sizes="(max-width: 768px) 100vw, 33vw" alt={item.name} /><span className="food-badge">{item.badge}</span><small>{item.label}</small></div><div className="food-title"><h3>{item.name}</h3><div><b>{item.price}</b><small>{item.usd}</small></div></div><p>{item.copy}</p><div className="card-foot"><span>♡ {item.detail}</span><b>Dine-in fresh</b></div></article>)}</div>
          </div>
        </section>

        <section className="section menu-section" id="menu">
          <div className="container">
            <div className="section-heading centered"><span className="kicker">Cooked to order</span><h2>Food & beverage menu</h2><p>Every piece is cut by hand, seasoned, and fried to crispy golden perfection upon your order. Clear prices in VND with tourist approximations.</p></div>
            <div className="filters" role="group" aria-label="Filter menu categories">{filters.map(([key, label]) => <button type="button" className={activeCategory === key ? "active" : ""} onClick={() => setActiveCategory(key)} aria-pressed={activeCategory === key} key={key}>{label}</button>)}</div>
            <div className="menu-grid">{menu.filter((item) => item.category === activeCategory).map((item) => <article className="menu-card" key={item.name}><div className="menu-price"><span>{item.badge}</span><div><b>{item.price}</b><small>{item.usd}</small></div></div><h3>{item.name}</h3><p>{item.copy}</p><div className="card-foot"><span>{item.note}</span><b>{item.extra}</b></div></article>)}</div>
            <div className="policy-banner"><Icon>♨</Icon><div><h3>Fresh from our pans to your table</h3><p>We prioritize quality and serve every order at its best. Walk right in—no reservations required.</p></div><a className="button primary" href="tel:+84965030442">☎ +84 965 030 442</a></div>
          </div>
        </section>

        <section className="section" id="story">
          <div className="container story-grid">
            <div className="story-plaque"><Image src="/images/story-logo.png" width={210} height={210} alt="Mr. James Chicken heritage emblem" /><span>Since 1984 heritage craft</span><h3>Mr. Gabriel&apos;s Kitchen</h3><p>ĐT20, tổ dân phố Xuân Tiến, Phong Nha</p><b className="stamp">✓ Over 3 decades of craft</b></div>
            <div className="story-copy"><span className="kicker">Culinary experience & passion</span><h2>Over three decades in the kitchen: Mr. Gabriel&apos;s story</h2><p>Mr. Gabriel began his journey in the restaurant world in 1984. Across more than 30 years of culinary dedication, he developed a deep respect for honest cooking, balanced seasoning, and the joy of sharing hearty comfort food.</p><div className="story-list"><div><h3>1. Local chicken, prepared fresh</h3><p>Good ingredients and careful preparation let the natural richness of the food lead every bite.</p></div><div><h3>2. A welcoming table for travelers & locals</h3><p>Our diner brings together cave explorers, backpackers, and Phong Nha families craving genuine comfort meals.</p></div><div><h3>3. Handcrafted care in every bun & basket</h3><p>Every order is made with time-tested seasoning, patience, and warm hospitality.</p></div></div><blockquote>“When you cook with fresh ingredients and genuine care, food speaks every language. Welcome to our table in Phong Nha.” — Mr. Gabriel</blockquote></div>
          </div>
        </section>

        <section className="section reviews-section" id="reviews"><div className="container"><div className="section-heading centered"><span className="rating">★★★★★ <b>4.9 / 5.0 Google rating</b></span><h2>Loved by travelers & locals</h2><p>Feedback from international cave trekkers, holiday tourists, and Phong Nha residents.</p></div><div className="review-grid">{reviews.map((review) => <article className="review-card" key={review.name}><span className="stars">★★★★★</span><blockquote>“{review.quote}”</blockquote><div><span className="avatar">{review.initials}</span><p><b>{review.name}</b><small>{review.meta}</small></p></div></article>)}</div></div></section>

        <section className="section" id="location"><div className="container location-grid"><div className="location-copy"><span className="kicker">Find us in Phong Nha</span><h2>Hours & location</h2><p>Located on the prominent ĐT20 road in the Xuân Tiến neighborhood, conveniently reachable by scooter, bicycle, or walking from major town hostels and hotels.</p><div className="hours-card"><div><h3>◷ Diner operating hours</h3><span>OPEN DAILY</span></div><p><b>Monday – Sunday</b><strong>10:00 AM – 10:30 PM</strong></p><p><b>Service</b><span>Dine-in · Takeaway · Walk-ins welcome</span></p></div><div className="contact-points"><div><Icon>⌖</Icon><p><b>Address</b><small>ĐT20, tổ dân phố Xuân Tiến, Phong Nha, Quảng Trị 47257, Vietnam</small></p></div><div><Icon>☎</Icon><p><b>Phone / Hotline</b><a href="tel:+84965030442">+84 965 030 442</a></p></div></div><div className="hero-actions"><a className="button primary" href="https://maps.google.com/?q=Mr.+James+Chicken+Phong+Nha+Vietnam" target="_blank" rel="noreferrer">⌖ Open in Google Maps</a><a className="button outline" href="https://m.me/mrjameschicken" target="_blank" rel="noreferrer">✉ Message Facebook</a></div></div><div className="map-card"><div className="map-image"><Image src="/images/phong-nha-map.png" fill sizes="(max-width: 900px) 100vw, 50vw" alt="Map of Phong Nha around ĐT20" /><div className="map-pin"><Icon>⌖</Icon><b>Mr. James Chicken</b><small>ĐT20, Xuân Tiến</small></div></div><div><p><b>ĐT20, tổ dân phố Xuân Tiến</b><span>Phong Nha, Quảng Trị 47257, Vietnam</span></p><a className="button amber" href="https://maps.google.com/?q=Mr.+James+Chicken+Phong+Nha+Vietnam" target="_blank" rel="noreferrer">Get directions</a></div></div></div></section>

        <section className="section connect-section"><div className="container"><div className="section-heading centered"><span className="kicker">Say hello</span><h2>Connect with Mr. James Chicken</h2><p>Visiting Phong Nha or have questions about our menu?</p></div><div className="connect-grid"><a href="tel:+84965030442"><Icon>☎</Icon><h3>Direct phone call</h3><b>+84 965 030 442</b><span>Call during restaurant hours.</span></a><a href="https://m.me/mrjameschicken" target="_blank" rel="noreferrer"><Icon>✉</Icon><h3>Facebook Messenger</h3><b>mrjameschicken</b><span>Message for directions or questions.</span></a><a href="https://maps.google.com/?q=Mr.+James+Chicken+Phong+Nha+Vietnam" target="_blank" rel="noreferrer"><Icon>⌖</Icon><h3>Google Maps</h3><b>Phong Nha, Quảng Trị</b><span>Read reviews and navigate easily.</span></a></div></div></section>
      </main>

      <footer><div className="container footer-inner"><div className="footer-main"><div className="brand"><Image src="/images/logo.png" width={56} height={56} alt="Mr. James Chicken logo" /><span><strong>Mr. James Chicken Phong Nha</strong><small>Freshly prepared · Since 1984 heritage</small></span></div><nav aria-label="Footer navigation"><a href="#menu">Food Menu</a><a href="#bestsellers">Bestsellers</a><a href="#story">Our Story</a><a href="#location">Hours & Location</a><a href="tel:+84965030442">Call Hotline</a></nav></div><div className="copyright"><span>© 1984–2026 Mr. James Chicken Phong Nha. All rights reserved.</span><span>ĐT20, Xuân Tiến, Phong Nha, Vietnam</span></div></div></footer>
      <nav className="mobile-actions" aria-label="Quick actions"><a href="tel:+84965030442">☎<span>Call</span></a><a href="#menu">☷<span>Menu</span></a><a href="https://maps.google.com/?q=Mr.+James+Chicken+Phong+Nha+Vietnam" target="_blank" rel="noreferrer">⌖<span>Directions</span></a></nav>
    </>
  );
}
