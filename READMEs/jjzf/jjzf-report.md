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
### 1.2 System Architecture Diagram
The system follows a layered web-based architecture:
- **Perception Layer**: This layer is responsible for capturing and processing the initial data. It uses OpenCV for color detection, which is crucial for identifying the **colors(RGB-Values)** on the Rubik's Cube.
- **Logical Layer**: This layer handles the core logic of the system. It includes **an RGB color converter** to process the color data and **a cube-solving algorithm** implemented in **Cube.js** to determine the solution steps.
- **Rendering Layer**: This layer is responsible for rendering the virtual cube and providing the user interface. It uses **Three.js** for cube control, **A-Frame.js** for virtual cube rendering, and **Vue.js** along with **static HTML** for the frontend framework.
- **Data Layer**: This layer manages the backend operations and data storage. It includes **an Express.js backend API** for handling requests and **MongoDB** for database storage to persist cube states and other relevant data.
- **Control Layer**: This layer manages the **control flow** and **user interactions**. It includes the start and scan processes, as well as handling user interactions to ensure a smooth user experience.

<details>
  <summary>A Top-Down <strong>Mermaid-based </strong>Graph:</summary>
  ```mermaid
  graph TD;
    subgraph Perception_Layer["Perception Layer"]
      A[Color-Detection-OpenCV/cv2]
    end

    subgraph Logic_Layer["Logic-Layer"]
      B1[RGB-Colour-Convertor]
      B2[CubeSolving Algorithm-Cube.js]
    end
  
    subgraph Rendering_Layer["Rendering-Layer"]
      C1[Cube-Controller-Three.js]
      C2[Virtual Cube Rendering - A-Frame.js]
      C3[Frontend Framework - Vue, statics.html]
    end
  
    subgraph Data_Layer["Data Layer"]
      D1[Backend API - Express.js]
      D2[Database Storage - MongoDB]
    end
  
      subgraph Control-Layer["Control Layer"]
      E1[Start]
      E2[Scan]
      E3[User-Interaction]
    end
  
    A -->|RGB Data| B1
    B1 --> |Color-Cube-Data| B2
    B2 -->|Solution-&-Scramble-Steps| C1
    C1 -->|Rendered Cube| C2
    C2 -->|User Interaction| C3
    C3 -->|Frontend Requests| D1
    D1 -->|Data Persistence| D2
    D2 -->|Stored Cube States| D1
    E1 --> E2
    E2 --> A
    E3 --> C1
    D1 --> C1
    ```
</details>

<details>
  <summary>A Top-Down <strong>SVG-based</strong> Graph:</summary>
    <img src="/.github/images/mermaid-diagram.svg" alt="A Top-Down SVG-based Graph">
</details>

## 2. Getting Started
### 2.1 ```One-Command``` Service Startup in one ```terminal```
This is **a convenient way** to start all the services while is not highly recommended unless the environment and dependencies are configured.
To start with, make sure `npm` tools and python are already installed before starting with the start-run instruction commands.
1. **Install the dependencies with command**: ```npm install```
2. **Start running all the services with command**: ```npm start```
3. **Now, you can visit the front-end** ```localhost``` website.
### 2.2 Run different services in parallels separately with multiple ```terminals``` (Recommended)
#### 2.2.1 Run the Colour-Detection-Services
1. **```cd``` to the ```colour-detection-cube-solver```**: ```cd colour-detection-cube-solver```
2. **Make sure you already have the ```pip``` tool to install the ```pipenv```**
3. **Install ```pipenv```**: ```pip install pipenv```
4. **Install the dependencies for python program**: ```pipenv install```
5. **Start running the colour-Detection-Services**: ```pipenv run python colour.py```
#### 2.2.2 Run the backend Services
1. **```cd``` to the ```backend```**: ```cd backend```
2. **Install the dependencies with command**: ```npm install```
3. **Start running all the services with command**: ```npm start```
#### 2.2.3 Run the frontend Service
1. **```cd``` to the ```frontend```**: ```cd frontend```
2. **Install the dependencies with command**: ```npm install```
3. **Start running all the services with command**: ```npm run dev```
4. **Now, you can visit the front-end ```localhost``` website**

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
  - Designed parts of user interface using html and CSS
  - Added animations to parts of the homepage using javascript
  - Connected the colour detection software webpage to the AR environment webpage using python and javascript
  - Created instructions on how to help users understand how to use the application

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
