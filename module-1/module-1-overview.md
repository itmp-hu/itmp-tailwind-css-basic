# 1. modul - Tailwind projekt, alapvető UI formázások

## Mi a Tailwind CSS?

A Tailwind CSS egy **utility-first CSS-keretrendszer**. Ahelyett, hogy egyedi CSS-szabályokat írnál, a stílusokat kis, egycélú osztályok HTML-elemekre való közvetlen alkalmazásával alakítod ki.

**Hagyományos CSS:**

```css
.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #15803d;
  padding: 2rem;
}
```

```html
<h1 class="hero-title">VadonSzava</h1>
```

**Tailwind CSS:**

```html
<h1 class="text-4xl font-bold text-green-700 p-8">VadonSzava</h1>
```

Nincs szükség CSS-fájlra — az osztályok maguk a stílusok. A Tailwind csak a ténylegesen használt CSS-t generálja, így a végső kimenet rendkívül kis méretű lesz.

### Tailwind v4: CSS-alapú konfiguráció

A Tailwind v4 megszünteti a JavaScript konfigurációs fájlt. Minden — az egyedi színek, betűtípusok és design tokenek is — a CSS-fájlban konfigurálható a `@theme {}` blokk segítségével. 

---

## Tailwind + Vite alapprojekt létrehozása 

A Vite és a Tailwind CSS kombinációja ma az egyik leggyorsabb frontend setup.

Előnyei:

- villámgyors fejlesztői szerver (HMR - Hot Module Replacement)
- minimális konfiguráció (Tailwind v4 miatt)
- tiszta projektstruktúra
- production-ready build

A telepítési folyamatot az 1. workshop leírásában találod részletesen.

## Design tokenek 

A Tailwind CSS v4 egy hatalmas ugrás a keretrendszer életében, a középpontban a design tokenek állnak, amelyek mostantól közvetlenül a CSS változókra épülnek.

Leegyszerűsítve a design token egy központi helyen definiált, névvel ellátott érték, amely egy vizuális stílusjegyet (szín, távolság, betűtípus stb.) képvisel.

A korábbi verziókkal ellentétben, ahol a `tailwind.config.js` fájlban JSON-szerű objektumokban tároltuk ezeket, a v4-ben a tokenek natív CSS változók (`--variable-name`).

### Mire használjuk őket?

- **Konzisztencia**: Biztosítják, hogy a "kék" mindenhol ugyanazt az árnyalatot jelentse az oldalon.
- **Skálázhatóság**: Ha a márka színe megváltozik, csak egyetlen változót kell átírnod a CSS-ben, és az összes utility osztály (`bg-brand`, `text-brand`) frissül.
- **Témázhatóság**: Könnyűvé teszik a Sötét/Világos mód vagy egyedi témák kezelését pusztán a változók felülírásával.

### Design tokenek csoportosítása

- **Primitive token:** Nem mondják meg, mire használd őket, csak azt, hogy mik azok. Általában egy skálát alkotnak. Ilyen például `--color-blue-400`, vagy `--text-sm`
- **Semantic token:** Ezek a tokenek már leírják a szerepkört vagy a szándékot. Ahelyett, hogy azt mondanád: "ez kék", azt mondod: "ez az elsődleges akciógomb színe". Példa: `--color-brand-primary: var(--color-sky-500);`
- **Component token:** Ez a legspecifikusabb szint, amit főleg óriási rendszereknél használnak (pl. egy céges appnál). Itt a token már egy konkrét UI elemhez kötődik. Példa: `--header-height`, `--nav-link-padding`, `--input-border-focus`


```css
@theme {
  /* primitive token */
  --color-tura-brown-900;

  /* semantic token*/
  --color-heading: var(--color-tura-brown-900);  
}
```

A `@theme{}` blokkban definiált változókhoz hozzárendelődnek utility osztályok.
Például: `bg-tura-brown-900`, `text-tura-brown-900`, `border-tura-brown-900`, vagy `bg-heading`.

## Tailwind utility osztályok 

A Tailwind CSS v4-ben az osztályok logikája nem változott drasztikusan a v3-hoz képest, de a motor (Engine) sokkal gyorsabb lett, és még természetesebben kezeli a CSS változókat.

### Fontosabb utility osztályok csoportosítása

#### 1. Háttérformázások (Backgrounds)

- Szín: `bg-white`, `bg-slate-100`, `bg-transparent`.
- Átlátszóság: `bg-blue-500/50` (50%-os átlátszóság).
- Háttérképkezelés: `bg-cover`, `bg-contain`, `bg-center`.

#### 2. Betűformázások (Typography)

Minden, ami a szöveg megjelenésével kapcsolatos.

- Méret: `text-xs`, `text-base`, `text-xl`, `text-5xl`.
- Vastagság: `font-light`, `font-normal`, `font-bold`, `font-black`.
- Szín: `text-gray-800`, `text-blue-600`, `text-white/80` (átlátszósággal).
- Igazítás: `text-left`, `text-center`, `text-right`, `text-justify`.
- Dekoráció: `underline`, `italic`, `uppercase`, `tracking-tight` (betűköz).

#### 3. Dobozmodellel (Box Model) kapcsolatos formázások

Ez az alapja minden elrendezésnek. Ide tartoznak a méretek, külső és belső margók, szegélyek.

- Belső margó: `p-{size}` (összes), `px-{size}` (vízszintes), `py-{size}` (függőleges), pt-, pr-, pb-, pl-.
- Külső margó: `m-{size}`, `mx-{size}`, `my-{size}`, mt-, mr-, mb-, ml-.

  Negatív margó is használhatsz: `-m-{size}` (pl. `-mt-4`).
- Méretezés (Width & Height)
  
  Szélesség: `w-{size}` (pl. `w-64`, `w-full`, `w-screen`, `w-1/2`).

  Magasság: `h-{size}` (pl. `h-32`, `h-full`, `h-screen`).

  Határértékek: `min-w-0`, `max-w-7xl`, `min-h-screen`.

- Szegély és Lekerekítés (Border & Radius)

  Szegély vastagsága: `border`, `border-2`, `border-t-4` (csak felül).

  Szegély színe: `border-gray-200`, `border-brand`.

  Lekerekítés: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-full` (teljes kör).

#### 4. Flexbox Layout

A modern webes elrendezések leggyakoribb eszköze.

- Aktiválás: `flex`.
- Irány: `flex-row` (alapértelmezett), `flex-col` (oszlop).
- Igazítás (főtengely): `justify-start`, `justify-center`, `justify-between`, `justify-around`.
- Igazítás (kereszttengely): `items-start`, `items-center`, `items-stretch`.
- Rugalmasság: `flex-1` (kitölti a helyet), `flex-none` (nem nyúlik).
- Gap (Térköz): `gap-4`, `gap-x-8` (elemek közötti távolság).

#### 5. Pozícionálás (Positioning)

Meghatározza, hogyan helyezkedjen el az elem a dokumentumban.

- Típusok: `static`, `relative`, `absolute`, `fixed`, `sticky`.
- Elhelyezés: `top-0`, `right-4`, `bottom-1/2`, `inset-0` (minden oldalról 0).
- Z-index: `z-0`, `z-10`, `z-50`, `z-auto`.
    

További részleteket a Tailwind CSS dokumentációjában találsz a baloldali menüben: https://tailwindcss.com/docs/installation/using-vite