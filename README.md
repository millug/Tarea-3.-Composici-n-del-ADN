# 🧬 Generador de Secuencias de ADN Aleatorias

¡Bienvenido a este pequeño pero poderoso generador de secuencias de ADN! 🚀

## 📜 Descripción
Este proyecto en JavaScript genera una secuencia aleatoria de 24 bases de ADN utilizando las cuatro bases nitrogenadas fundamentales:

- 🟢 **Adenina (A)**
- 🔵 **Citosina (C)**
- 🟠 **Guanina (G)**
- 🔴 **Timina (T)**

La secuencia resultante se muestra como una cadena de texto continua en la consola.

## ⚙️ ¿Cómo funciona?
El código utiliza:
✅ Un array con las bases del ADN.
✅ Una función que genera un array de 24 bases elegidas aleatoriamente.
✅ `join('')` para convertirlo en una cadena legible.

## 🚀 Uso
1️⃣ Copia el código en un archivo `.js`.
2️⃣ Ejecuta el archivo con Node.js o inclúyelo en un entorno web.
3️⃣ Observa la secuencia de ADN generada en la consola.

## 💻 Código Principal
```javascript
const bases = ['A', 'C', 'G', 'T'];
const miADN = Array.from({ length: 24 }, () => bases[Math.floor(Math.random() * bases.length)]);

console.log(miADN.join(''));
```

## 🎯 Práctica sobre: 
🔬 Simulación de secuencias genéticas.
🧪 Práctica en manipulación de arrays.
📊 Generación de datos aleatorios.

