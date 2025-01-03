---
layout: page
title: Lost in Mutrah
importance: 1
description: Independant study project on Omani culture and 3D Game Development
image:
tag: work
---

<div class="row mt-3">
<div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/walkingaround.gif" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/jidointeraction.gif" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>

</div>

---
layout: page
title: Lost in Mutrah
importance: 1
description: Independant Study project on Omani culture and 3D Game Development
image:
tag: work
---

## <span style="color: #8B4513;">‘Lost in Mutrah’ Synopsis</span>
I developed a 3D third-person storytelling game set in Souq Mutrah, Oman. In the game, you play as a 12-year-old boy named Qadr, who has just moved to the country and is searching for ingredients to make the traditional Omani dessert, Halwa.

## <span style="color: #2E8B57;">What I learned</span>
- Creating camera-following mechanics using Cinemachine, a Unity (game engine I used) tool that simplifies camera management by allowing it to dynamically follow and frame the player. This was essential for ensuring smooth and immersive gameplay, as the camera needed to respond fluidly to Qadr's movements and interactions in the 3D environment, as well as the NPC interactions.
- Modeling 3D architecture, low-poly characters, and items found in a traditional market (souq).
- Developing player movement, including seamless animation swaps when the player moves backwards.
- Managing interaction with different NPCs via programming dependencies.
- Designing and implementing natural lighting for the environment.

## <span style="color: #4682B4;">Game Cycle & Evolution of the Game</span>
I began by researching a few games in order to understand how other developers approach the subject matter and represent Middle Eastern culture. While I was able to find this in certain popular AAA titles such as Assassins' Creed, I was unable to identify works from small or solo developers that would represent a comparable development target. Without this, I decided to establish my own scenario and to begin by prototyping aspects that I knew I was likely to include, such as player movement, a dialog system, and a level to explore.

I structured my development into two- to three-week cycles, reworking prototypes based on feedback and refining core aspects of the game:
- <span style="color: #4169E1;"><strong>Challenge</strong></span>: Early prototypes of the environment lacked proportional accuracy, with walls and buildings appearing unrealistic.
  - <span style="color: #4169E1;"><strong>Solution</strong></span>: I scaled architectural elements to two or three times their real-life height, ensuring the environment felt immersive and visually consistent.
  - <span style="color: #4169E1;"><strong>Outcome</strong></span>: The souq gained a distinct and believable structure, with added definition such as doors for each stall.
- <span style="color: #4169E1;"><strong>Challenge</strong></span>: Writing dialogue that felt authentic while effectively conveying cultural elements.
  - <span style="color: #4169E1;"><strong>Solution</strong></span>: I iteratively wrote drafts, tested dialogue through playtesting, and consulted a screenwriter to refine storytelling techniques.
  - <span style="color: #4169E1;"><strong>Outcome</strong></span>: Dialogue became clearer, richer, and better aligned with the game’s themes and cultural goals.
- <span style="color: #4169E1;"><strong>Challenge</strong></span>: Creating a visually cohesive environment that matched the souq's atmosphere.
  - <span style="color: #4169E1;"><strong>Solution</strong></span>: I explored multiple color palettes and implemented dynamic lighting to enhance the market stalls' natural appearance.
  - <span style="color: #4169E1;"><strong>Outcome</strong></span>: The environment achieved a cozy, market-like aesthetic that complemented the narrative experience.
- <span style="color: #4169E1;"><strong>Challenge</strong></span>: Ensuring dialogue interactions were smooth and visually clean.
  - <span style="color: #4169E1;"><strong>Solution</strong></span>: I designed off-camera setups to frame dialogue exchanges without disrupting gameplay.
  - <span style="color: #4169E1;"><strong>Outcome</strong></span>: Dialogue sequences became immersive and seamless compared to adjusting one camera.

## <span style="color: #8A2BE2;">The Dialogue</span>
To begin, I created a document highlighting all the aspects of my culture that I loved. I then narrowed it down to the top five elements I wanted to integrate into the game. Using these, I wrote dialogue between characters, each of whom represented a pillar of Omani culture.
At first, I struggled with how to structure the script. I wrote multiple drafts and received feedback from Carnegie Mellon University's ETC game design and development faculty. Additionally, I consulted with a screenwriter to refine my approach to dialogue structure.

## <span style="color: #DC143C;">The Characters</span>
- **Jido**: A grandfather figure who possesses a secret Halwa recipe.
- **Rahima**: An elderly woman who owns a honey shop.
- **Mohammed**: A spice salesman.
- **Qadr**: The main character, a curious boy exploring the souq.

## <span style="color: #FF8C00;">The Environment</span>
One of my biggest challenges was creating homegrown 3D models that accurately represented where I’m from. I couldn’t find pre-existing models that matched the culture or style I needed. The closest I found were generic "desert people" models for NPCs. To capture authenticity, I shifted my focus to Souq Mutrah, a 200-year-old marketplace with rich history and character.

I sourced reference material from an academic paper that included a top-down map of the store distribution, as well as Google Maps images. Initially, I tried recreating the map section by section, but this proved too complex. Instead, I pivoted to a simpler three-corridor layout that still conveyed the souq’s essence.

I also created smaller objects like incense burners, bags, and containers to populate the market stalls. Additionally, I 3D-modeled the characters to align with the game’s low-poly style.

One of the most rewarding moments was when my academic advisor, who has visited Souq Mutrah, recognized the central chandelier I recreated in the game.

## <span style="color: #32CD32;">Next steps</span>
There are several features I plan to add or improve:
- NPC animations and movable characters.
- The "cat quest" side mission.
- Integrating settings for cultural music.
- Fixing a shaky camera bug.
- Making each market stall more distinct to enhance player navigation and storytelling.
