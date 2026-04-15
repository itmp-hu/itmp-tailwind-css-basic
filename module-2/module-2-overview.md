# 2. modul - Reszponzív webdesign és modern Layout rendszerek

## 1. Grid Layout

Míg a Flexbox egy dimenzióban (sor vagy oszlop) gondolkodik, a Grid két dimenzióban (sorok és oszlopok egyszerre) teszi lehetővé az összetett elrendezések kezelését.

- Aktiválás: `grid`
- Oszlopok definiálása: g`rid-cols-{n}` (pl. `grid-cols-3` három egyenlő oszlophoz).
- Sorok definiálása: `grid-rows-{n}`.
- Oszlopközök/Sorközök: `gap-{size}` (összes), `gap-x-{n}` (csak oszlopok közt), `gap-y-{n}` (csak sorok közt).
- Span (Kiterjedés): Ha egy elem több oszlopot foglaljon el: `col-span-2`, vagy az egész sort: `col-span-full`.
- Igazítás: Hasonló a Flexboxhoz: `items-center`, `justify-items-center`, `content-start`.

## 2. Töréspontok és reszponzivitás (Variánsok használata)

A Tailwind a mobile-first elvet követi: az alaposztályok a legkisebb képernyőre vonatkoznak, a variánsok pedig akkor lépnek életbe, ha a képernyő eléri a megadott szélességet.

Alapértelmezett töréspontok:
- **sm**: (640px) – Mobil (fekvő) / Kicsi tablet
- **md**: (768px) – Tablet
- **lg**: (1024px) – Laptop
- **xl**: (1280px) – Desktop
- **2xl**: (1536px) – Nagy monitor

Használata: Csak írd a töréspont nevét az osztály elé:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="p-4 bg-blue-500">1</div>
  <div class="p-4 bg-blue-500">2</div>
  <div class="p-4 bg-blue-500">3</div>
  <div class="p-4 bg-blue-500">4</div>
</div>
```

**Mire érdemes figyelni?**

A Tailwind v4-ben a töréspontokat is definiálhatod a CSS @theme blokkban, ha egyedi méretekre lenne szükséged (például egy ultra-széles monitorhoz):

```css
@theme {
  --breakpoint-uw: 2500px;
}
```

Ezután használhatod az `uw:grid-cols-12` osztályt.

## 3. Képek formázása

A képeknél a legfontosabb, hogy ne torzuljanak el, és illeszkedjenek a tárolórekeszbe.

- Méret: `w-full`, `h-auto` (reszponzív alapbeállítás).
- Object fit (Vágás és illesztés):
  
  `object-cover`: Kitölti a területet, a felesleget levágja (profilképekhez kiváló).

  `object-contain`: Úgy méretezi a képet, hogy az egész látsszon (nem vág le semmit).

- Arányok (Aspect ratio): `aspect-video` (16:9), `aspect-square` (1:1).
- Lekerekítés és keret: `rounded-lg`, `border-4`, `border-white`.

