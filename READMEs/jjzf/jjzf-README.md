# Project Overview
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

## Table of Contents

- [1. Overview](#1-overview)
  - [1.1. Core-Positioning](#11-core-positioning)
  - [1.2 System Architecture Diagram](#12-system-architecture-diagram)
- [2. Getting Started](#2-getting-started)
  - [2.1  One-Command Service Startup in one terminal
    ](#21-one-command-service-startup-in-one-terminal)
  - [2.2 Run different services in parallels separately with multiple terminals
    ](#22-run-different-services-in-parallels-separately-with-multiple-terminals-recommended)
- [3. Components](#3-components)
  - [3.1 Color Detection](#31-color-detection)
  - [3.2 Rubik's Cube Solving Algorithm](#32-rubiks-cube-solving-algorithm)
  - [3.3 Rubik's Cube Model](#33-rubiks-cube-model)
  - [3.4 Rubik's Cube Controller](#34-rubiks-cube-controller)
  - [3.5 Frontend Web Framework](#35-frontend-web-framework)
- [4. Challenges and Solutions](#4-challenges-and-solutions)
  - [4.1 Innovative Construction of the Rubik's Cube Model](#41-innovative-construction-of-the-rubiks-cube-model)
  - [4.2 Breakthroughs in Motion Control System](#42-breakthroughs-in-motion-control-system)
  - [4.3 Key Integration Challenges](#43-key-integration-challenges)
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

Here is the SVG-based **top-down graph**:
![A Top-Down SVG-based Graph](/.github/images/team7_diagram1.svg)

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

#### 3.1.1 Functional Positioning
The primary function of the color detection module is to automatically identify the colors on the six faces of the Rubik's Cube and convert them into a corresponding data format for subsequent solving and interaction. This module captures images of the Rubik's Cube using a camera, processes them using OpenCV, and determines the color based on RGB values. Due to potential misidentifications, an option for manual color correction is provided to ensure accuracy.

#### 3.1.2 Design Principles
The design of the color detection module follows these principles:
- **Accuracy**: Strive to accurately identify the color of each face of the Rubik’s Cube to ensure correct solving later on.
- **Real-time Performance**: Process camera input in real-time with minimal delay to provide a smooth user experience.
- **Fault Tolerance**: Account for variations in lighting conditions and camera quality, with a fault tolerance mechanism through manual correction to complement automatic detection.
- **User-Friendliness**: Provide a simple interface for manual color correction via JavaScript, allowing users to adjust the colors.

#### 3.1.3 Key Process Flow
The key process flow for color detection is as follows:

1. **Image Capture**:
  - The front-end application triggers the camera via a Flask service to capture an image of the Rubik’s Cube.

2. **Image Processing and Color Detection**:
  - OpenCV is used to process the image, including noise reduction, color space conversion, and other image processing tasks.
  - The image is then converted into the RGB color space, and each cube's color is determined based on RGB values.

3. **Color Matching and Judgment**:
  - Predefined RGB ranges are compared to the expected Rubik’s Cube colors to determine each cube’s color. For detected colors that don't match expectations, machine learning or color thresholding may be applied to correct them.

4. **Data Transfer and Feedback**:
  - The identified color data is transmitted to the front-end through the Flask server, for use in the AR environment or solving system.

5. **Manual Correction**:
  - When color judgment is uncertain, users can manually adjust the colors in the front-end interface using JavaScript. Clicking on misidentified color blocks allows users to select the correct color, which is then sent back to the server for updating.

#### 3.1.4 Interaction & Data Flow
The interaction and data flow for the color detection module is as follows:

1. **User Interaction with the System**:
  - The user initiates the camera in the front-end page and scans the six faces of the Rubik’s Cube in real-time.
  - The system captures the image via Flask, processes it with OpenCV, and performs color detection.

2. **Data Flow and Feedback**:
  - The color data for each face is converted into RGB values and sent to the front-end in JSON format.
  - The front-end renders the Rubik's Cube using the received color data and displays the result.
  - If the system fails to accurately detect some colors, users can manually correct them via JavaScript. After selecting the wrong color, the front-end sends an update request to Flask, which updates the color data and provides feedback to the user.

3. **Manual Correction and Auto-Synchronization**:
  - During manual correction, users select the correct color, and the system updates the RGB data and re-renders the cube faces. The corrected data is synchronized with the back-end to ensure data consistency across the system.

### 3.2 Rubik’s Cube Solving Algorithm
#### 3.2.1 Functional Positioning
The Rubik’s Cube solving algorithm is responsible for receiving the cube's color configuration and generating a step-by-step sequence of moves to solve it. This module integrates with the color detection module to receive the current state of the cube and uses Cube.js to compute the optimal solution. The algorithm ensures the cube can be solved efficiently, whether it is manually scrambled or scrambled by the system.
#### 3.2.4 Interaction & Data Flow
The interaction and data flow for the Rubik's Cube solving algorithm is as follows:

1. **User Interaction with the System**:
  - The user can start the solving process by clicking a button after scanning the cube or manually inputting the scrambled state.
  - The system triggers the solving algorithm, passing the current color configuration from the color detection module.

2. **Data Flow & Calculation**:
  - The color data is sent to Cube.js, which computes the solution.
  - The solution, in the form of a sequence of moves, is sent to the front-end.

### 3.3 Rubik’s Cube Model
#### 3.3.1 Functional Positioning
This component serves as the foundational model for rendering a virtual Rubik’s Cube in the frontend. It is integrated with A-Frame for visualization and controlled using Three.js.
#### 3.3.2 Design Principles
- A single cube (one of the 27 pieces in a standard Rubik’s Cube) is modeled using Blender. The cube’s colors and materials are pre-designed in Blender to match the six standard Rubik’s Cube colors, along with proper sizing and textures.
- The model’s origin coordinate is set to the world coordinate system to ensure correct positioning when imported into the frontend, improving rendering consistency.
- In the frontend, A-Frame is used with HTML to import 27 individual cube models. Their positions are then adjusted according to their sizes, forming a complete virtual Rubik’s Cube.
![A gif-base Rubik's Cube Model](/.github/images/team7_diagram2.gif)
#### 3.3.3 Interaction & Data Flow
- A-Frame and HTML handle the visualization and rendering of the cube.
- Three.js reads the position, rotation values, and scale of each cube to control interactions and animation.

### 3.4 Rubik’s Cube Controller

#### 3.4.1 Functional Positioning
The Rubik’s Cube Controller enables interactions with the virtual cube using both user inputs (mouse and keyboard) and the solving algorithm’s output. It serves as a bridge between automated solving steps and manual operations, ensuring a seamless user experience.

#### 3.4.2 Design Principles
- Listens for user input and translates it into specific operations on the virtual cube.
- Utilizes `Three.js` to manage cube block coordinates and rotation properties within the `A-Frame-rendered scene,` ensuring accurate transformations.

#### 3.4.3 Key Process Flow
1. **Listen for Solving Algorithm Input**: Retrieves both the scrambling and solving sequences.
2. **Monitor User Input**: Detects keyboard or mouse actions and queues rapid inputs for smooth interaction.
3. **Determine Rotation Radius**: Identifies the correct radius for edge, corner, and center blocks.
4. **Identify Cube Block Coordinates**: Determines which cube blocks should be manipulated based on input direction.
5. **Calculate Coordinate Transformations**: Applies circular motion formulas, utilizing sine and cosine functions to determine position changes.
6. **Animate Updates**: Updates block coordinates and rotation values dynamically using `Three.js`.

#### 3.4.4 Interaction & Data Flow
- **Visualization**: Relies on `A-Frame` and `HTML` rendering for graphical representation.
- **State Management**: Uses `Three.js` to handle updates and control cube transformations.
- **User Interaction**: Processes user inputs to allow rotation of different cube faces.
- **Algorithm Integration**: Receives solving steps from the backend algorithm.
- **Data Storage**: Sends the current cube state to the backend (`Express.js`) for persistence in `MongoDB`.

### 3.5 Frontend Web Framework

#### 3.5.1 Functional Positioning
The frontend web framework provides an interactive and visual interface for users to interact with the virtual Rubik’s Cube. It integrates core components, including virtual cube rendering, user input processing, and backend communication.

#### 3.5.2 Design Principles
- **Component-Based Architecture**: Uses `Vue.js` for modular development, improving code reusability and maintainability.
- **Static Page Embedding**: Some static pages, such as the homepage, are embedded within the `Vue` framework to ensure flexibility.
- **Routing System**: Implements `Vue Router` to navigate between different pages and views dynamically.
- **Backend Communication**: Uses `JavaScript` to handle service switching, allowing seamless transitions between `Flask` and `Node.js` backends.

#### 3.5.3 Key Process Flow
1. **Routing and Page Rendering**:
  - Most pages are built within the `Vue` framework.
  - Some `static pages`, such as the homepage, are embedded separately to optimize performance.
2. **Virtual Cube Rendering**:
  - Initializes a 3D Rubik’s Cube using `A-Frame` and `Three.js`.
  - Applies necessary transformations and animations to simulate realistic cube movements.
3. **Backend Communication**:
  - Uses `JavaScript` to handle `API` requests and service switching.
  - Interacts with `Flask` for some services and `Node.js` for others, ensuring smooth transitions.
4. **User Interaction Handling**:
  - Listens for user inputs from mouse and keyboard.
  - Converts inputs into cube manipulation commands and updates the visualization accordingly.

#### 3.5.4 Interaction & Data Flow
- **Interacts with the rendering engine**: Uses `A-Frame` and `Three.js` for 3D visualization of the Rubik’s Cube.
- **Processes user input**: Listens to and interprets keyboard and mouse commands to perform cube manipulations.
- **Communicates with the backend**:
  - Sends scrambling and solving requests to the backend.
  - Retrieves solving steps and updates the cube state accordingly.
- **Handles multi-service interactions**:
  - Uses `JavaScript` to switch between `Flask` and `Node.js` services.
  - Manages API calls and data exchanges with `MongoDB`.

## 4. Challenges and Solutions
### 4.1 Innovative Construction of the Rubik's Cube Model
**Challenges**  
Existing open-source 3D Rubik's Cube models had significant limitations:
- Low-quality rendering (lack of lighting and shadows)
- Rigid animation systems (unable to handle continuous operations)
- Dependency on parent-child hierarchies (causing rotation errors)

**Solutions**  
We developed a **coordinate-driven model**:
- Completely abandoned traditional parent-child hierarchies, using mathematical calculations to independently control the position and rotation of each of the 27 small cubes
- Built the base unit in Blender and optimized material textures
- Implemented a **dynamic tolerance detection algorithm** to accurately determine cube-face relationships
- Separated **self-rotation and orbital rotation**:
  - Center cubes only rotate in place
  - Edge and corner cubes follow precise mathematical trajectories


### 4.2 Breakthroughs in Motion Control System
**Core Difficulties**
- Conflicting animation commands due to rapid user inputs
- Mismatch between physical movements and visual representation

**Key Techniques**
1. **Layered Command Processing**:
  - Established a priority queue to manage concurrent operations
  - Developed a buffering mechanism to ensure smooth animations
2. **Mathematically Driven Motion Engine**:
  - Used trigonometric functions to calculate cube trajectories in real-time
  - Achieved rotation stacking through coordinate transformations

### 4.3 Key Integration Challenges
**Cross-Platform Collaboration Issues**
- Communication delays between the color detection module (Python) and the AR environment (JavaScript)
- Camera resource conflicts during page transitions

**Solutions**
- Designed a **state bridging protocol** for seamless transitions:
  - Automatic redirection to the AR page after detection
  - Managed camera lifecycle through a hardware abstraction layer
- Developed a **device resource scheduler** to ensure smooth switching


## 5. Team Contributions
- **Mohamad Aldawansh**
  - Provided Hiro Marker image tracking integration
  - Designed and implemented the Rubik’s Cube solving algorithm
  - Designed and implemented the color detection module
  - *(Additional contributions may need to be specified)*
- **Junjie Zheng Feng**
  - Designed the Rubik’s Cube Model
  - Designed the Rubik’s Cube Controller
  - Maintained and improved Hiro Marker tracking
  - Maintained the repository file structure
  - Implemented frontend-backend separation
  - Developed frontend Vue framework and configured routes
  - Designed the homepage using Figma and decorated with CSS
- **Daniel Jack Flynn**
  - Designed the Rubik’s Cube Controller
  - Maintained and improved Hiro Marker tracking
  - Designed and implemented the color detection module
  - Proofread team documentation and texts
  - Created video content for the project
  - Provided image assets and resources
  - *(Additional contributions may need to be specified)*
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
