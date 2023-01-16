---
obsidianEditingMode: live
obsidianUIMode: source
---
%%
date:: [[2022-11-14]] [[2022-11-15]] [[2022-11-17]]
%%

# Fundamentos de Arquitectura de Software

> [!info]- Metadata
> **Tags**:: #process-me #resources/courses #dev
> **Parents**:: [[Resources]]
> 
> **Type**:: Course
> **Source**:: [Link](https://platzi.com/cursos/arquitectura-software/)
> **Author**:: Guido Contreras Woda
> **Publication Date**:: 

## Notes

### El proceso de desarrollo de software

#### Etapas

##### Método Tradicional

![](assets/arquitectura-de-software-tradicional-etapas.png)

- Se sigue un flujo lineal con una entrada y una salida.
- La salida de una etapa conecta con la entrada de la etapa siguiente.

###### Análisis de requerimientos

![](assets/arquitectura-de-software-tradicional-etapas-1.png)

- Nace de un disparador (idea, problema por resolver, etc)
- Hay que entender qué es lo que se va a construir. Para eso se descubren los requerimientos.

###### Diseño de la Solución

![[arquitectura-de-software-tradicional-etapas-2.png]]

- Análisis profundo de los problemas y propuesta de diseño de la solución del problema.
- Se implementan modelos, documentación, etc.
- En una metodología tradicional, esta es la etapa en la que se trabaja más.

###### Desarrollo y Evaluación

![[arquitectura-de-software-tradicional-etapas-3.png]]

- Los programadores trabajan en implementar el diesño de la solución.
- Una vez terminada, se tiene un artefacto de software.

###### Despliegue

![[arquitectura-de-software-tradicional-etapas-4.png]]

- Se da el artefacto de software al usuario.
- Se requieren cosas como infraestructura, servidores para alojar el código, etc.

###### Mantenimiento y evolución

![[arquitectura-de-software-tradicional-etapas-5.png]]

- Está compuesta por [[#Desarrollo y Evaluación|Desarrollo]], [[#Despliegue]] y [[#Mantenimiento y evolución|Mantenimiento]].
- El software se mantiene hasta que el sistema ya no es necesario.
- Una vez el software no es necesario, se considera deprecado.

#### Dificultades en el Desarrollo de Software

Según [[No Silver Bullet]] de Frederick Brooks, las dificultades que se pueden presentar a la hora de resolver un problema se pueden dividir en [[#Dificultades Esenciales]] y [[#Dificultades Accidentales]].

##### Dificultades Esenciales

![[arquitectura-de-software-problemas-esenciales.png]]

- Están relacionados con la especificación, diseño y el entendimiento del concepto.
- Se dividen en:
	- Complejidad
	- Conformidad
	- Tolerancia al cambio
	- Invisibilidad

###### Complejidad

- Se refiere a qué tan complejo es el problema en sí.
- Un problema puede hacerse más complejo si tiene más variables, condiciones, etc.
- Hay problemas más complejos que otros.

###### Conformidad

- Se refiere a el contexto en el que se va a usar el software. El software debe adaptarse a este contexto.
- El contexto no siempre va a ser perfecto.

###### Tolerancia al cambio

- Se refiere a si luego de terminado el software, este podrá adaptarse a los cambios del problema.
- Si hay cambios en el problema, el software debe poder cambiar para adaptarse.

###### Invisibilidad

- Trabajar con software es difícil porque no es algo tangible.
- El software no tiene una forma tangible, por lo que es difícil entender su "forma".
- La forma del software está plasmada en código, documentación, decisiones, etc. Todo esto es invisible para el usuario.

##### Dificultades Accidentales

![[arquitectura-de-software-problemas-accidentales.png]]

- Tienen que ver con las plataformas, tecnologías, lenguajes, etc.
- Son dificultades generales que no están relacionados con el problema que se quiere resolver.

##### Hacer software siempre será difícil

> [!quote]
> Considero a la especificación, diseño y comprobación del concepto la parte difícil de hacer software. (…) Si esto es cierto, hacer software **siempre será difícil**. No existe la bala de plata.

\- [[No Silver Bullet]] (Frederick P. Brooks Jr., 1986)

- Si lo difícil de hacer software es resolver las dificultades esenciales, hacer software siempre será difícil.

##### ¿Cómo resolver las dificultades esenciales?

![[arquitectura-de-software-resolver-dificultades-esenciales.png]]

- **No desarrollar**: Algunos problemas pueden resolverse utilizando sistemas ya existentes. Osea, librerías externas, programas, etc.
- **Prototipado rápido**: Se usa para saber lo antes posible de si estamos resolviendo el problema correcto.
- **Desarrollo evolutivo**: Se hace un desarrollo iterativo para ir cambiando el sistema haciendo cambios pequeños.
- **Grandes diseñadores**: Se necesita de alguien que sepa abstraerse de un problema para entenderlo y diseñar la mejor solución.

#### Roles en metodologías tradicionales y ágiles

|                                     | Tradicional                   | Ágil                 |
| ----------------------------------- | ----------------------------- | -------------------- |
| Expertos del producto               | Experto del dominio           | Stakeholder          |
| Define el problema y requerimientos | Analista                      | Dueño / cliente      |
| Opera y mantiene el sistema         | Administrador de sistemas     | DevOps / SRE         |
| Desarrollan y prueban el producto   | QA, Desarrollador, Arquitecto | Equipo de desarrollo |
| Gestionan el proyecto               | Project Manager               | Facilitador          |

### Introducción a la arquitectura de software

#### ¿Qué es arquitectura de software?

> [!quote]
> La estructura del sistema, compuesta or elementos de software, sus propiedades visibles y sus relaciones.

\- [[Software Architecture in Practice]] (Bass, Clements & Kazman, 2003)

> [!quote]
> El conjunto de decisiones principales de diseño tomadas para el sistema.

\- [[Software Architecture: Foundations, Theory and Practice]] (Taylor, 2010)
 

> [!quote]
> (…) la arquitectura se reduce a las cosas importantes, cualesquiera que sean.

\- [[Patterns of Enterprise Application Architecture]] (Fowler, 2002)

> [!example] Example: Twitter
> ![[arquitectura-de-software-ejemplo-twitter.png]]

> [!example] Example: Amazon
> ![[arquitectura-de-software-ejemplo-amazon.png]]

> [!example] Example: Flux
> ![[arquitectura-de-software-ejemplo-flux.png]]

#### La importancia de la comunicación - Ley de Conway

- A medida que el equipo crece, ==es necesario definir equipos que tengan un propósito definido. De esta forma hay una mejor comunicación entre ellos==.
- Los equipos que logren una buena comunicación en el mundo real, tendrán mas probabilidades de creare interfaces de software de mejor calidad entre sus subsistemas.

#### Objetivos del arquitecto

- ==El arquitecto conecta los Stakeholders y sus requerimientos con la implementación del sistema==.
- Los stake holders tienen diferentes requerimientos que afectarán al sistema de diferentes formas.
- Entre los Stakeholders y sus requerimientos están:
	- **Cliente**: Entregar a tiempo y dentro del presupuesto.
	- **Manager**: Permite equipos independientes y comunicación clara.
	- **Desarrollador**: Facilidad para implementar y mantener.
	- **Usuario**: Sistema confiable y alta disponibilidad.
	- **QA**: Facilidad para probar el sistema.

#### Arquitectura y metodologías

##### Metodologías tradicionales

![[arquitectura-de-software-metodologias-tradicional-diseño.png]]

- La definición del problema, los requerimientos, las restricciones y los riesgos ayudan al arquitecto a tomar decisiones.
- El arquitecto hace ==toda la solución antes de recibir un feedback==.

##### Metodologías ágiles

![[arquitectura-de-software-metodologias-agil.png]]

- Se planea la arquitectura para ==tomar las deciciones mínimas importantes==.
- Se hacen sistemas para ==resolver únicamente las prioridades del backlog[^1]==.
- Se recibe ==feedback constante== mediante métricas y alertas.
- De acuerdo al feedback, ==se reevalúan las decisiones tomadas== y se pantea de nuevo la arquitectura.

[^1]: El backlog es la lista de problemas que se deben resolver y requerimientos que se deben cumplir. En otras palabras, la lista de tareas.

### Análisis de requerimientos

#### Entender el problema

- Es importante entender el problema
- ==Hay que separar el problema de la propuesta de solución==. Si no se hace esto, se pueden tomar algunos requerimientos como parte del problema a resolver, cuando en realidad son problemas de implementación de la solución.

##### Espacio del problema vs Espacio de la solución

![[arquitectura-de-software-espacio-problema-vs-espacio-solucion.png]]

###### Espacio del problema

- Se define la idea y se profundiza en ella.
- Se define el criterio de exito.
- Se imaginan las historias de usuario; distintos problemas que pueden tener los usuarios que deben ser tomados en cuenta por la solución.

###### Espacio de la solución

- Consta de un diseño, un desarrollo, etc.
- Se definen los criterios de aceptación del software.
- Se garantiza que los problemas de las historias de usuario se resuelven.

#### Requerimientos

##### Requerimientos del producto

![[arquitectura-de-software-requerimientos-producto.png]]

- **Requerimientos de negocio**: Objetivos de alto nivel.
	- Visión y alcance.
	- Requerimientos de mercado.
- **Requerimientos de usuario**: Objetivos del usuario o tareas que los usuarios deben de ser capaces de ejecutar con el producto.
	- Casos de uso.
	- Descripciones de escenario.
- **Requerimientos funcionales**: Funcionalidad del software que los desarrolladores deben construir en el producto para posibilitar a los usuarios completar sus tareas, y que a su vez satisfagan los requerimientos de negocio.

##### Requerimientos de proyecto