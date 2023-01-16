---
obsidianEditingMode: live
obsidianUIMode: source
---
%%
date:: [[2022-11-14]]
%%

> [!info]- Metadata
> **Tags**:: #dev
> **Parents**:: [[Software Architecture]]

# Traditional Software Development

It follows a simple linear flow that repeats itself until a software is deprecated.

## Stages

### Define the system's requirements

We need to understand what it is that we're trying to achieve. What is the problem? What are the requirements to solve it? What do we need this system to do?

### Design a solution

After understanding the problem we want to solve, we start thinking of a solution. The design is meant to be as effective as possible, fulfill all requirements.

Most of the work is done here. We design the full system, being as detailed as possible. Because of this, there is not much room for change if needed in the future.

### Development

We work on implementing the design. After this stage, we have a piece of software that solves the original problem.

### Deployment

We make the software available for use. We have to take into consideration things like infrastructure, servers, databases, etc.

### Maintenance

After the software is finished and deployed, we keep track of it for errors. Here, we repeat stages of [[#Development]], [[#Deployment]] and [[#Maintenance]] until the software is considered deprecated.