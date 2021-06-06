import React from 'react'

const About = () => {
  return (
    <>
      <h2>About my app</h2>
      <hr />
      <div className="about">
        <h3>Funcionalidades pendientes de implementar:</h3>
        <ul>
          <li>
            <p>No estoy haciendo uso de los <i>Error Boundaries</i> para controlar errores.😑</p>
          </li>
          <li>
            <p>No hago uso del custom hook <i>useApi</i> que nos proporcionas en el curso para las llamadas a la API.😔</p>
          </li>
          <li>
            <p>No he configurado la aplicación para generar un <i>source-map</i> más adecuado en producción.🙄</p>
          </li>
          <li>
            <p>Aunque el componente <i>NotFound</i> está presente, está comentado como verás en App.js, no he conseguido que funcionara correctamente haciendo uso del Switch.🙄🥶</p>
          </li>
          <li>
            <p>Me falta al menos un <i>test unitario</i> pero hablaré de ello más adelante.🙄</p>
          </li>
        </ul>
        <h3>Lo mejor:</h3>
        <ul>
          <li>
            <p>La calidad del curso en general, como explicas los conceptos, ejecutas el ejemplo correspondiente y nos pones un contexto <i>(nunca mejor dicho)</i> 🤭 de las aplicaciones que puede tener en el <i>mundo real</i> .🥳</p>
          </li>
          <li>
            <p>La variedad del contenido, pasando por casi todos los campos importantes en su justa medida para que diera tiempo a asimilarlo y ponerlo en uso de buena manera. Además de contar las diferentes opciones de como implementar una misma funcionalidad en función de las necesidades del proyecto, ese tipo de información en mi opinión es super importante/apreciada si te la da alguien que tiene experiencia en ello, como es el caso.🙌</p>
          </li>
          <li>
            <p>La <i>Sección 8</i> es un completo abuso, en el buen sentido de la palabra, para personas como yo
            que aunque previamente habia modificado lo típico, justo y necesario para añadir/permitir que compile mis scss files por ejemplo o alguna que otra funcionalidad, en ningún caso estaba nada familizado con la configuración de <i>webpack</i> con ese grado de profundidad y la verdad que es una auténtica pasada.👏👏</p>
          </li>
        </ul>
        <h3>Lo que lamento en el alma:</h3>
        <ul>
          <li>
            <p>Como comprobarás la aplicación de notas y la membresia persisten por sí mismas pero no conjuntas. Escribo aquí lo que habrás visto o verás en el código, tal como se espera de la práctica final, puedes registrarte con usuario y contraseña, un token será generado y usado para validar al usuario cuando hagas login. Una vez hagas login se habilitará en el menú el acceso a nuestra app. Hasta aquí bien. (<i>bien entre comillas se entiende, dejando a un lado todo tipo de validaciones que llevaría un formulario real tanto de registro como de login)</i></p>
          </li>
          <li>
            <p>Una vez llegues a la App, funciona pero ella no sabe quien eres. He aquí lo que a mi modo de ver, <b>es lo más importante de toda la práctica y no he conseguido hacer.</b> Entiendo que el curso es una herramienta para aprender, para hacer autoevaluación y conocer mejor las debilidades de uno mismo. Es en este punto donde quiero volver a retomar el tema del test unitario.</p>
            <p>No excuses. Circustancias, problemas y situaciones díficiles tenemos todos, es por ello por lo que no he podido disponer de todo el tiempo que me hubiera gustado para poder dedicarle, dicho lo cual, prioricé una y otra vez el intentar entender el funcionamiento del hook useApi para poder hacer las peticiones a la API y conseguir que la APP funcione del modo que se espera, 💆‍♂️ que cada usuario tuviera sus notas y pudiera realizar sus acciones 😖 y por consecuencia, no haciendo un pequeño test unitario con el que probablemente hubiera completado uno de los requisitos esperados pero sin embargo, no habría estado luchando con lo que para mí personalmente es más interesante. Lo digo por última vez: las peticiones a la API haciendo uso del custom hook. </p>
            <p>Finalmente no lo he conseguido, lo cual no significa que vaya a tirar la toalla, al contrario, ahora sé que quiero/tengo aprender desde este momento. 🤓🙇‍♂️ <i>(independientemente de las infinitas cosas que vengan después)</i></p>
          </li>
        </ul>
        <h3>What about the future:</h3>
        <ul>
          <li>
            <p>Sé que a partir de mañana esto se acaba, que hasta aquí he podido llegar y esta es mi práctica. 🎯</p>
          </li>
          <li>
            <p>Por lo que a mí respecta, no pararé hasta que consiga dominar todos los puntos entendiendo y conociendo bien la utilización de los mismos, al fin y al cabo, no se trata de que la APP funcione como tal, se trata de entender por qué funciona y cómo se ha hecho para que funcione.</p>
          </li>
          <li>
            <p>No podría cerrar sin antes agradecer la oportunidad de aprender de ti, la implicación que has tenido e incluso el interés mostrado durante este mes. 🚀</p>
          </li>
        </ul>
        <h2>Muchas gracias!</h2>

      </div>
    </>
  )
};

export default About;