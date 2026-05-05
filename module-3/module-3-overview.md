# 3. modul - Dark Mode és felhasználói interakciók


## 1. Dark Mode használata és tesztelése

A Tailwind CSS v4-ben a sötét mód alapértelmezés szerint a böngésző/operációs rendszer beállításait követi (prefers-color-scheme), de könnyen átváltható kézi vezérlésre is.

### Hogyan működik?

A `dark:` variánst bármilyen utility elé odaillesztheted:

```html
<div class="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
  Sötét módban megváltozik a háttérszín.
</div>
```

### Kézi vezérlés (Osztály alapú)

Ha azt szeretnéd, hogy a felhasználó egy gombbal kapcsolhassa a módot, a CSS-ben jelezned kell, hogy a `.dark` osztályt figyelve váltson:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

#### Design token mapping

Egy példán keresztül nézzük meg a működését.

```css
:root {    
  /*CSS custom property (CSS variable)*/
  --color-nav-bg: white;   /*light mode value*/
}

.dark {  
  /*CSS custom property override*/
  --color-nav-bg: var(--color-tura-green-900); /*dark mode value*/
}

@theme inline {  
  /*Tailwind mapping layer*/
  --color-nav-bg:      var(--color-nav-bg);  
}
```

**1. Mi történik a :root-ban?**

Amikor a :root-ban definiálod a `--color-nav-bg: white;` változót, az egy natív CSS változó lesz. A Tailwind CSS v4 ezt alapértelmezés szerint nem látja utility-ként (nem lesz belőle bg-nav-bg), amíg be nem regisztrálod a `@theme{}` blokkba.

**2. A sötét mód felülírása (.dark)**

Ez a rész teljesen valid natív CSS. Ha a HTML-en rajta van a `.dark` osztály, a változó értéke megváltozik. Mivel a Tailwind CSS v4 a CSS változókra épít, ez a dinamikus csere tökéletesen fog működni futásidőben is.

**3. A mapping (@theme inline)**

Itt történik a varázslat. Amikor azt írod: `--color-nav-bg: var(--color-nav-bg);`
...tulajdonképpen azt mondod a Tailwindnek: "Kérlek, regisztrálj egy utility-t nav-bg néven, és az értékét mindig abból a CSS változóból vedd, amit a böngésző éppen aktuálisnak lát."

### Dark mode tesztelés DevTools segítségével — még nincs szükség JavaScriptre

- Nyisd meg a böngésző DevTools-t (F12), menj a **Vizsgáló** (Firefox) vagy **Elements** (Chrome) fülre.
- Keresd meg a `<html>` elemet. Kattints duplán a `class` attribútumára (jelenleg `scroll-smooth` van rajta) és add hozzá a `dark` értéket:

```html
<html class="dark">
```

Nyomj Entert. Az oldal azonnal sötét módra kell váltson beállításoktól függően.

---

## 2. Interakciók: Effektek, transzformációk és átmenetek

A Tailwind CSS v4-ben az interakciók három pilléren nyugszanak: 
- mi történik (State, állapot), 
- hogyan mozog (Transition, átmenet) és 
- hogyan változik az alakja (Transform).

## Átmenetek (Transitions)

Ez teszi simává a váltást az alap és pl. a hover állapot között.

- Aktiválás: `transition`, `transition-all`.
- Időtartam: `duration-300` (300ms), `duration-700`.
- Görbe: `ease-in`, `ease-out`, `ease-in-out`.

## Transzformációk (Transforms)

Az elemek mozgatása, forgatása és méretezése.

- Méretezés: `hover:scale-105` (5%-os nagyítás).
- Forgatás: `rotate-45`, `group-hover:-rotate-12`.
- Mozgatás: `translate-x-4`, `-translate-y-2`.
- Eltolás (Skew): `skew-x-6`.

## Effektek (Effects)

- Árnyék: `shadow-md`, `hover:shadow-2xl`.
- Áttetszőség: `opacity-100`, `group-hover:opacity-50`.
- Filterek: `blur-none`, `hover:blur-sm`, `grayscale`, `hover:grayscale-0`.