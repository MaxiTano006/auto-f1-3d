Vértice Motorsport

Juego de carreras 3D para navegador, pensado para celular y controlado por giroscopio.

Autor: Máximo Beneventano — DMM4BP, 2026
Demo: https://auto-f1-3d.vercel.app/juego/

---

Descripción

Vértice Motorsport es un juego de carreras 3D que corre entero en el navegador, sin instalación y sin backend. Se juega desde el celular: el vehículo se maneja inclinando el dispositivo, y la pantalla se usa en horizontal.

El circuito se arma a partir de un modelo 3D de pista (`pista.glb`) y un modelo de vehículo (`mclaren.glb`), renderizados con Three.js. Toda la lógica de juego, los estilos y la interfaz viven en un único archivo `index.html`.

---

Características

- Carrera de 3 vueltas con cuenta regresiva inicial y cronómetro por vuelta.
- Checkpoints en orden: hay que pasar los tres puntos de control antes de que la vuelta cuente.
- Dos líneas de meta: el arco superior se usa en la largada y la cuerda inferior es la que cierra la vuelta.
- Penalización por salir del asfalto: al pisar el pasto el vehículo pierde velocidad y el HUD lo indica en rojo.
- HUD con throttle de 100 ms: los indicadores se actualizan diez veces por segundo para no castigar el rendimiento.
- Pantalla final con el tiempo total, el mejor tiempo guardado y la comparación contra el récord.
- Vibración del dispositivo en los eventos importantes de la carrera.
- Pantalla de instrucciones** con código QR para abrir el juego en otro celular.
- Menú principal con configuración, ayuda y créditos.
- Garaje estético con escenario propio, presentación animada del vehículo y selección entre modelos.
- Persistencia local del récord y del vehículo elegido.

---

Estructura del repositorio

```
proyecto-auto-f1/
└── juego/
    ├── index.html        # Juego completo: HTML, CSS y JavaScript
    ├── pista.glb         # Modelo 3D del circuito
    ├── mclaren.glb       # Modelo 3D del vehículo
    ├── fondo-menu.png    # Fondo de la pantalla de menú
    └── qr-juego.png      # Código QR de las instrucciones
```

Todo el juego está contenido en `juego/index.html`. No hay hoja de estilos externa ni archivos JavaScript separados: los estilos están embebidos en el `<style>` del documento y la lógica en el `<script>` final.

---

Cómo correrlo localmente

El juego carga los modelos `.glb` mediante `fetch`, así que no funciona abriendo el archivo con doble clic: el navegador bloquea esas peticiones desde `file://`. Hay que servirlo por HTTP.

1. Cloná o descargá el repositorio.
2. Abrí una terminal en la raíz del proyecto.
3. Levantá un servidor local con `python -m http.server 8000`.
4. Entrá a `http://localhost:8000/juego/` desde el navegador.

Para probar el giroscopio hace falta un dispositivo móvil real o las herramientas de desarrollo del navegador con sensores simulados.

---

Controles

- Dirección: inclinación del dispositivo (giroscopio). La calibración se hace en cada pulsación de EMPEZAR, así que al volver del menú se recalibra sola.
- Aceleración y frenado: automáticos según el estado de la carrera.
- Garaje: arrastrá el dedo sobre el vehículo para girarlo. El arrastre interrumpe la animación de presentación y toma el control.

---

Deploy

Vértice Motorsport  
  
Juego de carreras 3D para navegador, pensado para celular y controlado por giroscopio.  
  
Autor: Máximo Beneventano — DMM4BP, 2026  
Demo: https://auto-f1-3d.vercel.app/juego/  
  
---  

Descripción  
  
Vértice Motorsport es un juego de carreras 3D que corre entero en el navegador, sin instalación y sin backend. Se juega desde el celular: el vehículo se maneja inclinando el dispositivo, y la pantalla se usa en horizontal.  
  
El circuito se arma a partir de un modelo 3D de pista (`pista.glb`) y un modelo de vehículo (`mclaren.glb`), renderizados con Three.js. Toda la lógica de juego, los estilos y la interfaz viven en un único archivo `index.html`.  
  
---  
  
Características  
  
- Carrera de 3 vueltas con cuenta regresiva inicial y cronómetro por vuelta.  
- Checkpoints en orden: hay que pasar los tres puntos de control antes de que la vuelta cuente.  
- Dos líneas de meta: el arco superior se usa en la largada y la cuerda inferior es la que cierra la vuelta.  
- Penalización por salir del asfalto: al pisar el pasto el vehículo pierde velocidad y el HUD lo indica en rojo.  
- HUD con throttle de 100 ms: los indicadores se actualizan diez veces por segundo para no castigar el rendimiento.  
- Pantalla final con el tiempo total, el mejor tiempo guardado y la comparación contra el récord.  
- Ranking local con bots: ocho rivales con tiempos generados y persistidos, ordenados junto al récord personal del jugador.  
- Vibración del dispositivo en los eventos importantes de la carrera.  
- Pantalla de instrucciones con código QR para abrir el juego en otro celular.  
- Menú principal con configuración, ayuda y créditos.  
- Garaje estético con escenario propio, presentación animada del vehículo y selección entre modelos.  
- Persistencia local del récord, del vehículo elegido y del ranking.  
  
---  
  
Estructura del repositorio  


vertice-motorsport/
├── README.md
└── juego/
├── index.html # Juego completo: HTML, CSS y JavaScript
├── pista.glb # Modelo 3D del circuito
├── mclaren.glb # Modelo 3D del vehículo
├── fondo-menu.png # Fondo de la pantalla de menú
├── logo.png # Logo del menú principal
├── qr-juego.png # Código QR de las instrucciones
└── musica/
├── tema1.mp3 # Temas de la pantalla de créditos
├── tema2.mp3
├── tema3.mp3
├── tema4.mp3
└── tema5.mp3

  
Todo el juego está contenido en `juego/index.html`. No hay hoja de estilos externa ni archivos JavaScript separados: los estilos están embebidos en el `<style>` del documento y la lógica en el `<script>` final.  
  
---  
  
Cómo correrlo localmente  
  
El juego carga los modelos `.glb` mediante `fetch`, así que no funciona abriendo el archivo con doble clic: el navegador bloquea esas peticiones desde `file://`. Hay que servirlo por HTTP.  
  
1. Cloná o descargá el repositorio.  
2. Abrí una terminal en la raíz del proyecto.  
3. Levantá un servidor local con `python -m http.server 8000`.  
4. Entrá a `http://localhost:8000/juego/` desde el navegador.  
  
Para probar el giroscopio hace falta un dispositivo móvil real o las herramientas de desarrollo del navegador con sensores simulados.  
  
---  
  
Controles  
  
- Dirección: inclinación del dispositivo (giroscopio). La calibración se hace en cada pulsación de EMPEZAR, así que al volver del menú se recalibra sola.  
- Aceleración y frenado: automáticos según el estado de la carrera.  
- Garaje: arrastrá el dedo sobre el vehículo para girarlo. El arrastre interrumpe la animación de presentación y toma el control.  
  
---  

Deploy  
  
El proyecto está publicado en Vercel como sitio estático.  
  
1. Subí los archivos a la carpeta `juego/` del repositorio en GitHub.  
2. Vercel detecta el cambio y redeploya automáticamente.  
3. Verificá que `fondo-menu.png`, `logo.png`, `qr-juego.png` y la carpeta `musica/` estén dentro de `juego/` y no sueltos en la raíz del repositorio.  
  
Conviene entrar siempre a la URL con barra final (`/juego/`) para que las rutas relativas de los assets resuelvan contra la carpeta correcta.  
  
---  
  
Rendimiento  
  
- Instanced meshes para la decoración del circuito (colinas), de modo que cientos de objetos se dibujen en una sola llamada.  
- Throttle de 100 ms en el HUD: los textos y barras se actualizan diez veces por segundo en lugar de una vez por frame.  
- Luces del garaje sin recompilar shaders: las luces del escenario se agregan a la escena con intensidad cero y se suben al abrir el garaje, en vez de togglear su visibilidad. Así el conteo de luces no cambia y no se produce el tirón de recompilación.  
- Modelos `.glb` en lugar de geometría generada por código, para reducir el peso de descarga.  
  
---  
  
Limitaciones conocidas  
  
- Tanque y Tren delantero son informativos: aparecen en el garaje con sus prestaciones y su condición de desbloqueo, pero no son jugables porque no tienen modelo 3D asociado. Ningún camino del código los habilita como vehículo seleccionable.  
- El récord es local: se guarda en `localStorage` bajo la clave `vertice_record`, así que vive en el navegador de cada dispositivo y no se comparte entre celulares.  
- El ranking es local y simulado: los ocho rivales se generan una vez en el navegador y se guardan bajo `vertice_ranking_bots_v2`. No hay competencia real entre dispositivos.  
- El vehículo elegido también es local: se guarda en `localStorage` bajo la clave `vertice_vehiculo`.  
- El QR es una imagen fija: apunta a la URL del juego y no se regenera dinámicamente.  
- Requiere conexión la primera vez, para descargar los modelos.  
  
---  
  
Mejoras futuras  
  
- Ranking compartido entre dispositivos. Hoy el ranking es local y los rivales son simulados. Un ranking único necesitaría un backend (Vercel Functions con KV o Blob, Supabase o Firebase), variables de entorno y manejo de estados de error y de red. Además, como el tiempo se calcula en el cliente, un ranking público real requeriría validación del lado del servidor para descartar tiempos enviados a mano.  
- Ranking local con código de tiempo. Alternativa sin backend: compartir cada marca como un código corto que el otro dispositivo importa a mano.  
- Modelos 3D para Tanque y Tren delantero, para volverlos jugables.  
- QR dinámico que incluya la marca del jugador en la URL.  
  
---  
  
Créditos  
  
Proyecto desarrollado por Máximo Beneventano para la materia DMM4BP, 2026.  
  
Motor 3D: Three.js. Modelos: `pista.glb` y `mclaren.glb`.  
  
Música de la pantalla de créditos: los cinco temas de `juego/musica/` fueron obtenidos de YouTube.  
  
Los créditos completos de los recursos utilizados se encuentran también en la pantalla de créditos del juego.
