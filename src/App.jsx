import { useState } from "react";
import "./App.css";

function numeroALetras(numero) {
  const unidades = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];

  const especiales = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
    "veinte",
    "veintiuno",
    "veintidós",
    "veintitrés",
    "veinticuatro",
    "veinticinco",
    "veintiséis",
    "veintisiete",
    "veintiocho",
    "veintinueve",
  ];

  const decenas = [
    "",
    "",
    "",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];

  const centenas = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  if (numero === 1000) return "mil";
  if (numero === 100) return "cien";

  let resultado = "";

  const centena = Math.floor(numero / 100);
  const resto = numero % 100;

  if (centena > 0) {
    resultado += centenas[centena];
  }

  if (resto > 0) {
    if (resultado !== "") resultado += " ";

    if (resto < 10) {
      resultado += unidades[resto];
    } else if (resto < 30) {
      resultado += especiales[resto - 10];
    } else {
      const decena = Math.floor(resto / 10);
      const unidad = resto % 10;

      resultado += decenas[decena];

      if (unidad > 0) {
        resultado += ` y ${unidades[unidad]}`;
      }
    }
  }

  return resultado;
}

function App() {
  const [paginaActual, setPaginaActual] = useState("inicio");

  const [numeroUno, setNumeroUno] = useState("");
  const [numeroDos, setNumeroDos] = useState("");
  const [resultadoSuma, setResultadoSuma] = useState(null);
  const [errorSuma, setErrorSuma] = useState("");

  const [numeroTraductor, setNumeroTraductor] = useState("");
  const [resultadoTraductor, setResultadoTraductor] = useState("");
  const [errorTraductor, setErrorTraductor] = useState("");

  const [numeroTabla, setNumeroTabla] = useState("");
  const [tablaGenerada, setTablaGenerada] = useState(null);
  const [errorTabla, setErrorTabla] = useState("");

  // Cuando subas tu video a YouTube, pega solamente el ID del video aquí.
  // Ejemplo: https://www.youtube.com/watch?v=abc123
  // El ID sería: abc123
  const videoYoutubeId = "GS7Bf76ab40";

  const cambiarPagina = (pagina) => {
    setPaginaActual(pagina);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const realizarSuma = () => {
    if (numeroUno === "" || numeroDos === "") {
      setErrorSuma("Debes escribir los dos números.");
      setResultadoSuma(null);
      return;
    }

    const primerNumero = Number(numeroUno);
    const segundoNumero = Number(numeroDos);

    if (!Number.isFinite(primerNumero) || !Number.isFinite(segundoNumero)) {
      setErrorSuma("Los valores ingresados no son válidos.");
      setResultadoSuma(null);
      return;
    }

    setErrorSuma("");
    setResultadoSuma(primerNumero + segundoNumero);
  };

  const traducirNumero = () => {
    const numero = Number(numeroTraductor);

    if (
      numeroTraductor === "" ||
      !Number.isInteger(numero) ||
      numero < 1 ||
      numero > 1000
    ) {
      setErrorTraductor("Ingresa un número entero entre 1 y 1000.");
      setResultadoTraductor("");
      return;
    }

    setErrorTraductor("");
    setResultadoTraductor(numeroALetras(numero));
  };

  const generarTabla = () => {
    const numero = Number(numeroTabla);

    if (numeroTabla === "" || !Number.isFinite(numero)) {
      setErrorTabla("Ingresa un número válido.");
      setTablaGenerada(null);
      return;
    }

    setErrorTabla("");
    setTablaGenerada(numero);
  };

  const botonesMenu = [
    { id: "inicio", texto: "Inicio", icono: "⌂" },
    { id: "sumadora", texto: "Sumadora", icono: "+" },
    { id: "traductor", texto: "Número a Letras", icono: "A" },
    { id: "tabla", texto: "Tabla de Multiplicar", icono: "×" },
    { id: "experiencia", texto: "Experiencia Personal", icono: "▶" },
  ];

  const mostrarPagina = () => {
    switch (paginaActual) {
      case "inicio":
        return (
          <section className="pagina pagina-inicio">
            <div className="hero">
              <div className="hero-contenido">
                <span className="etiqueta">PROYECTO ACADÉMICO · REACT</span>

                <h1>
                  Herramientas simples dentro de una experiencia moderna y
                  funcional.
                </h1>

                <p>
                  Esta aplicación reúne diferentes ejercicios de programación
                  en una interfaz clara, organizada, responsive y fácil de
                  utilizar.
                </p>

                <div className="hero-botones">
                  <button
                    className="boton boton-primario"
                    onClick={() => cambiarPagina("sumadora")}
                  >
                    Probar la sumadora
                  </button>

                  <button
                    className="boton boton-secundario"
                    onClick={() => cambiarPagina("traductor")}
                  >
                    Traducir un número
                  </button>
                </div>
              </div>

              <div className="hero-estadisticas">
                <div className="estadistica">
                  <strong>5</strong>
                  <span>Vistas principales</span>
                </div>

                <div className="estadistica">
                  <strong>1–1000</strong>
                  <span>Rango del traductor</span>
                </div>

                <div className="estadistica">
                  <strong>×13</strong>
                  <span>Tabla de multiplicar</span>
                </div>
              </div>
            </div>

            <div className="seccion-informacion">
              <div className="tarjeta tarjeta-perfil">
                <div className="foto-contenedor">
                  <img
                    src="/foto-2x2.jpg"
                    alt="Foto personal de Gerald Pascual"
                    className="foto-perfil"
                  />
                </div>

                <div className="perfil-texto">
                  <span className="subtitulo">Información del estudiante</span>
                  <h2>Gerald Pascual</h2>

                  <div className="datos-personales">
                    <div className="dato">
                      <span>Nombre</span>
                      <strong>Gerald</strong>
                    </div>

                    <div className="dato">
                      <span>Apellido</span>
                      <strong>Pascual</strong>
                    </div>

                    <div className="dato">
                      <span>Correo electrónico</span>
                      <strong>20222148@itla.edu.do</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tarjeta tarjeta-descripcion">
                <span className="subtitulo">Sobre el proyecto</span>
                <h2>Una aplicación creada para practicar lógica y diseño</h2>

                <p>
                  El proyecto permite trabajar con estados, entradas de usuario,
                  validaciones, operaciones matemáticas y navegación entre
                  diferentes vistas.
                </p>

                <ul className="lista-caracteristicas">
                  <li>Interfaz adaptable para computadora, tableta y móvil.</li>
                  <li>Animaciones suaves y diseño profesional.</li>
                  <li>Traductor desarrollado sin utilizar APIs externas.</li>
                </ul>
              </div>
            </div>
          </section>
        );

      case "sumadora":
        return (
          <section className="pagina pagina-herramienta">
            <div className="encabezado-pagina">
              <span className="etiqueta">OPERACIÓN MATEMÁTICA</span>
              <h1>Sumadora</h1>
              <p>Ingresa dos números para obtener el resultado de la suma.</p>
            </div>

            <div className="tarjeta formulario-tarjeta">
              <div className="grupo-formulario">
                <label htmlFor="numeroUno">Primer número</label>
                <input
                  id="numeroUno"
                  type="number"
                  value={numeroUno}
                  onChange={(evento) => setNumeroUno(evento.target.value)}
                  placeholder="Ejemplo: 25"
                />
              </div>

              <div className="simbolo-operacion">+</div>

              <div className="grupo-formulario">
                <label htmlFor="numeroDos">Segundo número</label>
                <input
                  id="numeroDos"
                  type="number"
                  value={numeroDos}
                  onChange={(evento) => setNumeroDos(evento.target.value)}
                  placeholder="Ejemplo: 15"
                />
              </div>

              <button
                className="boton boton-primario boton-ancho"
                onClick={realizarSuma}
              >
                Calcular suma
              </button>

              {errorSuma && <p className="mensaje-error">{errorSuma}</p>}

              {resultadoSuma !== null && (
                <div className="resultado">
                  <span>Resultado</span>
                  <strong>{resultadoSuma}</strong>
                </div>
              )}
            </div>
          </section>
        );

      case "traductor":
        return (
          <section className="pagina pagina-herramienta">
            <div className="encabezado-pagina">
              <span className="etiqueta">LÓGICA SIN API</span>
              <h1>Traductor de Números a Letras</h1>
              <p>
                Ingresa un número entero entre 1 y 1000 para mostrarlo escrito en
                español.
              </p>
            </div>

            <div className="tarjeta formulario-tarjeta">
              <div className="grupo-formulario">
                <label htmlFor="numeroTraductor">Número a traducir</label>
                <input
                  id="numeroTraductor"
                  type="number"
                  min="1"
                  max="1000"
                  value={numeroTraductor}
                  onChange={(evento) => setNumeroTraductor(evento.target.value)}
                  placeholder="Ejemplo: 245"
                />
              </div>

              <button
                className="boton boton-primario boton-ancho"
                onClick={traducirNumero}
              >
                Traducir número
              </button>

              {errorTraductor && (
                <p className="mensaje-error">{errorTraductor}</p>
              )}

              {resultadoTraductor && (
                <div className="resultado resultado-texto">
                  <span>El número se escribe:</span>
                  <strong>{resultadoTraductor}</strong>
                </div>
              )}
            </div>
          </section>
        );

      case "tabla":
        return (
          <section className="pagina pagina-herramienta">
            <div className="encabezado-pagina">
              <span className="etiqueta">MULTIPLICACIÓN</span>
              <h1>Tabla de Multiplicar</h1>
              <p>
                Ingresa un número para generar su tabla de multiplicar desde el 1
                hasta el 13.
              </p>
            </div>

            <div className="tarjeta formulario-tarjeta">
              <div className="grupo-formulario">
                <label htmlFor="numeroTabla">Número para la tabla</label>
                <input
                  id="numeroTabla"
                  type="number"
                  value={numeroTabla}
                  onChange={(evento) => setNumeroTabla(evento.target.value)}
                  placeholder="Ejemplo: 8"
                />
              </div>

              <button
                className="boton boton-primario boton-ancho"
                onClick={generarTabla}
              >
                Generar tabla
              </button>

              {errorTabla && <p className="mensaje-error">{errorTabla}</p>}

              {tablaGenerada !== null && (
                <div className="tabla-resultados">
                  {Array.from({ length: 13 }, (_, indice) => indice + 1).map(
                    (multiplicador) => (
                      <div className="fila-tabla" key={multiplicador}>
                        <span>{tablaGenerada}</span>
                        <span>×</span>
                        <span>{multiplicador}</span>
                        <span>=</span>
                        <strong>{tablaGenerada * multiplicador}</strong>
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>
          </section>
        );

      case "experiencia":
        return (
          <section className="pagina pagina-herramienta">
            <div className="encabezado-pagina">
              <span className="etiqueta">EXPERIENCIA PERSONAL</span>
              <h1>Mi experiencia realizando la tarea</h1>
              <p>
                En esta sección se presenta el video explicando el proceso,
                dificultades y aprendizajes obtenidos.
              </p>
            </div>

            <div className="tarjeta video-tarjeta">
              {videoYoutubeId ? (
                <div className="video-contenedor">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoYoutubeId}`}
                    title="Video de experiencia personal"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="video-pendiente">
                  <span className="icono-video">▶</span>
                  <h2>Video pendiente de agregar</h2>
                  <p>
                    Cuando subas tu video a YouTube, copia el ID del video y
                    colócalo en la variable <strong>videoYoutubeId</strong> del
                    archivo App.jsx.
                  </p>
                </div>
              )}
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="aplicacion">
      <header className="barra-superior">
        <button className="marca" onClick={() => cambiarPagina("inicio")}>
          <span className="marca-icono">GP</span>
          <span className="marca-texto">
            <strong>Gerald Pascual</strong>
            <small>Aplicación React</small>
          </span>
        </button>

        <nav className="menu">
          {botonesMenu.map((boton) => (
            <button
              key={boton.id}
              className={paginaActual === boton.id ? "activo" : ""}
              onClick={() => cambiarPagina(boton.id)}
            >
              <span>{boton.icono}</span>
              {boton.texto}
            </button>
          ))}
        </nav>
      </header>

      <main>{mostrarPagina()}</main>

      <footer className="pie-pagina">
        <p>Proyecto académico desarrollado con React</p>
        <p>Gerald Pascual · 20222148</p>
      </footer>
    </div>
  );
}

export default App;