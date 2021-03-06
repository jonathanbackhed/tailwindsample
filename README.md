# ASP.NET Core Tailwind setup
## Requirements
- npm

## Getting started
In root
```
npm init -y
```
```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```
```
npx tailwind init -p
```
In package.json under "scripts"
```json
"css:build": "npx tailwind build <CSS_LOCATION> -o <NEW_CSS_OUTPUT_LOCATION>"
```
Ex:
```json
"css:build": "npx tailwind build ./wwwroot/css/site.css -o ./wwwroot/css/output.css"
```
In csproj
```
<ItemGroup>
    <UpToDateCheckBuilt Include="wwwroot/css/site.css" Set="Css" />
    <UpToDateCheckBuilt Include="postcss.config.js" Set="Css" />
    <UpToDateCheckBuilt Include="tailwind.config.js" Set="Css" />
</ItemGroup>

<Target Name="Tailwind" BeforeTargets="Build">
    <Exec Command="npm run css:build"/>
</Target>
```
In default css location / site.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Examples
### Add new colors
> tailwind.config.js
```js
theme: {
  extend: {
    colors: {
      brand: {
        light: "#3fbaeb",
        DEFAULT: "#0fa9e6",
        dark: "#0c87b8"
      },
    },
  },
},
```

### Add new fonts
> tailwind.config.js
```js
theme: {
  extend: {},
  fontFamily: {
    headline: "Poppins, sans-serif" // font-headline
  },
},
```

### Activate variants
> tailwind.config.js
```js
variants: {
  extend: {
    backgroundColor: ["active"],
    // ...
    textColor: ['visited'],
  },
},
````

### Add component
> default css location / site.css
```css
@layer components {
    .btn {
        @apply inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-600 transform transition text-white uppercase tracking-wider font-semibold text-sm sm:text-base;
    }
}
```

## Purge CSS
> tailwind.config.js
```js
purge: {
  enabled: true,
  content: ['<FILE_LOCATION_TO_SCAN'],
  // ...
  content: ['./*.html'] // Every file ending with .html
},
```
Manual purge
```json
npx tailwind build <CSS_LOCATION> -o <NEW_CSS_OUTPUT_LOCATION>
```
