# 1. modul - Workshop:  Tailwind projekt készítés, navigáció, hero section, lábléc elkészítése

**Cél**: A workshop végére lesz egy futó Vite projekted Tailwind CSS v4-gyel, egy CSS-ben definiált egyéni design rendszerrel, egy stílusozott navigációs sávval, egy teljes képernyőnyi hero szakcióval és egy lábléccel.

---

## 1. feladat: A frontendes projekt létrehozása

### 1.1. Vite projekt lérehozása

A Visual Studio Code-ban nyisd meg a terminált (`CTRL+Ö`) és azon belül a git bash-t!

Futtasd a következő npm parancsot:

```bash
npm create vite@latest vadonszava -- --template vanilla
```

- Az `Install with npm and start now?` kérdésre nyomj egy `Enter`-t. 
- Létrehoz egy Vite alap projektet JavaScript sablonnal egy `vadonszava` mappán belül és elindul a fejlesztői szerver. Megtekintheted a futó weboldaladat a `http://localhost:5173/` url-re kattintva.
- A szerver futását `CTRL+C` billentyűkombinációval szakíthatod meg.

Ne felejts el a projektmappádba (vadonszava) belépni!

```bash
cd vadonszava
```

### 1.2. lépés: A Tailwind CSS telepítése

A Tailwind CSS használatához két npm csomagot kell telepítened:

- `tailwindcss` — a keretrendszer magja
-  `@tailwindcss/vite` — a Vite plugin, amely integrálja a Tailwindet a build folyamatba (felváltja a régi PostCSS beállítást)

A telepítéshez add ki a következő npm parancsot:

```bash
npm install tailwindcss @tailwindcss/vite
```

### 1.3. lépés: A Vite plugin konfigurálása

Hozz létre egy `vite.config.js` fájlt a projektmappádba és a következő kódot másold be és mentsd el:

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

- Ez utasítja a Vite-t, hogy futtassa a Tailwindet minden build és fejlesztői szerver újratöltés részeként. Ezzel valósítod meg a `tailwindcss` plugin használatát.

### 1.4. lépés: A `src/style.css` módosítása

A Vite sablon már generált egy `style.css` fájlt az `src` mappába. Cseréld ki a teljes tartalmát erre az egy sorra:

```css
@import "tailwindcss";
```
- Így aktiválódik a Tailwind v4 — egyetlen CSS importtal, konfigurációs fájl nélkül.

### 1.5. lépés: A `src/main.js` módosítása

A Vite sablon már generált egy `main.js` fájlt az `src` mappába. Cseréld ki a teljes tartalmát erre az egy sorra:

```js
import './style.css';
```

- Első lépésben csak a saját stíluslapunkat importáljuk be. Később fogjuk bővíteni a JavaScript fájl tartalmát.

### 1.6. lépés: Az `index.html` módosítása

Nyisd meg az `index.html` fájlt. Távolíts el mindent a `<body>` belsejéből a script tag kivételével. Add hozzá a stíluslap hivatkozást. A fájlod így nézzen ki:

```html
<!doctype html>
<html lang="hu">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VadonSzava túrablog</title>
    <link rel="stylesheet" href="/src/style.css" />
  </head>
  <body>
    <h1>VadonSzava</h1>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

### 1.7. lépés: Felesleges fájlok, mappák eltávolítása

A projektmappába a sablon használatának köszönhetően legenerálódtak olyan fájlok, ami számunkra most nem fontosak. A következő fájlokat, mappákat töröld ki:
- A `public` mappában található fájlokat töröld ki.
- Az `assets` mappát és tartalmát is távolítsd el a projektből.
- Töröld ki a `counter.js` fájlt.

### 1.8. lépés: Ellenőrzés — a fejlesztői szerver indítása

A fejlesztői szervert újból el kell indítanod, hogy lásd a változtatásokat a weboldalon.

```bash
npm run dev
```

Nyisd meg a `http://localhost:5173` oldalt. Egy egyszerű, stílus nélküli "VadonSzava" feliratot kell látnod. A Tailwind csatlakoztatva van — csak még semmi látható dolgot nem csinál, mert a `<h1>` elemnek nincsenek utility osztályai.

> **Megjegyzés:** A böngészőfül címe "VadonSzava túrablog". Ez már működik. A Tailwind visszaállítja a böngésző alapértelmezett stílusait, ezért a cím kisebben nézhet ki, mint várnád.

---

## 2. feladat: Első Tailwind osztályok + Build folyamat

### 2.1. lépés: A cím formázása utility osztályokkal

Az `index.html` fájlban `<h1>` elemhez add hozzá a következő osztályokat:

```html
<h1 class="text-4xl font-bold text-green-700 p-8">VadonSzava Túrablog</h1>
```

Mentsd el a változásokat és láthatod, hogy a böngésző azonnal frissül (HMR — Hot Module Replacement). 

Nézzük meg, mit csinál minden egyes osztály:

| Osztály          | Hatás                               |
|------------------|-------------------------------------|
| `text-4xl`       | Betűméret: 2.25rem (36px)           |
| `font-bold`      | Félkövér stílus, betűvastagság: 700 |
| `text-green-700` | Szövegszín: sötétzöld `#15803d`     |
| `p-8`            | Belső margó: 2rem minden oldalon    |

### 2.2. lépés: Egy bekezdés hozzáadása

A főcím alá illeszd be a következő bekezdést:

```html
<p class="text-gray-600 px-8 text-lg">Fedezd fel Magyarország legjobb túraútvonalait.</p>
```

Mentsd el a változásokat. A bekezdés formázásai:

| Osztály          | Hatás                               |
|------------------|-------------------------------------|
| `text-gray-600`  | Szövegszín: sötétzöld `#4a5565`     |
| `px-8`           | Vízszintes irányba belső margó 2rem |
| `text-lg`        | Betűméret: 1.125rem (18px)          |


> **Első siker!** Két HTML elemet formáztál meg anélkül, hogy egyetlen sor CSS-t írtál volna. Ilyen egyszerű alkalmazni a Tailwind utility classokat.

### 2.3. lépés: Az éles build futtatása

Állítsd le a fejlesztői szervert (`Ctrl+C`) és futtasd a következő npm utasítást:

```bash
npm run build
```

A Vite lefordítja a projektet és mindent a `dist/` mappába ment. Nyisd meg a `dist/` mappát és nézd meg a generált CSS fájlt. Figyeld meg, milyen kicsi — a Tailwind csak a ténylegesen használt osztályokat tartalmazza (`text-4xl`, `font-bold` stb.), semmi mást.

### 2.4. lépés: Az éles build előnézete

A következő npm parancs futtatásával tekintheted meg a lefordított projekt eredményét. 

```bash
npm run preview
```

Nyisd meg a megjelenített URL-t (általában `http://localhost:4173`). Pontosan ezt látnák a felhasználók, ha a `dist/` mappát egy tárhelyszolgáltatóra telepítenéd.

Ha kész vagy, indítsd újra a fejlesztői szervert:

```bash
npm run dev
```

> **Kulcsszempont:** Az `npm run dev` a munkakörnyezeted (gyors, HMR-rel). Az `npm run build` hozza létre a telepíthető kimenetet. Vizuálisan ugyanazt az eredményt adják — csak a kézbesítési mechanizmus különbözik.

---

## 3. feladat: Design tokenek az `@theme {}` segítségével

Jelenleg a Tailwind beépített színeit használod, mint a `text-green-700`. De a túrablogunknak szüksége van egyéni zöld és barna árnyalatokra, amelyek nem léteznek a Tailwind alapértelmezett palettáján.

### 3.2. lépés: Design tokenek hozzáadása

Nyisd meg a `src/style.css` fájlt és bővítsd ki az `@theme {}` blokkkal:

```css
@import "tailwindcss";

@theme {  
  --color-tura-green-100: #dceecd;
  --color-tura-green-600: #2e7d32;
  --color-tura-green-700: #1b5e20;
  --color-tura-green-900: #022705;
  --color-tura-brown-100: #efebe9;
  --color-tura-brown-200: #c2ada6;
  --color-tura-brown-600: #8d6e63;
  --color-tura-brown-800: #5d4037;
  --color-tura-brown-900: #3e2723;
}
```

Mentsd el a CSS fájl módosításait és az `index.html` fájlban változtasd meg a cím szövegszínét:

```html
<h1 class="text-4xl font-bold text-tura-green-700 p-8">VadonSzava Túrablog</h1>
```

A cím betűszíne a saját zöld színünkben jelenik meg. 

A lényeg: Az @theme {} blokkban definiált változókhoz a Tailwind automatikusan design tokeneket rendel, amelyekből utility osztályok generálódnak. Például a `--color-tura-green-700` változó alapján olyan osztályokat használhatsz, mint a `text-tura-green-700`, `bg-tura-green-700`, vagy `border-tura-green-700`.

### 3.3. lépés: Betűtípus design tokenek és Google Fonts hozzáadása

A blog az `Inter (sans-serif)7` és a `Merriweather (serif)` betűtípusokat használja a Google Fonts-ból. 

Add hozzá a betűtípus importot az `index.html` fájlban a `<head>` belsejébe.

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Merriweather:wght@700&display=swap"
  rel="stylesheet">
```
Majd a betűtípushoz tartozó design tokenekkel bővítsd a `@theme {}` blokkot a `style.css` fájlban. Helyezd el a szín design tokenek alá.

```css  
  --font-sans: Inter, sans-serif;
  --font-serif: Merriweather, serif;
```

Most a `font-sans` utility osztály az Intert, a `font-serif` a Merriweathert használja bárhol a projektben.

### 3.4. lépés: Szemantikus tokenek hozzáadása

A egyszerű design tokenek a nyers színeket definiálják. A **szemantikus tokenek** *jelentést* adnak ezeknek a színeknek — leírják, mire *való* a szín, nem azt, hogyan néz ki. Ez teszi lehetővé a dark mód egyszerűbb kezelését, használatát majd a 3. modulban.

A `src/style.css` fájlt bővítsd a szemantikus tokenek definiálásával. E

```css
:root {
  --color-bg:          white;
  --color-bg-tinted:   var(--color-tura-green-100);
  --color-nav-bg:      white;
  --color-card-bg:     white;
  --color-heading:     var(--color-tura-brown-900);
  --color-text:        var(--color-gray-700);
  --color-border:      var(--color-tura-brown-100);
  --color-card-border: var(--color-gray-100);
  --color-tag-bg:      var(--color-tura-green-100);
  --color-tag-text:    var(--color-tura-green-700);
}
```

A `:root` részben definiált változók standard CSS custom property-nek minősül és alapértelmezetten a light módban használt színeket rendeljük hozzá. A változók egy része az általunk definiált saját színeket használja.

A `:root` részben definiált változókból nem képződik automatikusan utility-kké.  

### 3.5. lépés: Szemantikus tokenek leképezése Tailwind utility-kre

A CSS custom property-k nem válnak automatikusan Tailwind utility-kké. Szükség van még egy lépésre — az `@theme inline {}` blokkra:

```css
@theme inline {
  --color-bg:          var(--color-bg);
  --color-bg-tinted:   var(--color-bg-tinted);
  --color-nav-bg:      var(--color-nav-bg);
  --color-card-bg:     var(--color-card-bg);
  --color-heading:     var(--color-heading);
  --color-text:        var(--color-text);
  --color-border:      var(--color-border);
  --color-card-border: var(--color-card-border);
  --color-tag-bg:      var(--color-tag-bg);
  --color-tag-text:    var(--color-tag-text);
}
```

Az `@theme inline` azt mondja a Tailwindnek: "generálj utility osztályokat ezekhez a design tokenekhez, de old fel őket futásidőben, hogy a CSS változó értéke megváltoztatható legyen (pl. amikor `.dark` kerül a `<html>` elemre)."

Most a `bg-bg`, `text-heading`, `border-border` stb. érvényes Tailwind osztályok — és a 3. modulban, amikor hozzáadjuk a sötét módot, automatikusan átváltanak a sötét palettára, csupán egy `.dark` osztály `<html>` elemre adásával.

### 3.6. lépés: Ellenőrzés

A `src/style.css` fájlod most így nézzen ki:

```css
@import "tailwindcss";

@theme {  
  --color-tura-green-100: #dceecd;
  --color-tura-green-600: #2e7d32;
  --color-tura-green-700: #1b5e20;
  --color-tura-green-900: #022705;
  --color-tura-brown-100: #efebe9;
  --color-tura-brown-200: #c2ada6;
  --color-tura-brown-600: #8d6e63;
  --color-tura-brown-800: #5d4037;
  --color-tura-brown-900: #3e2723;
  
  --font-sans: Inter, sans-serif;
  --font-serif: Merriweather, serif;
}

:root {
  --color-bg:          white;
  --color-bg-tinted:   var(--color-tura-green-100);
  --color-nav-bg:      white;
  --color-card-bg:     white;
  --color-heading:     var(--color-tura-brown-900);
  --color-text:        var(--color-gray-700);
  --color-border:      var(--color-tura-brown-100);
  --color-card-border: var(--color-gray-100);
  --color-tag-bg:      var(--color-tura-green-100);
  --color-tag-text:    var(--color-tura-green-700);
}

@theme inline {
  --color-bg:          var(--color-bg);
  --color-bg-tinted:   var(--color-bg-tinted);
  --color-nav-bg:      var(--color-nav-bg);
  --color-card-bg:     var(--color-card-bg);
  --color-heading:     var(--color-heading);
  --color-text:        var(--color-text);
  --color-border:      var(--color-border);
  --color-card-border: var(--color-card-border);
  --color-tag-bg:      var(--color-tag-bg);
  --color-tag-text:    var(--color-tag-text);
}
```

> **Megjegyzés:** Még nem lesz látható változás — a szemantikus tokenek definiálva vannak, de nincsenek használva. A `bg-bg`, `text-heading` stb. osztályokat a navigáció és a hero megépítésekor fogod használni a következő feladatokban.

---

## 4. feladat: A navigációs sáv megépítése

Itt az ideje, hogy az ideiglenes `<h1>` elemet felváltsa a valódi oldalszerkezet.

### 4.1. lépés: A `<html>` és `<body>` beállítása

Az `index.html` fájlban végezd el a következő lépéseket:

A `<html>` tag-re helyezd el a scroll-smooth utility osztályt.

```html
<html lang="hu" class="scroll-smooth">
```

- A `scroll-smooth` engedélyezi a sima görgetést horgony linkekre kattintáskor. 

A `<body>` tag-re helyezd el a következő utility osztályokat:

```html
<body class="bg-bg text-text">
```
- A `bg-bg` és a `text-text` a szemantikus tokeneket használja az oldal háttérszínéhez és az alapértelmezett szövegszínhez.
- Ezekkel könnyebb lesz majd végrehajtani a light és dark mód váltását a későbbiekben.

Távolítsd el a korábban hozzáadott ideiglenes `<h1>` és `<p>` elemeket is.

### 4.2. lépés: A `<nav>` elem hozzáadása

A `<body>` belsejébe, a script tag elé add hozzá a navigációt:

```html
<nav class="bg-nav-bg shadow-md fixed w-full z-50 border-b border-border">
  <div class="max-w-7xl mx-auto px-8">
    <div class="flex justify-between h-16">

    </div>
  </div>
</nav>
```

Egy vékony fehér sávot kell látnod az oldal tetején. Kulcsfontosságú osztályok:
- `bg-nav-bg` és  a `border-border` szemantikus design tokenek felhasználásával állítjuk be a színeket
- `fixed w-full z-50` — az oldal tetejéhez rögzítjük a menüt. A menü teljes szélességben és minden oldaltartalom felett jelenjen meg az oldalon.
- `max-w-7xl mx-auto` — a tartalom középre igazítása maximális szélességgel jelenjen meg
- `flex justify-between h-16` — vízszintes elrendezés, a logó balra, a linkek jobbra. A tárolóelem magassága 4rem.

> **Megjegyzés:** A navigáció rögzített, ezért átfedi a hero szekció tetejét. A hero szekció ezt kitöltéssel/magassággal kezeli a következő feladatban.

### 4.3. lépés: A logó hozzáadása

A belső `<div class="flex justify-between h-16">` elembe illeszd be:

```html
<div class="flex items-center">
  <a href="#" class="flex items-center gap-2 text-2xl font-bold text-tura-green-700">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 21l-8-11.5a1 1 0 01.8-1.5H7l2-4 2 4h2l2-4 2 4h1.2a1 1 0 01.8 1.5L12 21z"></path>
    </svg>
    <span>Vadon<span class="text-tura-brown-800">Szava</span></span>
  </a>
</div>
```

- Egy hivatkozásba elhelyeztünk egy SVG ikont és a "VadonSzava" márkanevet.
- Szeretnénk hogy a logó és a márkanév függőlegesen egyvonalba kerüljön ezért alkalmaztuk a `flex items-center` utility osztályokat
- A márkanevet a saját színeinkkel színeztük ki.
- A logót pedig 2rem-re állítottuk a `w-8` és `h-8` osztályok használatával.

### 4.4. lépés: Navigációs linkek hozzáadása (asztali)

A logó `<div>` után add hozzá az asztali navigációs linkeket:

```html
<div class="flex items-center space-x-6">
   <a href="#kezdolap" class="text-gray-600 font-medium">Kezdőlap</a>
   <a href="#utvonalak" class="text-gray-600 font-medium">Útvonalak</a>
   <a href="#felszereles" class="text-gray-600 font-medium">Felszerelés</a>
   <a href="#galeria" class="text-gray-600 font-medium ">Galéria</a>
   <a href="#rolam"
            class="px-4 py-2 bg-tura-brown-800 text-white rounded-full">Rólam</a>
</div>
```
- Most jelenleg asztali nézet menüpontjait formáztuk meg.
- A `font-medium` osztállyal 500-as betűvastagságot állítottunk be a linkekre
- A `rounded-full` segítségével a Rólam link sarkait teljes mértékbe lekerekítettük.

---

## 5. feladat: A hero szekció megépítése

### 5.1. lépés: A banner kép másolása

A heronak szüksége van egy háttérképre. Hozz létre a `public` mappán belül egy `images` nevű mappát és a forrásból másold be a `banner.jpg` képfájlt.

### 5.2. lépés: A hero szekció hozzáadása

Az `index.html` fájlon belül a `</nav>` záró tag után add hozzá:

```html
<section id="kezdolap" class="relative h-screen flex items-center justify-center bg-cover bg-center"
  style="background-image: url('/images/banner.jpg');">

</section>
```

A hegyi fotónak ki kell töltenie a teljes ablakot. Kulcsfontosságú osztályok:
- `h-screen` — a böngésző ablak magasságának 100%-a.
- `bg-cover bg-center` — a kép méretezése a szekció lefedéséhez, középre igazítva
- `relative` — pozicionálási kontextust teremt az overlay számára (következő lépés)

### 5.3. lépés: A sötét overlay hozzáadása

A szekción belül add hozzá:

```html
<div class="absolute inset-0 bg-black/50"></div>
```

- Az `absolute inset-0` kinyújtja a divet, hogy kitöltse a szülő szekciót. 
- A `bg-black/50` 50%-os átlátszóságú fekete hátteret alkalmaz, elsötétítve a fotót, hogy a szöveg olvasható legyen rajta.

### 5.4. lépés: A főcím és az alcím hozzáadása

Az overlay `<div>` után add hozzá:

```html
<div class="relative z-10 text-center px-6 max-w-5xl">
  <h1 class="text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
    Az út nem csak célhoz vezet, hanem
    <span class="text-tura-green-100">önmagadhoz is.</span>
  </h1>
  <p class="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
    Fedezd fel a vadont, szívd be a friss hegyi levegőt, és hagyd magad mögött a mindennapok zaját. A túrázás nem sport, hanem visszatérés a gyökereinkhez.
  </p>
</div>
```

- A `relative z-10` ezt a divet az overlay fölé helyezi (az overlay az alapértelmezett z-indexen van). 
- A `leading-*` kezdetű osztályokkal a sor magasságot (line-height) tudod beállítani, míg a `tracking-*` osztályokkal a betűköz (letter-spacing) mértékét tudod beállítani 

### 5.5. lépés: A CTA gombok hozzáadása

A `<div class="relative z-10 ...">` belsejébe, a `<p>` után add hozzá:

```html
<div class="flex flex-row gap-6 justify-center">
  <a href="#utvonalak"
    class="px-10 py-4 bg-tura-green-600 text-white font-semibold rounded-lg text-lg shadow-lg">
    Fedezz fel útvonalakat
  </a>
  <a href="#felszereles"
    class="px-10 py-4 bg-white/10 text-white border border-white/30 font-semibold rounded-lg text-lg">
    Mire van szükséged?
  </a>
</div>
```

## 6. feladat: Lábléc elkészítése

A lábléc egyszerű. A következő elemeket tartalmazza: 

- márkanév, 
- közösségi linkek, 
- light/dark módhoz tartozó gombok
- szerzői jogi sor.

A következő kódot helyezd el a `</section>` elem után `<script>` elem elé.
- A VadonSzava a menüben található márkanévnek megfelelően van tagolva és formázva, annyi különbséggel, hogy kisebb betűkkel jelenik meg.
- A három gombban egy-egy svg ikont helyeztünk el, amelyek jelzik hogy melyik témaválasztást fogunk megvalósítani a 3. modulban.

```html
  <footer class="py-12 px-8 bg-nav-bg border-t border-border text-text">
    <div class="max-w-7xl mx-auto flex justify-between">
      <div>
         <a href="#" class="text-lg font-bold text-tura-green-700">            
            <span>Vadon<span class="text-tura-brown-800">Szava</span></span>
         </a>
        <a href="#" class="text-sm mx-1">Facebook</a>
        <a href="#" class="text-sm mx-1">Instagram</a>
        <a href="#" class="text-sm mx-1">Strava</a>
      </div>
      <div>
        <button id="themeSystemBtn" class="px-2 py-2 mt-2 rounded-md bg-gray-200">      
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-cog" aria-hidden="true"><path d="M12 17v4"></path><path d="m14.305 7.53.923-.382"></path><path d="m15.228 4.852-.923-.383"></path><path d="m16.852 3.228-.383-.924"></path><path d="m16.852 8.772-.383.923"></path><path d="m19.148 3.228.383-.924"></path><path d="m19.53 9.696-.382-.924"></path><path d="m20.772 4.852.924-.383"></path><path d="m20.772 7.148.924.383"></path><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path><path d="M8 21h8"></path><circle cx="18" cy="6" r="3"></circle></svg>
        </button>
        <button id="themeLightBtn" class="px-2 py-2 mt-2 rounded-md bg-gray-200">          
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
        </button>
        <button id="themeDarkBtn" class="px-2 py-2 mt-2 rounded-md bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
        </button>
      </div>            
    </div>
    <p class="max-w-7xl mx-auto text-sm">© 2026 Minden jog fenntartva.</p>
  </footer>
```
---

## Összegzés

Sikeresen végigértél az 1. workshopon, amit sikerült elkészítened a weboldalon:
- egyszerűbb menüt (logó, márkanév, menüpontok)
- egy hero sectiont, amely felkelti az oldalra látogató figyelmét, cselekvésre ösztönzi őket.
- láblécet, amely tartalmazza a blogger elérhetőségét,szerzői jogot és nem utolsó sorban a témaváltó gombokat, amelyek tényelges funkcionális működését a 3. modulban fogunk megvalósítani.
