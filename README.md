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

- [x] Opprettet Next.js prosjekt
- [x] Satt opp TypeScript og Tailwind
- [x] Opprettet Git repository
- [x] Koblet prosjekt til GitHub
- [x] Strukturert prosjekt (app, components, lib, types)

### 🗂 Routing

- [x] Implementert route groups `(public)` og `(admin)`
- [x] Opprettet hovedside `/`
- [x] Opprettet `/cars` side
- [x] Opprettet dynamisk route `/cars/[id]`
- [x] Opprettet `/dashboard` (admin)

---

## 🚧 Oppgaver som gjenstår

### 🎨 Frontend (UI)

- [x] Lage Navbar (global layout)
- [ ] Lage Footer
- [ ] Lage Home page design
- [x] Lage Cars list UI (grid)
- [x] Lage CarCard component
- [x] Lage Car detail page design
- [ ] Lage responsive design (mobile)
- [x] Lage bildegalleri på detail page

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
- [x] Opprette PostgreSQL database
- [x] Lage tabeller (cars, users, leads)
- [x] Koble database til backend
- [ ] Migrere til PostgreSQL

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
- [ ] Lage add/edit car form
- [x] Lage delete car funksjon
- [ ] Endre status (til salgs / solgt)

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
- Skalerbar og produksjonsklar webapplikasjon (under utvikling)

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

- [ ] Input-validering
- [ ] Error handling
- [ ] Basic sikkerhet (XSS, osv.)
