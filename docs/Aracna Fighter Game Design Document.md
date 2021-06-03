# Aracna Fighter Game Design Document


## Introduction

This document specifies a design for the gameplay of Aracna Fighter Game. 

## Scope

This document is intended to be read by programmers.

## Specifications

### The Concept
The Aracna Fighter is a turn-based RPG game. Players travel around the town and try to kill spiders as many as they can.

### Game Flow

The player starts from starting point and can walk around the town. Spiders are invisible to the player and distributed randomly around the map. Once the player steps on the tile that has a spider, it triggers a battle scene. The battle scene has two outcomes, players can defeat the spider and add the score to their score field or get fainted due to low health. If the player fainted game ends. If the spider is defeated players return to the town scene again. If the spider is too powerful for the player, the player can run from it. The player can collect food items that randomly distributed on the map to gain HP.

### Mission/challenge Structure

Spiders have different randomly generated sizes. Attack hitpoints and health of spider calculated by the size of the spider. Bigger spiders are stronger and hard to defeat. In order to get higher points, players should avoid fights with big spiders.

### Objectives 

The objective of the game is to kill the highest amount of spiders.

### Physics 

The game has two different physics. 
The first is town physics which players can travel around the town map using arrow keys. 
The second is battle physics which players can select battle actions using arrow keys and apply actions with the space key.

### Actions

Battle has three actions. 
Attack: Players can attack spiders. This reduces amount of health spiders as player hitpoints.
Run: If the spider too big to defeat, they should run from it. This move most strategical move in the game. In order to get higher points, players should use this move.
Bite: This action can only be made by spiders. If the player attacks the spider, as a response spider will bite the player.

### Game Art

Game Map: Town map inspired by tuxemon game. Same tilemap used for generating the map.
Sprite for player: The cybercity girls character used for the player sprite.
Sprite for spider: Fantasy monster animal sprites used for the spider sprite.
Font: ‘Train One’ font used for the game menu items and texts.
Food sprite: Food items sprite used for food items.
