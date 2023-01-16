---
obsidianEditingMode: live
obsidianUIMode: preview
---
%%
date:: [[2022-11-14]]
%%

> [!info]- Metadata
> **Tags**:: #dev
> **Parents**:: [[Software Development]]

# Software Architecture

## Software Development Methods

- [[Traditional Software Development]]
- [[Agile Software Development]]

## Difficulties in Software Development

While we work on a piece of software, it is common to come across different types of obstacles.

In the book [[No Silver Bullet]], Frederick Brooks gives us two types of difficulties that we can face:

- [[#Essential Difficulties]]
- [[#Accidental Difficulties]]

### Essential Difficulties

These are the difficulties related to to the problem itself, the design of the solution and the understanding of the concept.

These difficulties can be classified in 4 groups:

- Complexity
- Conformity
- Changeability
- Invisibility

#### Complexity

How complex is the problem? We're talking about how many things do we have to consider. The amount of variables affecting it. The more we think about a problem, the more variables we find and, in turn, the more complex the problem gets.

#### Conformity

This refers to the context where the software is going to be used. Sometimes, this context isn't perfect. There might be different things about the context that we might need to consider, to make sure the software will run without problems, no matter where.

#### Changeability

This isn't about how easily we can change a piece of software. Instead, this refers to how well the software can adapt to the problem if it changes. How likely is the problem to change? How well would the system adapt to these changes?

#### Invisibility

There's always the difficulty of the software not having a tangible form. Its form is given by code, documentation, business decisions. This makes it so we can't "see" the system so it's harder to determine its form.

### Accidental Difficulties

These have more to do with things that are unrelated to the original problem. This are more general problems that we can face in any project and could be caused by the technologies that we're using not being capable enough, the hardware that the system is running on, having limited resources, etc.

## We need to solve the essential difficulties

According to Brooks, if the difficult part about making software is solving the essential difficulties, then **making software will always be difficult**.

There is no solution that can solve every problem. This is why we need designers and architects that can look at a problem, and according to its requirements, think of a solution. But coming up with a solution is never easy. Even if we can solve all [[#Accidental Difficulties]], there will always be [[#Essential Difficulties]] that we need to address, and solving all of these difficulties takes time and effort.

### How do we solve the essential difficulties?

#### Don't reinvent the wheel

Someone, somewhere might've already had the same difficulties as you and even developed a library to solve it for everyone to use. Use these libraries and programs to your advantage.

#### Test and prototype

Don't just develop a whole system before testing if you're on the right track.

Sometimes we can stray from the original objective without realizing and if we don't make tests and prototypes to make sure everything is where it needs to be, we will end up with a huge system that we don't need, or one has a whole lot of problems that we could've fixed sooner had we tested the system earlier.

#### Iterative development

This comes along with testing and prototypes. Don't think about making a whole system from 0 to 100. Instead, think of little objectives that need to be done and iterate through them. Make sure the system is usable after every iteration.

> [!hint]
> Every iteration should be a working improvement of an already working smaller system.

#### Designers and architects

It's not enough to know how to code. Someone has to be able to see a problem, understand it, and think of an effective solution.

> [!hint]
> A good design is the base of a good piece of software.

## Related

- [[Fundamentos de Arquitectura de Software - Platzi]]
- [[No Silver Bullet]]