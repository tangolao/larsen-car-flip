# 🚗 Larsen CarFlip

## 📌 Prosjektbeskrivelse

Dette er en fullstack webapplikasjon for kjøp, reparasjon og salg av brukte biler i Norge.

---

## 🛠 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Git & GitHub

---

## 🚀 Hvordan kjøre prosjektet

```bash
npm install
npm run dev
```

## ✅ Fremdrift (Hva er gjort)

### 🧱 Setup

- [x] Setup NeXt.js prosjekt
- [x] Routing med App Router
- [x] Opprettet /cars side
- [x] Hentet data fra Prisma (database)
- [x] Vist liste med biler (CarCard)
- [x] Klikkbar bil → går til detail page
- [x] Dynamic route /cars/[id]
- [x] Viser bilde fra public
- [x] Viser pris, år, km, drivstoff, girkasse
- [x] Viser description på detail page
- [x] Kontakt skjema (ContactSellerForm)

## 🚧 Oppgaver som gjenstår

- [ ] Bedre styling (hover / animation)
- [x] Validering av skjema
- [x] Lagre kontaktmelding i database
- [x] Admin side (legg til / edit bil)

### 🗂 Routing

- [x] Implementert route groups `(public)` og `(admin)`
- [x] Opprettet hovedside `/`
- [x] Opprettet `/cars` side
- [x] Opprettet dynamisk route `/cars/[id]`
- [x] Opprettet `/dashboard` (admin)

---

### 🎨 Frontend (UI)

- [x] Lage Navbar (global layout)
- [x] Lage Footer
- [x] Lage Home page design
- [x] Lage Cars list UI (grid)
- [x] Lage CarCard component
- [x] Lage Car detail page design
- [x] Lage responsive design (mobile)
- [x] Vise bilde på detail page
- [x] Lage bildegalleri
- [ ] Lage interaktiv carousel

---

### ⚙️ Backend

- [x] Sette opp API routes
- [x] Lage cars API (CRUD)
- [ ] Lage auth system (NextAuth / Better Auth)
- [x] Enkel admin login
- [x] Beskyttede admin-ruter
- [x] Lage contact/lead system
- [x] Input validering

---

### 🗄 Database

- [x] Designe database (ER diagram)
- [x] Opprette database (Prisma + SQLite/Postgres)
- [x] Lage tabeller (cars, users, leads)
- [x] Koble database til backend
- [x] Migrere fullt til PostgreSQL (Neon)

---

### 📸 Images

- [ ] Implementere image upload
- [ ] Integrere Cloudinary / storage
- [x] Koble bilder til biler
- [x] Flere bilder per bil
- [x] Bildegalleri på detaljside

---

### 📸 Multi Image Gallery

- [x] CarImage relation
- [x] One-to-many image structure
- [x] Admin kan legge til flere bilder
- [x] Hovedbilde genereres automatisk
- [x] Thumbnail gallery på detaljside

---

### 🔐 Admin

- [x] Lage admin dashboard UI
- [x] Lage meldingsoversikt for kundehenvendelser
- [x] Lage delete funksjon for meldinger
- [x] Lage add car from
- [x] Lage edit car form
- [x] Lage delete car funksjon
- [x] Endre status (til salgs / solgt)
- [x] Lage admin liste over biler
- [x] Lage update car funksjon

---

### 🌍 Deployment

- [x] Deploy til Vercel
- [x] Koble database i produksjon
- [ ] Legge til domain

---

## 💼 For portfolio

Dette prosjektet viser:

- Fullstack utvikling (NeXt.js)
- Routing og struktur
- API design
- Database design
- Autentisering og sikkerhet
- Skalerbar webapplikasjon med fokus på videre utvikling mot produksjon

## 🚀 Status

Dette prosjektet er under utvikling og er per nå på portfolio-nivå.  
Målet er å videreutvikle det til en produksjonsklar applikasjon.

---

## 🔮 Videre arbeid (Production Ready)

### 🔐 Autentisering

- [x] Login system
- [x] Beskyttede admin-ruter
- [x] Logout system

### 🗄 Database og backend

- [x] Integrere PostgreSQL (Neon)
- [x] Lage full CRUD funksjonalitet for biler
- [x] Lagre data i database

### 📸 Bilder

- [ ] Implementere bildeopplasting
- [ ] Koble til Cloudinary / storage

### ⚠️ Kvalitet og sikkerhet

- [x] Input-validering (server-side)
- [x] Dynamic year validation
- [x] Error handling (basic UI)
- [ ] Basic sikkerhet (XSS, osv.)
