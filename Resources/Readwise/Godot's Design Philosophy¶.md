---
obsidianEditingMode: live
obsidianUIMode: preview
---
# Godot's Design Philosophy¶

> [!info]- Metadata
> **Tags**:: #process-me #resources/articles #dev/game-dev/engines
> 
> **Type**:: Article
> **Source**:: [Link](https://docs.godotengine.org/en/stable/getting_started/introduction/godot_design_philosophy.html)
> **Author**:: Godot Engine documentation
> **Full Title**:: Godot's Design Philosophy¶

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Highlights

> [!quote] [View Highlight](https://read.readwise.io/read/01gn3997c3cdsepdn38dd3hy73)
> Godot embraces object-oriented design at its core with its flexible scene system and Node hierarchy. It tries to stay away from strict programming patterns to offer an intuitive way to structure your game.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39cbz4nqkx6dm53jeatbk7)
> For one, Godot lets you **compose or aggregate** scenes. It's like nested prefabs: you can create a BlinkingLight scene and a BrokenLantern scene that uses the BlinkingLight. Then, create a city filled with BrokenLanterns. Change the BlinkingLight's color, save, and all the BrokenLanterns in the city will update instantly.
> On top of that, you can **inherit** from any scene.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39df20g6djkvwahf9eewt2)
> A Godot scene could be a Weapon, a Character, an Item, a Door, a Level, part of a level… anything you'd like.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39fqm49sxg9dd9k191bps2)
> It's different from prefabs you find in several 3D engines, as you can then inherit from and extend those scenes. You may create a Magician that extends your Character. Modify the Character in the editor and the Magician will update as well.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39g1y1fmrn3fr3v9y87gy5)
> ![image0](https://docs.godotengine.org/en/stable/getting_started/introduction/godot_design_philosophy.html/../../_images/engine_design_01.png)


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39k7tsb6h3ddsmg7f0ey78)
> Also note that Godot offers many different types of objects called nodes, each with a specific purpose.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39kk01cgbd9zy3skz2aqsk)
> Nodes are part of a tree and always inherit from their parents up to the Node class.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39kx88rj4me42ats25xka0)
> Although the engine does feature some nodes like collision shapes that a parent physics body will use, most nodes work independently from one another.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39njwef7p2fc3g9nzwbctb)
> ![image1](https://docs.godotengine.org/en/stable/getting_started/introduction/godot_design_philosophy.html/../../_images/engine_design_02.png)


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39nx7js4hdeaevww8z81ax)
> Sprite is a Node2D, a CanvasItem and a Node. It has all the properties and features of its three parent classes


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39sv7r1q2veas85snpfdh1)
> Godot tries to provide its own tools to answer most common needs. It has a dedicated scripting workspace, an animation editor, a tilemap editor, a shader editor, a debugger, a profiler, the ability to hot-reload locally and on remote devices, etc.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39v9aefvx23jp8rd5k4t3a)
> That is also partly why Godot offers its own programming languages GDScript and VisualScript, along with C#. They're designed for the needs of game developers and game designers, and they're tightly integrated in the engine and the editor.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39w5zkzswp40jhpy4fq06a)
> GDScript lets you write code using an indentation-based syntax, yet it detects types and offers a static language's quality of auto-completion. It is also optimized for gameplay code with built-in types like Vectors and Colors.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39wk8bh13wg1sph48e0tzc)
> Note that with GDNative, you can write high-performance code using compiled languages like C, C++, Rust, or Python (using the Cython compiler) without recompiling the engine.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39x2hgsg5baz3tvt9f9hve)
> ![image3](https://docs.godotengine.org/en/stable/getting_started/introduction/godot_design_philosophy.html/../../_images/engine_design_visual_script.png)
> *VisualScript is a node-based programming language that integrates well in the editor. You can drag and drop nodes or resources into the graph to create new code blocks.*


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39xxnhd67yqqhf849wnmbk)
> Note that the 3D workspace doesn't feature as many tools as the 2D workspace.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39y4wv59thm4wbe6mq5g32)
> Godot provides a complete API to extend the editor's functionality using game code.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn39z9p451ypy6qkq7er2325)
> Godot offers a fully open source codebase under the **MIT license**. This means all the technologies that ship with it have to be Free (as in freedom) as well.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn3a0svq84vjx037cxa0hk86)
> Anyone can plug in proprietary tools for the needs of their projects — they just won't ship with the engine.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn3a1k8q096x3mtcpbx1w03j)
> an open codebase means you can **learn from and extend the engine** to your heart's content.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn3a3hqjtp6ttvnk7k2wzqnf)
> The Godot editor runs on the game engine. It uses the engine's own UI system, it can hot-reload code and scenes when you test your projects, or run game code in the editor. This means you can **use the same code** and scenes for your games, or **build plugins and extend the editor.**


> [!quote] [View Highlight](https://read.readwise.io/read/01gn3a44p5drqwaecv9e9txj1x)
> With the `tool` keyword, you can run any game code in the editor.


> [!quote] [View Highlight](https://read.readwise.io/read/01gn3a4cpcz47krj5q3z9pqwmf)
> ![image5](https://docs.godotengine.org/en/stable/getting_started/introduction/godot_design_philosophy.html/../../_images/engine_design_rpg_in_a_box.png)
> *RPG in a Box is a voxel RPG editor made with Godot 2. It uses Godot's UI tools for its node-based programming system and for the rest of the interface.*


> [!quote] [View Highlight](https://read.readwise.io/read/01gn3a77t1yptjxpf6sdnxrekz)
> the base unit for 2D scenes is pixels

