# 2. modul - Workshop:  Tartalmi szekciók, komponensek készítése, rácsrendszerek, töréspontok használata.

**Cél:**
- A tartalmi részek elkészítése komponensekkel együtt
- Grid rácsrendszer alkalmazása a komponensek, elemek elhelyezésére
- Töréspontok alkalmazása a reszponzív oldal kialakításának érdekében

**Kiindulópont:** Az 1. modul workshop-jának megoldása 
- Navigációs terület
- Hero section
- Lábléc
- design tokenek

---

## 1. feladat: Képek másolása

Az új szekciókhoz további fotók szükségesek. Másold be a forrásban található kilenc képeket a projekted `public/images/` mappájába.

---

## 2. feladat: 'Túrázás előnyei' tartalmi rész elkészítése

A túrázás előnyeiről szóló rész közvetlenül a hero section alatt helyezkedik el. Árnyalt zöld háttere van és három kártya mutatja be az előnyöket. A kártyák mindegyikén egy SVG ikon, cím és rövid leírás található.

### 2.1. lépés: A szekció hozzáadása

A következő kódot a hero szakaszt záró `</section>` elem után helyezd el. Egy zöldes árnyalatú sáv jelenik meg a hero alatt.

```html
<section class="py-12 bg-bg-tinted">
  <div class="max-w-7xl mx-auto px-6 lg:px-5">

  </div>
</section>
```
- `lg:px-5`: az `lg:` egy töréspontot jelöl, a háttérben pedig egy media query hajtódik végre. A utility osztály jelentése, hogy a nagy kijelzőjű eszközöktől a belső margó 1.25rem nagyságú lesz.
- `bg-bg-tinted` az 1. modulban definiált szemantikus tokent használja.

### 2.2. lépés: A szekció bevezető részének elkészítése 

A `<div>` elembe helyezd el a következő kódot:

```html
<div class="text-center mb-16">
  <h2 class="text-4xl font-bold text-heading mb-4">Miért a túrázás a legjobb kikapcsolódás?</h2>
  <p class="text-lg text-text max-w-2xl mx-auto">Több mint testmozgás. A természetben töltött idő megváltoztatja a gondolkodásodat.</p>
</div>
```

A `text-heading` és a `text-text` az 1. modulban definiált szemantikus tokeneket használja — ez a szöveg automatikusan a helyes sötét módú színekre vált majd a 3. modulban.

### 2.3. lépés: A 3-oszlopos rács hozzáadása

A bevezető rész után helyezd el a kártyákat összefogó tárolóelemet:

```html
<div class="grid md:grid-cols-3 gap-10">

</div>
```

- `grid`: jelzi azt, hogy ez egy olyan tárolóelem lesz, amely gyermek elemeit egy rácsrendszerben fogja elhelyezni.
- `md:grid-cols-3`: a közepes kijelzőjű eszközökön az elemek 3 oszlopos megjelenésű lesz.
- `gap-10`: az elemek közötti távolságot jelzi (2.5rem)

### 2.4. lépés: Az első kártya hozzáadása

A rács `<div>` belsejébe:

```html
<div class="bg-white p-8 rounded-2xl shadow-xl border border-border text-center">
  <div class="w-16 h-16 bg-tura-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
      </path>
    </svg>
  </div>
  <h3 class="text-2xl font-semibold text-tura-brown-900 mb-3">Mentális feltöltődés</h3>
  <p class="text-text">A fák között a stressz szintje bizonyítottan csökken. Csend, nyugalom és tiszta gondolatok.</p>
</div>
```

A változtatások elmentése után megjelenik a Mentális feltöltődés című kártya.
- kártya háttere fehér, sarkai lekerekítettek és szegélyezett a szemantikus token használatával.
- az SVG ikont tartalmazó tárolóelem sarkai teljesen lekerekítettek. Az ikon középre helyezésére a FlexBoxot használtunk. Az `items-center` osztály az ikon függőleges igazításáért, a `justify-center` pedig a vízszintes igazításáért felel.

### 2.5. lépés: A második és harmadik kártya hozzáadása

Az első kártya után add hozzá:

```html
<div class="bg-white p-8 rounded-2xl shadow-xl border border-border text-center">
  <div class="w-16 h-16 bg-tura-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
  </div>
  <h3 class="text-2xl font-semibold text-tura-brown-900 mb-3">Fizikai erőnlét</h3>
  <p class="text-text">Erősíti a szívet, a lábakat, és növeli az állóképességet, miközben észre sem veszed a megerőltetést.</p>
</div>

<div class="bg-white p-8 rounded-2xl shadow-xl border border-border text-center">
  <div class="w-16 h-16 bg-tura-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1a2.5 2.5 0 002.5-2.5V4a2 2 0 00-2-2h-1.036">
      </path>
    </svg>
  </div>
  <h3 class="text-2xl font-semibold text-tura-brown-900 mb-3">Új felfedezések</h3>
  <p class="text-text">Rejtett vízesések, lélegzetelállító panorámák és olyan helyek, ahová autóval sosem jutnál el.</p>
</div>
```

### 2.6. lépés: A rács ellenőrzése

Nyisd meg a böngésződ fejlesztői eszköztárát és az ablak szélességének módosításával ellenőrizd a rácsrendszer működését. 

- **Asztali és tablet nézetben**: Három kártya egymás mellett egy sorban
- **Mobil nézetben** (keskeny böngésző): A kártyák egymás alá kerülnek, soronként egy

---

## 3. feladat: Túraútvonalak szekció

Az Útvonalak szekció három kártyát mutat — mindegyiken egy fotó, egy nehézségi jelvény, rövid leírás és egy metaadat sor.

### 3.1. lépés: A szekció keret hozzáadása

A túra előnyei blokk után illeszd be a következő kódot:

```html
<section id="utvonalak" class="py-20 bg-bg">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">

  </div>
</section>
```

- A szekció hátterét szemantikus token felhasználásával állítottuk be.
- A belső margó, és a szélességeket az előzőhöz hasonlóan alakítottuk ki.


### 3.2. lépés: A cím és egy "Összes megtekintése" link létrehozása

A belső `<div>` belsejébe:

```html
<div class="flex justify-between items-center mb-16">
  <h2 class="text-4xl font-bold text-heading">Kedvenc útvonalaim</h2>
  <a href="#" class="text-tura-green-600 font-semibold flex items-center gap-1">
    Összes megtekintése →
  </a>
</div>
```

- `flex justify-between`: a cím és a link a tárolóelem két szélére igazodik vízszintes irányban.
- `text-heading`: alcím színét itt is egy szemantikus token felhasználásával állítjuk be.

### 3.3. lépés: A kártyarács konténer hozzáadása

Hozd létre a kártyákhoz tartozó rácsrendszert:
- mobil nézetben a kártyák egymás alatt fognak megjelenni
- `md:grid-cols-2`: tablet nézeten a kártyák 2 oszlopos megjelenésűek
- `lg:grid-cols-3`: asztali nézeten 3 oszlopban egymás mellett jelennek meg az útvonalak kártyái
- `gap-8`: minden nézetben a kártyák közötti távolság 2rem nagyságú

```html
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

</div>
```

### 3.4. lépés: Az első útvonalkártya hozzáadása

A kártya négy fő részre osztható:
- a túraútvonalat illusztrált kép
- a túrához tartozó információs badge-k
- a túra címe és rövid leírása
- a túra metaadatai

```html
<div class="bg-card-bg rounded-2xl overflow-hidden shadow-lg border border-card-border">
  <img src="/images/istallosko.jpg" alt="Istállós-kő"
    class="w-full h-64 object-cover">
  <div class="p-6">
    <div class="flex gap-2 mb-3">
      <span class="px-3 py-1 bg-tag-bg text-tag-text rounded-full text-xs font-medium">Istállós-kő</span>
      <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Nehéz</span>
    </div>
    <h3 class="text-xl font-semibold text-heading mb-2">Pillantás a múltba a Szalajka-völgy körül</h3>
    <p class="text-text mb-4 line-clamp-2">A Bükk-hegység jellegzetes szeletét járjuk be a legnépszerűbb szurdokvölgyből a fellegvárként tornyosuló fennsíkra és annak sasbércszerű őrtornyára.</p>
    <div class="flex justify-between items-center text-sm text-text border-t border-card-border pt-4">
      <span>🕒 5:00 óra</span>
      <span>📏 15.9 km</span>
      <span>⬆️ 682 m</span>
    </div>
  </div>
</div>
```

Kiemelendő utility osztályok:
- `overflow-hidden`: azért alkalmazzuk a kártyára ezt a beállítást, mert a sarkai lekerekítettek és nem szeretnénk ha kép sarkai kilógnának a kartyán. Így nem kell külön gondoskodni a kép bal-felső és jobb-felső sarkainak lekerekítésén.
- `w-full h-64`: ezzel a beállítással a kép méretét meghatároztuk, hogy mindig teljes szélességbe töltse ki a kártyát, viszont a magassága 16rem legyen.
- `object-cover`: a kártyák illusztrációs képei nem biztos hogy egyforma méretűek, viszont a rendelkezésükre álló helyet a fenti beállítással meghatároztuk. Az object-cover beállításnak köszönhetően ha a kép nagyobb, vagy kisebb akkor méretarányosan 'kifeszül' a megadott területre és az esetleges kilógó részek nem jelennek meg.
- `line-clamp-2`: elrejti a túlcsorduló szöveget, vertikális „dobozként” kezeli a bekezdésünket és maximum két sort jelenít meg a szövegből.

### 3.5. lépés: A második útvonalkártya hozzáadása

```html
<div class="bg-card-bg rounded-2xl overflow-hidden shadow-lg border border-card-border">
  <img src="/images/kekesteto.jpg" alt="Kékes-tető"
    class="w-full h-64 object-cover">
  <div class="p-6">
    <div class="flex gap-2 mb-3">
      <span class="px-3 py-1 bg-tag-bg text-tag-text rounded-full text-xs font-medium">Kékes-tető</span>
      <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Könnyű</span>
    </div>
    <h3 class="text-xl font-semibold text-heading mb-2">A Kékes északi oldalának vadonjában</h3>
    <p class="text-text mb-4 line-clamp-2">A könnyed kiránduláson belevetjük magunkat a hegy északi oldalának változatos vadonjába, felfűzzük a környék látnivalóit, majd kényelmes úton érkezünk Mátraházára.</p>
    <div class="flex justify-between items-center text-sm text-text border-t border-card-border pt-4">
      <span>🕒 3:30 óra</span>
      <span>📏 7 km</span>
      <span>⬆️ 133 m</span>
    </div>
  </div>
</div>
```

Figyeld meg a nehézségi jelvényt: `bg-blue-100 text-blue-700` a piros helyett — a "Könnyű" kék, a "Nehéz" piros.

### 3.6. lépés: A harmadik útvonalkártya hozzáadása

```html
<div class="bg-card-bg rounded-2xl overflow-hidden shadow-lg border border-card-border">
  <img src="/images/nagymilic.jpg" alt="Nagy-Milic"
    class="w-full h-64 object-cover">
  <div class="p-6">
    <div class="flex gap-2 mb-3">
      <span class="px-3 py-1 bg-tag-bg text-tag-text rounded-full text-xs font-medium">Nagy-Milic</span>
      <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Nehéz</span>
    </div>
    <h3 class="text-xl font-semibold text-heading mb-2">A Milic vadregényes, keleti peremén</h3>
    <p class="text-text mb-4 line-clamp-2">A Milic tömbjének legvadabb, sziklákkal tarkított keleti oldalát járjuk körbe kényelmes dózerutakon és a határsáv egy jellemző szeletén át.</p>
    <div class="flex justify-between items-center text-sm text-text border-t border-card-border pt-4">
      <span>🕒 4:00 óra</span>
      <span>📏 12.5 km</span>
      <span>⬆️ 540 m</span>
    </div>
  </div>
</div>
```

Érdemes ellenőrizned a böngésző szélességének a módosításával a rácsrendszer működését is.

---

## 4. feladat: Felszerelés szekció

A felszerelés szekciónak sötétbarna háttere van, öt félig átlátszó kártyával.

### 4.1. lépés: A szekció keret hozzáadása

Az Útvonalak `</section>` után:

```html
<section id="felszereles" class="py-24 bg-tura-brown-900 text-white relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

  </div>
</section>
```
Megjelenik egy sötétbarna, teljes szélességű sáv.

-  `relative overflow-hidden`: Ennek a blokknak lesznek dekorációs háttérelemei (háromszögek) és ezeket a szülőelemhez képest szeretnénk majd pozícionálni és ha esetleg kilógnának a szülőelemből a dekorációs elemek egyes részei, azokat nem szeretnénk megjeleníteni.

### 4.2. lépés: Dekorációs háttérelemek hozzáadása

A szekción belül, de a `<div class="max-w-7xl ...">` elé add ezeket a tisztán dekoratív háromszögeket:

```html
<div class="absolute inset-0 opacity-10">
  <svg viewBox="0 0 100 100" fill="currentColor" class="absolute -top-10 -left-10 w-64 h-64">
    <path d="M50 0 L100 80 H0 Z"></path>
  </svg>
  <svg viewBox="0 0 100 100" fill="currentColor" class="absolute -bottom-10 -right-10 w-96 h-96">
    <path d="M50 0 L100 80 H0 Z"></path>
  </svg>
</div>
```

- `absolute inset-0 opacity-10`: az SVG-ket 10%-os opacity (90%-os áttetszőséget jelent) tölti ki a szekciót — finom textúra, nem tartalom.
- `absolute -top-10 -left-10`: az egyik háromszög abszolút pozícionálását jelenti a szülőelemhez képest. A top és left előtt található - jel a negatív előjelet jelenti.

### 4.3. lépés: A szekció bevezető részének kialakítása

A `<div class="max-w-7xl ...">` belsejébe:

```html
<div class="text-center mb-16">
  <h2 class="text-4xl font-bold mb-4">A biztonságos túrázás alapjai</h2>
  <p class="text-lg text-tura-brown-100 max-w-2xl mx-auto">Sose indulj el felkészületlenül. Íme az 5 legfontosabb dolog, ami mindig legyen nálad.</p>
</div>
```

### 4.4. lépés: Az 5-oszlopos rács hozzáadása

A bevezető rész után illeszd be:

```html
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">

</div>
```

A `grid-cols-2 md:grid-cols-3 lg:grid-cols-5` — három különböző oszlopszám három töréspontnál. A kártyák beillesztése után majd méretezd át a böngészőt, hogy lásd mindhárom állapotot.

### 4.5. lépés: Az öt felszerelés kártya hozzáadása

A rácson belül helyezd el a kártyákat. A kártyák a túrázás előnyei kártyákhoz hasonlóan egy SVG ikonból, egy alcímből és egy bekezdésből épül fel és ezeket formázzuk meg.

```html
<div class="bg-white/10 p-6 rounded-xl border border-white/20">
  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-tura-brown-900">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
    </svg>
  </div>
  <h4 class="font-semibold text-white">Túrabakancs</h4>
  <p class="text-xs text-tura-brown-100">Vízálló, bokatartó.</p>
</div>

<div class="bg-white/10 p-6 rounded-xl border border-white/20">
  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-tura-brown-900">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
      </path>
    </svg>
  </div>
  <h4 class="font-semibold text-white">Réteges ruha</h4>
  <p class="text-xs text-tura-brown-100">Műszálas, nem pamut.</p>
</div>

<div class="bg-white/10 p-6 rounded-xl border border-white/20">
  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-tura-brown-900">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7">
      </path>
    </svg>
  </div>
  <h4 class="font-semibold text-white">Navigáció</h4>
  <p class="text-xs text-tura-brown-100">Offline térkép, GPS.</p>
</div>

<div class="bg-white/10 p-6 rounded-xl border border-white/20">
  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-tura-brown-900">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
  </div>
  <h4 class="font-semibold text-white">Elsősegély</h4>
  <p class="text-xs text-tura-brown-100">Kötszer, fájdalomcsillapító.</p>
</div>

<div class="bg-white/10 p-6 rounded-xl border border-white/20">
  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-tura-brown-900">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.76 2.28a2 2 0 001.18 2.444l2.247.949a2 2 0 002.439-1.118l.261-.705a2 2 0 00-.036-1.583l-1.962-4.664z">
      </path>
    </svg>
  </div>
  <h4 class="font-semibold text-white">Víz &amp; Étel</h4>
  <p class="text-xs text-tura-brown-100">Több, mint amennyit tervezel.</p>
</div>
```

---

## 5. feladat: Rólam szekció

A Rólam szekció egy 2-oszlopos rácsot jelent tablet és asztali nézeten: a profilfotó balra, a bemutatkozó szöveg és egy kapcsolati link jobbra helyezkedik el.
Természetesen mobilon egymás alatt jelennek meg.

### 5.1. lépés: A szekció hozzáadása

Helyezd el a felszerelések blokkja után.

```html
<section id="rolam" class="py-24 bg-tura-green-100">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="grid md:grid-cols-2 gap-16 items-center">

    </div>
  </div>
</section>
```

### 5.2. lépés: A profilkép hozzáadása (bal oszlop)

A rács `<div>` belsejébe helyezd el:

```html
<div>
  <img src="/images/profilkep.png" alt="A blogger"
    class="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-square">
</div>
```

- `aspect-square`: beállításnak köszönhetően a profil kép négyzetes alakú lesz, a magasság automatikusan igazodik a szélességehez.


A profilfotó megjelenik a szekció bal felén.

### 5.3. lépés: A bemutatkozó szöveg hozzáadása (jobb oszlop)

A fotó `<div>` eleme után helyezd el:

```html
<div>
  <span class="text-tura-green-600 font-semibold mb-2 block">A történetem</span>
  <h2 class="text-4xl font-bold text-heading mb-6">Szia, a hegyek szerelmese vagyok.</h2>
  <p class="text-lg text-text mb-6 leading-relaxed">
    Tíz éve kezdődött minden, amikor egy nehéz munkahét után véletlenül kötöttem ki a Pilisben.
    Azóta a hétvégéim a természetben telnek. Ez a blog azért jött létre, hogy megosszam veled azokat
    a rejtett helyeket, hasznos tippeket és élményeket, amiket az utam során gyűjtöttem.
  </p>
  <p class="text-lg text-text mb-10 leading-relaxed">
    Célom, hogy inspiráljalak, és megmutassam: a túrázás nem csak a profiké, hanem bárkié, aki
    tiszteli a természetet és szereti a szabadságot.
  </p>
  <a href="mailto:info@vadonszava.hu"
    class="px-8 py-3 bg-tura-green-600 text-white font-semibold rounded-lg">
    Lépj kapcsolatba
  </a>
</div>
```

### 5.4. lépés: A Rólam szekció ellenőrzése

- Asztali gépen: fotó balra, bemutatkozó szöveg jobbra, egymás mellett jelenik meg.
- Mobilon: a fotó a szöveg fölé kerül

---

## 6. feladat: Galéria szekció

A Galéria CSS Gridet használ, amelyben egy kép két sort foglal el. Talán ez a legösszetettebb rácsszerkezet a weboldalon.

### 6.1. lépés: A szekció keret hozzáadása

A Rólam `</section>` eleme után illeszd be:

```html
<section id="galeria" class="py-20 bg-tura-green-600">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold text-white mb-6">Túráim képekben...</h2>

  </div>
</section>
```
Megjelenik egy tömör zöld sáv az alcímmel együtt.

### 6.2. lépés: A rács hozzáadása az 5 képpel együtt

A `<div>` belsejébe, a `<h2>` után:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <img src="/images/gallery/gallery01.jpg"
    class="border border-white object-cover h-full" alt="Túrafotó 1">
  <img src="/images/gallery/gallery02.jpg"
    class="border border-white object-cover h-full" alt="Túrafotó 2">
  <img src="/images/gallery/gallery03.jpg"
    class="border border-white object-cover h-full" alt="Túrafotó 3">
  <img src="/images/gallery/gallery04.jpg"
    class="border border-white object-cover h-full w-full row-start-1 row-end-3" alt="Túrafotó 4">
  <img src="/images/gallery/gallery05.jpg" 
    class="border border-white object-cover h-full" alt="Túrafotó 5">
</div>
```

**Hogyan működik az átnyúló cella**: A `row-start-1 row-end-3` a `gallery04.jpg` fájlon azt mondja a CSS Gridnek, hogy ezt a képet a rácsrendszer 1. sor vonaltól a 3. sor vonaláig helyezze el — két sort foglalva el. Ez csak a 3-oszlopos elrendezésben(`lg:grid-cols-3`) érvényesül. Mobilon a képek normálisan egymás alá rendeződnek.

### 6.3. lépés: A galéria ellenőrzése

- Szűkítsd a böngészőt, hogy lásd, hogyan rendeződnek egymás alá vagy mellé a képek.

---

## 7. feladat: Hírlevél szekció

A hírlevél szekció megjelenítési célú — az űrlap begyűjt adatot, de nem küld semmit.

### 7.1. lépés: A szekció hozzáadása 

A  Galéria `</section>` eleme után szúrd be a következő kódot:

```html
<section class="py-20 bg-tura-green-100">
  <div class="max-w-3xl mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold text-heading mb-4">Ne maradj le a következő kalandról!</h2>
    <p class="text-text mb-10">Iratkozz fel a hírlevelemre, és megosztom veled a legfrissebb útvonalaimat és exkluzív felszerelés-tesztjeimet.</p>
    <form class="flex flex-col sm:flex-row gap-4">
      <input type="email" placeholder="Az e-mail címed"
        class="bg-white grow px-6 py-4 rounded-full border border-gray-200 outline-none">
      <button type="submit"
        class="px-8 py-4 bg-tura-brown-800 text-white font-semibold rounded-full transition">
        Feliratkozom
      </button>
    </form>
  </div>
</section>
```

- `flex-col sm:flex-row`: ez a két osztály biztosítja számodra, hogy az űrlap elemek legkisebb nézetben egymás alatt 1 oszlopban jelenjen meg, míg sm törésponttól kezdve mobilon már egy sorban, egymás mellett jelenjen meg a beviteli mező és a gomb.
- `grow`: Flexbox növekedési tényezője. Ezzel az osztállyal éred el, hogy a beviteli mező szélessége mindig kitölti a rendelkezésre álló szabad helyet.

### 6.2. lépés: Ellenőrzés

- A szekció világoszöld árnyalatú háttérrel rendelkezik.
- Mobilon az input és a gomb egymás alá kerül (`flex-col`)
- `sm` és szélesebb képernyőn egymás mellé kerülnek (`sm:flex-row`)

---

## 7. feladat: Töréspontokhoz kapcsolódó finomítások

Az 1. workshop alkalmával még nem ismertük a töréspontok használatát és nem figyeltük, hogy mennyire reszponzívak az egyes részek.
A következő finomításokat hajtsd végre.

### 7.1. lépés: Menü módosítása

A `nav` közvetlen gyermekelemére (`div`) alkalmaztunk egy `px-8` belső margót, de ez kisebb eszközök esetén túl nagy margónak bizonyul. Ezért módosítsd `px-4 sm:px-6 lg:px-8` beállításra.

```html
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
    ...
  </div>
```

A menü és azonbelül a menüpontok nem tekinthetőek reszponzívnak. Bevált szokás a hamburger menü kialakítása. Ehhez két dolgot kell módosítanod.

1. A menüpontokat tartalmazó tárolóelemre a `flex` beállítás helyett, alkalmazd a `hidden md:flex` beállítást. Így legkisebb nézetben nem jelenik meg csak tablet és asztali nézetben.

```html
  <div class="hidden md:flex items-center space-x-6">
    ...
  </div>
```
2. A hamburger menühöz tartozó gombbal bővítened kell a menüdet, amit a menüpontokat tartalmazó div után illessz be. Ezt az elemet ellentétesen jelenítjük meg, mint a menüpontokat.

```html
  <div class="flex md:hidden items-center">
    <button class="text-gray-600 hover:text-tura-green-600 focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
```

### 7.2. lépés: Hero section

A hero szekcióban a főcím és a bekezdés asztali nézetben lehet akár nagyobb is a jelenleginél, de kisebb eszközöknél meg maradhat a jelenlegi beállítás. 

Ezért a `<h1>` elemen a `text-5xl md:text-7xl` osztályokat alkalmazd a betűméret módosítására, míg a hozzátartozó bekezdésre a `text-xl md:text-2xl` beállítást.

```html
<h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">...</h1>
<p class="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">...</p>
```

A hero section CTA gombjainak elhelyezkedését szeretnénk törésponthoz kötni. A legkisebb nézetben egymás alatt szeretnénk elhelyezni egy oszlopban, míg sm törésponttól kezdve pedig egy sorban szeretnénk megjeleníteni.

Ehhez a gombok tárolóelemén `flex-row` osztály helyett  `flex-col sm:flex-row` osztályokat helyezd el.

```html
<div class="flex flex-col sm:flex-row gap-6 justify-center">...</div>
```

### 7.3. lépés: Lábléc

A láblécnél csak vízszintes irányban belső margó beállítást kell változtatnod. A `px-8` osztályt cseréld le `px-6 lg:px-8` osztályokra.


## Összegzés

Ebben a workshopban elkészítetted: 

- Az oldal tartalmi egységeit.
- Készítettél különböző formázású kártyákat.
- Reszponzív oldal kialakításához alkalmaztál töréspontokat és grid rácsszerkezetet.
- Elemek igazításához ismételten használtad a Flexbox-ot.
- Egyes elemek elhelyezéséhez pedig különböző pozícionálási módszereket alkalmaztál.


