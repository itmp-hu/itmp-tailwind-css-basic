# 3. modul - Workshop:  Dark mode, interakciók készítése

## A modul témakörei

Cél: 

- Az oldal dark mód elkészítése
- A weboldalon interakciók kialakítása (effektek, transzformációk, átmenetek kialakítása)

Kiindulópont: A 2. modul workshop-jának megoldása 

---

## 1. feladat: Sötét mód

Ha minden tartalmi egységet sikerült elkészítened, akkor ideje a webodal dark módjával is foglalkozni.

1. Mondd meg a Tailwindnek, hogyan érzékelje a sötét módot (egy sor a `style.css` fájlban).
2. Írd felül a szemantikus token értékeket, amikor a sötét mód aktív.

Ezután böngésző DevTools segítségével ellenőrzöd, hogy működik-e — mielőtt bármilyen JavaScript kódot írnál.

### 5.1. lépés: Az `@custom-variant dark` hozzáadása a `style.css` fájlhoz

Nyisd meg a `src/style.css` fájlt. Add hozzá ezt a sort közvetlenül az `@import "tailwindcss"` után:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Ez a Tailwind v4 deklarációja, amely működővé teszi a `dark:` előtagot. Azt mondja: "alkalmazd ezt a variánst, ha az elem maga, vagy bármelyik őse rendelkezik a `dark` osztállyal."

### 1.2. lépés: A `.dark {}` token felülírások hozzáadása

A `:root {}` blokk (világos mód alapértékei) után add hozzá a sötét mód felülírásokat:

```css
.dark {
  --color-bg:          black;
  --color-bg-tinted:   var(--color-tura-green-900);
  --color-nav-bg:      var(--color-tura-green-900);
  --color-card-bg:     var(--color-tura-brown-900);
  --color-heading:     var(--color-tura-brown-200);
  --color-text:        var(--color-gray-200);
  --color-border:      var(--color-tura-green-600);
  --color-card-border: var(--color-tura-brown-600);
  --color-tag-bg:      var(--color-tura-green-700);
  --color-tag-text:    var(--color-tura-green-100);
}
```

### 1.3. lépés: Tesztelés DevTools segítségével — még nincs szükség JavaScriptre

Nyisd meg a böngésző DevTools-t (F12), menj a **Vizsgáló** (Firefox) vagy **Elements** (Chrome) fülre, és keresd meg a `<html>` elemet. Kattints duplán a `class` attribútumára (jelenleg `scroll-smooth` van rajta) és add hozzá a `dark` értéket:

```
class="scroll-smooth dark"
```

Nyomj Entert. Az oldal azonnal sötét módra kell váltson — sötét háttér, világosabb szöveg, zöldes-sötét navigáció.

> **Ez a szemantikus tokenek megtérülése.** A `bg-bg`, `text-heading`, `bg-card-bg` stb. osztályokat használó összes szekció automatikusan frissül. Még egyetlen `dark:` osztályt sem írtál.

### 5.4. lépés: `dark:` téma variánsok hozzáadása a primitive tokenek esetén

A szemantikus tokenek az oldal nagy részét kezelik, de néhány elem primitív tokeneket, vagy utility színeket használ, amelyek nem váltanak automatikusan. Menj végig az oldalon szekciónként.

**Navigáció — logó és linkek:**

Keresd meg a navigáció logó linkjét és add hozzá a sötét mód variánsokat:

```html
<a href="#" class="flex items-center gap-2 text-2xl font-bold text-tura-green-700 dark:text-tura-green-100">
```

Keresd meg a "Szava" span elemet:

```html
<span>Vadon<span class="text-tura-brown-800 dark:text-tura-brown-200">Szava</span></span>
```

Keresd meg az asztali navigációs linkeket és add hozzá a `dark:text-gray-100` osztályt:

```html
<a href="#kezdolap" class="text-gray-600 dark:text-gray-100 font-medium">Kezdőlap</a>
```

Tedd ugyanezt az Útvonalak, Felszerelés és Galéria linkeknél is.

Keresd meg a "Rólam" pill gombot:

```html
<a href="#rolam"
  class="px-4 py-2 bg-tura-brown-800 dark:bg-green-600 text-white rounded-full">Rólam</a>
```

Kapcsold be/ki a `dark` osztályt a DevTools-ban — a navigációnak mindkét módban helyesen kell kinéznie.

**Előnyök kártyák:**

Minden fehér kártyához sötét mód variánsok szükségesek. Bővítsd a kártya külső `<div>` elemét a `dark:bg-tura-green-700/50` osztállyal:

```html
<div class="bg-white dark:bg-tura-green-700/50 p-8 rounded-2xl shadow-xl border border-border text-center">
```

Bővítsd az ikon kör `<div>` elemét a `dark:bg-tura-brown-600` osztállyal:

```html
<div class="w-16 h-16 bg-tura-green-600 dark:bg-tura-brown-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
```

Bővítsd a kártya címét, `<h3>` elemét a `dark:text-tura-brown-100` osztállyal:

```html
<h3 class="text-2xl font-semibold text-tura-brown-900 dark:text-tura-brown-100 mb-3">
```

Alkalmazd ugyanezt a három módosítást másik két kártyán is.

**Útvonalkártyák — nehézségi badge-k:**

A badge-k Tailwind piros/kék színeket használnak. Frissítsd a "Nehéz" badge-ket minden útvonalkártyán a `dark:bg-red-800` és `dark:text-red-200` osztályokkal.

```html
<span class="px-3 py-1 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 rounded-full text-xs font-medium">Nehéz</span>
```

Frissítsd a "Könnyű" badge-t a `dark:bg-blue-800` és `dark:text-blue-200` osztályokkal.

```html
<span class="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full text-xs font-medium">Könnyű</span>
```

**Felszerelés szekció:**

A sötétbarna háttér váltson sötétzöldre (`dark:bg-tura-green-900`):

```html
<section id="felszereles" class="py-24 bg-tura-brown-900 dark:bg-tura-green-900 text-white relative overflow-hidden">
```

**Galéria képek:**

A galéria képeinek fehér szegélye váltson zöldre (`dark:border-tura-green-700`).

Példa az 1. kép módosítására:

```html
<img src="/img/gallery/gallery01.jpg"
  class="border border-white dark:border-tura-green-700 object-cover h-full"
  alt="Túrafotó 1">
```

**Rólam szekció:**

"A történetem" feliratot bővítsd a `dark:text-tura-green-100` osztállyal, míg a CTA gombot a `dark:bg-tura-brown-600` osztállyal.

```html
<span class="text-tura-green-600 dark:text-tura-green-100 font-semibold mb-2 block">A történetem</span>
```

```html
<a href="mailto:info@vadonszava.hu"
  class="px-8 py-3 bg-tura-green-600 dark:bg-tura-brown-600 text-white font-semibold rounded-lg">
  Lépj kapcsolatba
</a>
```

**Hírlevél szekció:**

A hírlevél blokk `<div>` tárolóelem háttérszíne legyen fekete (`dark:bg-black`).

```html
<section class="py-20 bg-tura-green-100 dark:bg-black">
```

**Lábléc márkanév:**

A fejlécben található márkanévhez hasonlóan formázd a márkanevet. A linkre alkalmazd a `dark:text-tura-green-100`, valamint a span elemre a `dark:text-tura-brown-200` osztályt.

```html
 <a href="#" class="text-lg font-bold text-tura-green-700 dark:text-tura-green-100">
    <span>Vadon<span class="text-tura-brown-800 dark:text-tura-brown-200">Szava</span></span>
</a>
```

**Lábléc - témagombok háttere:**

A lábléc témagombjainak a háttere is feketére állítsd be.

```html
<button id="themeBtn" class="px-2 py-2 mt-2 rounded-2xl bg-gray-200 dark:bg-black">
```

### 1.5. lépés: A sötét mód CSS teljességének ellenőrzése

A DevTools-ban add hozzá és távolítsd el a `dark` osztályt a `<html>` elemen. Minden szekciót le kell görgetni és mindkét módban helyesen kell kinéznie.

---

## 2. feladat: Sötét mód váltás gombok segítségével (JavaScript)

Most, hogy a CSS kész, szeretnénk a téma gombok megnyomásával is választani a light és dark mód között.

Három gomb áll rendelkezésünkre:
- A rendszer szerint beállított téma
- Light téma
- Dark téma 


### 2.1. lépés: A `src/main.js` fájl bővítése

Először kérd le a három téma gomb node-ját. 

A felhasználó elmentheti a kívánt témáját, ezt a leggyakrabban a böngészőablak localStoreage tárolójába kerül mentésre, ahol a 'theme' kulcshoz rendeljük a kiválasztott témát értékként (system/light/dark). A `savedTheme` változóba tárold el a tárolóbe mentett témát.

```js
import './style.css'

const themeSystemBtn = document.querySelector('#themeSystemBtn');
const themeLightBtn = document.querySelector('#themeLightBtn');
const themeDarkBtn = document.querySelector('#themeDarkBtn');
```

Készíts egy `applyTheme` nevű függvényt. Az applyTheme függvény a weboldal témáját (light / dark / system) állítja be, majd elmenti a felhasználó választását a böngészőben.

```js
function applyTheme(theme = null){
  const html = document.documentElement;  
  
  if(theme === null){
    const savedTheme = localStorage.getItem('theme');
    theme = savedTheme ?? 'system';
  }

  if(theme === 'dark'){
    html.classList.add('dark');
  } else if(theme === 'light'){
    html.classList.remove('dark');
  } else if(theme === 'system' ||theme === null){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.classList.toggle('dark', prefersDark);
  }

  localStorage.setItem('theme', theme);
}
```

**Hogyan működik a függvény**

- Először az oldal HTML elem node-ját le kell kérned. Ez azért fontos, mert a Tailwind erre az elemre helyezi el a `dark` osztályt.
- Az első elágazással csak azt kell megvizsgálnod, hogy ha van felhasználó által elmentett téma, akkor az legyen az elsődleges, különben pedig böngészőbe beállított téma.
- A második elágazással a három témától függően helyezzük el vagy távolítjuk el a dark osztályt.
    - dark esetén: a `html` elem osztályaihoz hozzáadjuk a 'dark' osztályt és ezzel aktiváljuk a dark módot.
    - light esetén: a `html` elem osztályok listájából töröljük a 'dark' osztályt.
    - system vagy null érték esetén: először le kell kérnünk a böngészőablak által preferált témát és ettől függően kell elhelyezned vagy levenned a `dark` osztályt.
- Végül az aktuálisan kiválasztott témát mentsd el a localStorage-be.

**A függvény alkalmazása**

```js
applyTheme();

themeSystemBtn.addEventListener('click', () => {applyTheme('system')});
themeLightBtn.addEventListener('click', () => {applyTheme('light')});
themeDarkBtn.addEventListener('click', () => {applyTheme('dark')});
```
- Az oldal betöltődésnél is már fontos, hogy a preferált témával jelenjen meg a weboldalunk.
- A három gomb esetén pedig a kattintás eseményhez rendeljük hozzá a függvényt a megfelelő paraméterrel.


### 2.3. lépés: A sötét mód kapcsoló ellenőrzése

1. Próbáld ki a három gomb működését.2. 
3. Töltsd újra az oldalt — a sötét/világos beállítás megmarad
4. Nyisd meg a DevTools → Application → Local Storage → `localhost:5173` — látnod kell egy `theme` kulcsot `'dark'` vagy `'light'` értékkel
5. Töröld a `theme` kulcsot a Local Storage-ban, majd töltsd újra — az oldalnak az operációs rendszered beállítását kell figyelembe vennie

---

## 3. A weboldalon interakciók kialakítása (effektek, transzformációk, átmenetek kialakítása)

Már csak finomítások maradtak, amelyek a UI élményhez adnak hozzá. Ilyen néhány interakció és effektek alkalmazás, például

- gombok és a linkeknél
- galéria képei, vagy kártyák megtekintésénél

### 3.1. lépés: Menüpontok finomítása

A Tailwind nem csak theme variánsokat használ, hanem state variánsokat, amelyek például linkek és gombok esetén egy-egy állapotot jelölhet, ilyen például a `hover:`,`active:` és a `focus:` variánsok.

A menüpontok esetén szeretnénk, ha változna a menüpont betűszíne ha kurzorral fölé megyünk. 

Alkalmazd a menüpontokra a `hover:text-tura-green-600 dark:hover:text-tura-green-100 transition` utility osztályokat. A `transition` használatával azt éred el, hogy a link alapértelmezett és hover állapota közötti átmenetet kiszámolja és adott idő alatt hajtja végre az átmenetet.

```html
<a href="#kezdolap" class="text-gray-600 dark:text-gray-100 hover:text-tura-green-600 dark:hover:text-tura-green-100 transition font-medium">Kezdőlap</a>
<a href="#utvonalak" class="text-gray-600 dark:text-gray-100 hover:text-tura-green-600 dark:hover:text-tura-green-100 transition font-medium">Útvonalak</a>
<a href="#felszereles" class="text-gray-600 dark:text-gray-100 hover:text-tura-green-600 dark:hover:text-tura-green-100 transition font-medium">Felszerelés</a>
<a href="#galeria" class="text-gray-600 dark:text-gray-100 hover:text-tura-green-600 dark:hover:text-tura-green-100 transition font-medium ">Galéria</a>
```
A Rólam menüpontra alkalmazd a `hover:bg-tura-brown-900 dark:hover:bg-tura-green-700 transition` formázásokat:

```html
<a href="#rolam" class="px-4 py-2 bg-tura-brown-800 dark:bg-green-600 hover:bg-tura-brown-900 dark:hover:bg-tura-green-700 transition text-white rounded-full ">Rólam</a>
```

### 3.2. lépés: Hero section - CTA gombok

A Fedezz fel útvonalak gomb háttérszínét szeretnénk sötétebbre állítani, ha fölé megyünk kurzorral, csak most az átmenetet szeretnénk ha 300ms alatt hajtódna végre ezért alkalmazd a `hover:bg-tura-green-700 transition duration-300` formázásokat.

```html
<a href="#utvonalak" class="px-10 py-4 bg-tura-green-600 text-white font-semibold rounded-lg text-lg shadow-lg hover:bg-tura-green-700 transition duration-300">
    Fedezz fel útvonalakat
</a>
```
A Mire van szükséged? gombra a megszokott formázásokon kívül még egy blur effektet is szeretnénk alkalmazni, ezt a `backdrop-blur-sm` osztály használatával éred el, hogy az áttetsző háttérszín mögötti háttérkép homályosabban szűrődik át a gombon.

```html
<a href="#felszereles"
    class="px-10 py-4 bg-white/10 text-white border border-white/30 font-semibold rounded-lg text-lg hover:bg-white/20 backdrop-blur-sm transition duration-300">
    Mire van szükséged?
</a>
```

### 3.3. lépés: Túrázás előnyei kártyák 

A túrázás előnyeihez tartozó kártyáknál szeretnénk egy kis interakciót belecsempészni, ezért mind a három kártya `<div>` elemére alkalmazd a `transform hover:-translate-y-2 transition duration-300` utility osztályokat.

Ennek hatására ha a kártya fölé megyünk kurzorral a kártya felfelé elmozdul és az átmenet 300ms alatt hajtódik végre.

```html
<div class="bg-white dark:bg-tura-green-700/50 p-8 rounded-2xl shadow-xl border border-border text-center transform hover:-translate-y-2 transition duration-300">
```

### 3.4. lépés: Túraútvonal kártyák

Ezeknél a kártyáknál egy "hover-zoom" effektet szeretnénk készíteni. Ez azt jelenti, hogy ha kurzorral a kártya fölé megyünk, akkor a kép növekedjen meg 5%-kal és az átmenet 300ms alatt hajtódjon végre.

Ehhez két helyen kell módosítanod a kártyákat:
- A kártya külső `<div>` elemére alkalmaznod kell a `group` utility osztályt.
- A kép osztályait bővítsd `transition-transform duration-300 group-hover:scale-105` osztályokkal.

```html
<div class="bg-card-bg rounded-2xl overflow-hidden shadow-lg border border-card-border group">
  <img src="/img/istallosko.jpg" alt="Istállós-kő" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
```

**Hogyan működik a hover-zoom:**

- `group` a külső `<div>`-en — ezt az elemet jelöli meg hover-kiváltóként
- `group-hover:scale-105` a `<img>` elemen — nagyítja a képet, amikor a szülőelemre mutatnak
- `overflow-hidden` a külső `<div>`-en — körülvágja a nagyított képet, hogy ne lógjon ki a kártya keretéből
- `overflow-hidden` nélkül a kép a kártyán *kívülre* méretezne és töröttnek látszana

A mentés után vidd az egeret a kártya fölé, hogy lásd a fotó zoomolását.

### 3.5. lépés: Felszerelés szekció - blur effekt

A felszerelések kártyáira alkalmazd a `backdrop-blur-sm` osztályt. 
Miért jó ez nekünk? A szekció hátterében két design elemet helyeztünk el, amelyek egyes eszközökön a kártyák mögé pozícionálódnak és a blur effekt használatával a képek mögött a háromszög határoló élei elmosódva jelennek meg. Így egy kicsit izgalmasabb megjelenést eredményezünk.

```html
<div class="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
```

### 3.5. lépés: Rólam szekció - gomb

A Lépj kapcsolatba gombnál hasonló formázásokat szeretnénk alkalmazni mint a Rólam gombnál csak zöld színnel valósítjuk meg. Alkalmazd a `hover:bg-tura-green-700 dark:hover:bg-tura-brown-600/60 transition duration-300` utility osztályokat.

```html
<a href="mailto:info@vadonszava.hu" class="px-8 py-3 bg-tura-green-600 dark:bg-tura-brown-600 text-white font-semibold rounded-lg hover:bg-tura-green-700 dark:hover:bg-tura-brown-600/60 transition duration-300">
  Lépj kapcsolatba
</a>
```

### 3.6. lépés: Képgaléria

A galéria képeinek megtekintésénél szeretnénk alkalmazni a sepia effektet, ami "régi" képhatást eredményez. De ha rámegyünk egy képre kurzorral, akkor szeretnénk, ha ez a sepia effekt eltűnne a képről és a kép mérete 5%-kal legyen nagyobb. Az átmenet 1 másodperc alatt történjen meg.

Minden képre alkalmaznod kell a `sepia-100 scale-100 hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000` utility osztályokat. 
- A `sepia-100` és a `scale-100` jelenti a kép kiindulási állapotát.
- A `hover:sepia-0`, `hover:scale-105`, éa `hover:z-10` jelenti a kép hover állapotát. A legutolsó osztályt azért kell, hogy a nagyított kép legyen legfelül ha esetleg összeérne vagy fedné valamelyik szomszédos képpel. Ami 5%-nál nem biztos hogy előfordul, de próbáld ki, hogy mi történik például `hover:scale-105` helyett `hover:scale-150` írnál.

```html
<img src="/images/gallery/gallery01.jpg" class="border border-white dark:border-tura-green-700 object-cover h-full sepia-100 scale-100 hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000" alt="Túrafotó 1">
>
```

### 3.7. lépés: Hírlevél szekció - input, button

Az input elem ha fókusz állapotba kerül a böngésző alapértelmezetten szokta jelezni egy külső kerettel mi ezt szeretnénk módosítani. De ezt a Tailwind árnyékkal valósítja meg és nem outline formázással. Helyezd el a következő osztályokat az input elemre: `focus:ring-2 focus:ring-tura-green-600 dark:focus:ring-tura-brown-200 outline-none`

```html
<input type="email" placeholder="Az e-mail címed" class=" bg-white grow px-6 py-4 rounded-full border border-gray-200 focus:ring-2 focus:ring-tura-green-600 dark:focus:ring-tura-brown-200 outline-none">
```

A Feliratkozó gomb háttérszíne hover állapotban legyen sötétebb (`hover:bg-tura-brown-900`), valamint a cursor alakja legyen a mutató ujj (`cursor-pointer`)

```html
<button type="submit" class="px-8 py-4 bg-tura-brown-800 hover:bg-tura-brown-900 text-white font-semibold rounded-full transition">
  Feliratkozom
</button>
```

### 3.8. lépés: Lábléc - Linkek, Téma gombok

A linkek esetén a menüpontokhoz hasonlóan szeretnénk elérni, hogy zöld színű legyen a link a hover állapotban. Ezért a Facebook, Instagram és Strava linkekre helyezd el a `hover:text-tura-green-600 dark:hover:text-tura-green-100` utility osztályokat.

```html
<a href="#" class="text-sm mx-1 hover:text-tura-green-600 dark:hover:text-tura-green-100">Facebook</a>
```

A témaválasztó gombok esetén szintén a kurzor alakja nem megfelelő állítsd be a mutató ujjra (`cursor-pointer`).

```html
<button id="themeSystemBtn" class="px-2 py-2 mt-2 rounded-md bg-gray-200 dark:bg-black cursor-pointer">
```

Elkészültünk a weboldallal. Gratulálunk az eredményedhez!

---

## Extra feladat

A projektben a hamburger menü funkcionális működése nem valósult meg, mert az nem a Tailwind formázásokhoz kapcsolódik. De ha van még kedved oldjuk meg közösen a legegyszerűbb módon.

Készíts a `nav` elem után egy ideiglenes menüt:

```html
<div id="hamburgerMenu" class="hidden md:hidden px-4 pb-4 pt-18">
  <a href="#kezdolap" class="block py-2">Kezdőlap</a>
  <a href="#utvonalak" class="block py-2">Útvonalak</a>
  <a href="#felszereles" class="block py-2">Felszerelés</a>
  <a href="#galeria" class="block py-2">Galéria</a>
  <a href="#rolam" class="block py-2">Rólam</a>
</div>
```

A linkek formázásait ha szeretnéd oldd meg a navigáció menüpontjai alapján.

A hamburger menü gombjának állítsd be az id-ját `menuBtn`-re.

```html
<button class="text-gray-600 hover:text-tura-green-600 focus:outline-none cursor-pointer" id="menuBtn">
```

Az `src/main.js` fájlba illeszd be a következő kódot:

```js
const menuBtn = document.getElementById("menuBtn");
const hamburgerMenu = document.getElementById("hamburgerMenu");

menuBtn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hidden");
});
```

- A gomb és a hamburger menü node-ját lekérjük id alapján
- A gomb kattintás eseményéhez hozzárendeljük, hogy kattintásra a hamburger menü megjelenik (eltávolítjuk a hidden osztályt) vagy eltűnik (rárakjuk a hidden osztályt). Ezt a feladatot elvégzi helyettünk a `toggle()` függvény.