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

- [x] Setup Next.js prosjekt
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
- [ ] Validering av skjema
- [ ] Lagre kontaktmelding i database
- [ ] Admin side (legg til / edit bil)

### 🗂 Routing

- [x] Implementert route groups `(public)` og `(admin)`
- [x] Opprettet hovedside `/`
- [x] Opprettet `/cars` side
- [x] Opprettet dynamisk route `/cars/[id]`
- [x] Opprettet `/dashboard` (admin)

---

### 🎨 Frontend (UI)

- [x] Lage Navbar (global layout)
- [ ] Lage Footer
- [ ] Lage Home page design
- [x] Lage Cars list UI (grid)
- [x] Lage CarCard component
- [x] Lage Car detail page design
- [ ] Lage responsive design (mobile)
- [x] Vise bilde på detail page
- [ ] Lage bildegalleri (carousel)

---

### ⚙️ Backend

- [x] Sette opp API routes
- [ ] Lage cars API (CRUD)
- [x] Lage auth system (login/admin)
- [x] Lage contact/lead system
- [ ] Input validering

---

### 🗄 Database

- [ ] Designe database (ER diagram)
- [x] Opprette database (Prisma + SQLite/Postgres)
- [x] Lage tabeller (cars, users, leads)
- [x] Koble database til backend
- [ ] Migrere fullt til PostgreSQL (production)

---

### 📸 Images

- [ ] Implementere image upload
- [ ] Integrere Cloudinary / storage
- [ ] Koble bilder til biler

---

### 🔐 Admin

- [x] Lage admin dashboard UI
- [x] Lage meldingsoversikt for kundehenvendelser
- [x] Lage delete funksjon for meldinger
- [x] Lage add car from
- [x] Lage edit car form
- [x] Lage delete car funksjon
- [x] Lage delete car funksjon
- [ ] Endre status (til salgs / solgt)
- [x] Lage admin liste over biler
- [x] Lage update car funksjon

---

### 🌍 Deployment

- [ ] Deploy til Vercel
- [ ] Koble database i produksjon
- [ ] Legge til domain

---

## 💼 For portfolio

Dette prosjektet viser:

- Fullstack utvikling (Next.js)
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

- [ ] Integrere PostgreSQL
- [ ] Lage full CRUD API for biler
- [ ] Lagre data i database

### 📸 Bilder

- [ ] Implementere bildeopplasting
- [ ] Koble til Cloudinary / storage

### 🌍 Deployment

- [ ] Deploy til Vercel
- [ ] Koble til database i produksjon
- [ ] Legge til eget domene

### ⚠️ Kvalitet og sikkerhet

- [x] Input-validering (server-side)
- [x] Dynamic year validation
- [x] Error handling (basic UI)
- [ ] Basic sikkerhet (XSS, osv.)
