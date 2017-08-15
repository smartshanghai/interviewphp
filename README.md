# interviewphp

Pre-interview tasks for prospective PHP developers.

## A: HTML and CSS

### Preparation

- Download NPM dependencies.
- Make sure that you can run `Grunt`. It should already be configured to work as soon as you have installed the dependencies.
- Compile `assignments/a/scss/main.scss` by running `Grunt`.

### Task

In `assignments/a` there are two HTML files: index.html and contact.html. They are already set up to load `stylesheet.css` that you compiled in the previous step. Use symantic HTML and SCSS to build the designs below.

Implement [assignments/a/profile.jpg](assignments/a/designs/profile.jpg) on the index.html page. 
Make a responsive grid of 6 profiles (max 3 per line) for different people (use random names, and the profile pictures from the `designs` folder). Buttons do not have to lead anywhere. Pay special attention to positioning and coloring.

Implement the design in [assignments/a/contact.jpg](assignments/a/designs/contact.jpg) as the contact.html page.
You do not have to implement the Javascript for the map, nor the actual sharing functionality of the social media buttons. Just use any appropriately-sized image for the map.

## B: PHP

### 1: Object-Oriented Design

Explain in no more than one page (A4) how you would design the classes and database of a private messaging system on a website. Feel free to include model diagrams.

### 2: Time Tracking

Write a class that can:

- Receive an array
- Convert array to JSON
- Output the JSON
- Save it to a file
- Read the JSON from the file
- Output the JSON as a PHP array again