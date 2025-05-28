(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const L=()=>{const n=document.getElementById("albumPhotos"),s=document.querySelectorAll(".pictureFrame"),i=document.getElementById("contentAlbum"),d=[`
    <h2>DIBUJAR</h2>
              <p>Me gusta mucho dibujar,<br>
                es mi actividad favorita<br>
                el poder liberar mi creatividad en un lienzo<br>
                es bastante relajante, me encanta la sensación <br>
                de poder dar vida por medio del arte
                <br> <br> <br>
                En la imagen de la izquierda puedes observar como <br>
                 hago un dibujo en digital de uno de mis personajes de <br>
                  anime preferidos ^^ <br>
              </p>
    `,`
    <h2>EJERCITARME</h2>
      <p>
        Me gusta mucho ir al gimnasio, quizas no con el objetivo de  <br>
        ponerme muy fuerte, pero si con el poder de liberarme y superarme <br>
         fisicamente, de poder lograr algo con fuerza fisica, esa posibilidad <br>
          de superarte se siente increible.  <br>
          <br> <br>
          Me gusta mucho entrenar, sobre todo los <br>
           dias de pierna.  <br>
           <br> <br> <br>
           Son mis preferidos contrario a lo que suele gustarle a los demás.
      </p>
    `,`
    <h2>LEER</h2>
      <p>
        Me encanta leer, claro, siempre que tengo tiempo y puedo, me gusta
         envolverme en historias fascinantes, la narrativa es un elemento <br>
          tan impresionante, te hace crear los escenarios en tu cabeza de <br>
           forma tan fabulosa, poder adentrarte y simpatizar con los personajes <br>
            es increible. Cada libro es una experiencia unica, el autor demuestra <br>
             sus sentimientos, pensamientos y ideas en cada uno de sus libros.  <br>
              <br> <br> <br>
             Mis autores favoritos son Lovecraft, Allan Poe, Stephen King.  <br>
              <br> <br>
             Mi serie de <br>
              novela favorita actual son los Crimenes de Fjalbacka. <br>
      </p>
    `,`
    <h2>ESCUCHAR MÚSICA</h2>
      <p>
        Me encanta descubrir nuevos generos de música, y  <br>
        profundizar en los <br>
         que conozco actualmente, escuchar música es hermoso,  <br>
         transmite tantos <br>
          <br>
          sentimientos, de forma tan melodica. <br>
      </p>
    `];s.forEach(e=>{let t=!1,o=0,r=0;const p=n.getBoundingClientRect(),h=e.getBoundingClientRect(),C=Math.random()*(p.width-h.width),M=Math.random()*(p.height-h.width);e.style.left=`${C}px`,e.style.top=`${M}px`;const b=(a,c)=>{t=!0,e.classList.add("dragging");const l=e.getBoundingClientRect();o=a-l.left,r=c-l.top,n.appendChild(e),console.log(e.dataset.id),i.innerHTML=d[e.dataset.id]},g=(a,c)=>{if(!t)return;let l=a-n.getBoundingClientRect().left-o,u=c-n.getBoundingClientRect().top-r;e.style.left=`${l}px`,e.style.top=`${u}px`},f=()=>{if(!t)return;t=!1,e.classList.remove("dragging");let a=parseInt(e.style.left),c=parseInt(e.style.top);const l=n.clientWidth-e.offsetWidth,u=n.clientHeight-e.offsetHeight;a=Math.min(Math.max(0,a),l),c=Math.min(Math.max(0,c),u),e.style.left=`${a}px`,e.style.top=`${c}px`,e.style.zIndex=1};e.addEventListener("mousedown",a=>{a.preventDefault(),b(a.clientX,a.clientY);const c=u=>g(u.clientX,u.clientY),l=()=>{f(),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",l)}),e.addEventListener("touchstart",a=>{const c=a.touches[0];b(c.clientX,c.clientY);const l=v=>{v.preventDefault();const y=v.touches[0];g(y.clientX,y.clientY)},u=()=>{f(),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",u)};document.addEventListener("touchmove",l,{passive:!1}),document.addEventListener("touchend",u)})})},x=()=>{const n={universityDiv:{rotatedText:"2022-ACTUAL",studyContents:`
                <h2>Universidad</h2>
                <h3>
                  Instituto Politecnico Nacional (IPN) -
                  Escuela Superior de Computo (ESCOM)
                </h3>
                <h4>
                  Ubicación: <br> </h4>
                <h5>
                  Unidad Profesional Adolfo López Mateos, Av. Juan de Dios Bátiz, Nueva Industrial Vallejo, Gustavo A. Madero, 07320 Ciudad de México, CDMX.
        </h5>
                <br>
                <h3>
                    Ingeniero en Sistemas Computacionales
                </h3>
                <p>
                    En esta etapa me encuentro formandome profesionalmente, como un ingeniero en sistemas computacionales. <br>
                    Me gusta mucho mi escuela, me encuentro muy conforme con lo que aprendo, y todos los días doy lo mejor de mi para poder avanzar como persona!.
                </p>
            `},highSchoolDiv:{rotatedText:"2017-2020",studyContents:`
                <h2>PREPARATORIA</h2>
                <h3>
                    Colegio de Estudios Cientificos y Tecnologicos del Estado de México (CECYTEM) Plantel Tultepec
                </h3>
                <h4>
                    Ubicación: <br>
                </h4>
                <h5>
                    Calle 16 Nte s/n, Unidad CTM, 54985 Santiago Teyahualco, Méx.
                </h5>
                <h3>
                    Técnico en Diseño Gráfico Digital.
                </h3>
                <p>
                    En esta etapa de mi vida adquiri conocimientos como Diseñador Gráfico digital, aprendiendo de artes y humanidades. Disfrutando de crear algo bien
                    que satisfaciera mis deseos, aprendiendo de estetica y del equilibrio en los diseños, así como técnicas digitales para poner en práctica, sin olvidar
                    lo tradicional de diseñar.
                </p>
            `},secondaryDiv:{rotatedText:"2014-2017",studyContents:`
                <h2>SECUNDARIA</h2>
                <h3>
                    Niños Héroes
                </h3>
                <h4>
                    Ubicación: <br>
                </h4>
                <h5>
                    Av. Dr. Gustavo Baz 4000, Hab Valle Hermoso, 54010 Tlalnepantla, Méx.
                </h5>
                <p>
                    En esta etapa de mi vida me forme como estudiante, con alto rigor y determinación en una vida estudiantil crítica y plena.
                    Consiguiendo conocimientos básicos.
                </p>
            `}};document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".card-image");s.forEach(i=>{i.addEventListener("click",()=>{console.log("Se hizo clic en:",i.id);const d=document.getElementById("yearsTimelapse"),e=document.getElementById("studyContents"),t=n[i.id];e.innerHTML=t.studyContents,d.textContent=t.rotatedText,s.forEach(o=>o.classList.remove("selected")),i.classList.add("selected")})})})};let m=null,E=null;const T=(n,s,i=50)=>{m&&(clearTimeout(m),m=null);const d=n.textContent;let e=d.length;function t(){e>0?(n.textContent=d.slice(0,e-1),e--,m=setTimeout(t,i)):r()}let o=0;function r(){o<s.length?(n.textContent+=s.charAt(o),o++,m=setTimeout(r,i)):m=null}t()},I=()=>{const n={aboutmeSec:"Acerca de mi",educationSec:"Mis estudios",hobbiesSec:"Mis hobbies",factsSec:"Criptología"},s=document.getElementById("actualSection"),i=new IntersectionObserver(t=>{const o=t.filter(r=>r.isIntersecting).sort((r,p)=>p.intersectionRatio-r.intersectionRatio);if(o.length>0){const r=o[0].target.id;r!==E&&(E=r,T(s,n[r]||""))}},{root:null,rootMargin:"0px",threshold:.3});Object.keys(n).forEach(t=>{const o=document.getElementById(t);o&&i.observe(o)});const d=document.getElementById("circleButton"),e=document.getElementById("nav-bar");d.addEventListener("click",()=>{d.classList.toggle("rotateElement"),e.classList.toggle("collapsed")})};I();x();L();
