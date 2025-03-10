# Project Overview
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

## Table of Contents

- [1. Overview](#1-overview)
  - [1.1. Core-Positioning](#11-core-positioning)
- [2. Getting Started](#2-getting-started)
  - [2.1  One-Command Service Startup in one terminal
    ](#21-one-command-service-startup-in-one-terminal)
  - [2.2 Run different services in parallels separately with multiple terminals
    ](#22-run-different-services-in-parallels-separately-with-multiple-terminals-recommended)
- [3. Components](#3-components)
- [4. Challenges and Solutions](#4-challenges-and-solutions)
- [5. Team Contributions](#5-team-contributions)

## 1. Overview
### 1.1 Core-Positioning
This project leverages Augmented Reality (AR), color detection program, and an efficient solving algorithm to create an interactive and educational Rubik’s Cube solving experience. It addresses three major challenges in traditional Rubik’s Cube teaching:
- **Portable Virtual Cube**: Play AR or VR versions of the virtual Rubik's Cube anytime, anywhere.
- **Scramble Pattern Database**: Save and manage scrambled cube templates, enabling a variety of gameplay possibilities.
- **Optimal Solving Algorithm**: Utilize algorithmic support to provide users with the most efficient solving solutions.

## 2. Getting Started
### 2.1 One-Command Service Startup in one terminal
This is a convenient way to start all the services while is not highly recommended unless the environment and dependencies are configured.
To start with, make sure `npm` tools and python are already installed before starting with the start-run instruction commands.
1. Install the dependencies with command: ```npm install```
2. Start running all the services with command: ```npm start```
3. Now, you can visit the front-end ```localhost``` website.
### 2.2 Run different services in parallels separately with multiple terminals (Recommended)
#### 2.2.1 Run the Colour-Detection-Services
1. ```cd``` to the ```colour-detection-cube-solver```: ```cd colour-detection-cube-solver```
2. Make sure you already have the ```pip``` tool to install the ```pipenv```
3. Install ```pipenv```: ```pip install pipenv```
4. Install the dependencies for python program: ```pipenv install```
5. Start running the colour-Detection-Services: ```pipenv run python colour.py```
#### 2.2.2 Run the backend Services
1. ```cd``` to the ```backend```: ```cd backend```
2. Install the dependencies with command: ```npm install```
3. Start running all the services with command: ```npm start```
#### 2.2.3 Run the frontend Service
1. ```cd``` to the ```frontend```: ```cd frontend```
2. Install the dependencies with command: ```npm install```
3. Start running all the services with command: ```npm run dev```
4. Now, you can visit the front-end ```localhost``` website

## 3. Components
### 3.1 Color Detection
### 3.2 Rubik’s Cube Solving Algorithm
### 3.3 Rubik’s Cube Model
### 3.4 Rubik’s Cube Controller
### 3.5 Frontend Web Framework

## 4. Challenges and Solutions
### 4.1 Creating the Rubik’s Cube Model
### 4.2 Solving the Rubik’s Cube Controller

## 5. Team Contributions
- **Mohamad Aldawansh**
- **Junjie Zheng Feng**
  - Designed the Rubik’s Cube Model
  - Designed the Rubik’s Cube Controller
  - Maintained the repository file structure
  - Implemented frontend-backend separation
  - Developed frontend Vue framework and configured routes
  - Designed the homepage using Figma and decorated with CSS
- **Daniel Jack Flynn**
- **Darragh Micheal Broderick**

<!-- links -->
[your-project-path]:mohamad03aldawamnah/rubik-s-cube-AR
[contributors-shield]: https://img.shields.io/github/contributors/mohamad03aldawamnah/rubik-s-cube-AR.svg?style=flat-square
[contributors-url]: https://github.com/mohamad03aldawamnah/rubik-s-cube-AR/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mohamad03aldawamnah/rubik-s-cube-AR.svg?style=flat-square
[forks-url]: https://github.com/mohamad03aldawamnah/rubik-s-cube-AR/network/members
[stars-shield]: https://img.shields.io/github/stars/mohamad03aldawamnah/rubik-s-cube-AR.svg?style=flat-square
[stars-url]: https://github.com/mohamad03aldawamnah/rubik-s-cube-AR/stargazers
[issues-shield]: https://img.shields.io/github/issues/mohamad03aldawamnah/rubik-s-cube-AR.svg?style=flat-square
[issues-url]: https://github.com/mohamad03aldawamnah/rubik-s-cube-AR/issues
[license-shield]: https://img.shields.io/github/license/mohamad03aldawamnah/rubik-s-cube-AR.svg?style=flat-square
[license-url]: https://github.com/mohamad03aldawamnah/rubik-s-cube-AR/blob/master/LICENSE.txt
