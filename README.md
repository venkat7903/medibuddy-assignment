# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/venkat7903/medibuddy-assignment.git).

# Steps to setup project
Clone this repo in your **IDE** using commad **git clone** https://github.com/venkat7903/medibuddy-assignment.git

First run **npm install** to install necessary dependencies in package.json file.

Run **npm start** to start the server. 

The server will start running at localhost:3000

# Assignment Video

https://github.com/user-attachments/assets/6100749e-cd2f-4813-bd6a-a712bf55bc06

# Project Live Link
https://medibuddy-assignment-brown.vercel.app/

# Drive Link
https://drive.google.com/drive/folders/1_b2xuwkIY9pl8qMYL3ZNTk1CZAgLxzEb?usp=sharing

# Technologies Used

React 

Functional components and React Hooks for state management

Tailwind CSS

React Slider

# React Packages Used

**react-icons** for icons

**react-loader-spinner** for Loader

**react-slick** for slider

**uuid** for unique ids

# Description 

**Frontend Development:**

User Experience: Designed a responsive good UI with loading indicators.

**Responsiveness**:
Developed the page to adapt different screen sizes like mobiles, tabs, desktops. 

**API**:
  Used page_config API (https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config) for fetching objects and rendered the components based on the order of the array.

**Async Operations**:
  Implemented async operations using async/await in useEffect for fetching objects using page_config API.

**Rendered 2 Special Components**:
  Filtered logic of the packages where:
  1) contractId matches the subCategory key.
  2) subCategories array contains (includes) the category which is present inside the categories key.

**Loading Indicators**:
Displayed loading spinners when data is being fetched.

**Loading**:
The page loads efficiently

**Design**:
Developed the web page based on the figma design provided

**Deployment**:
Hosted the website on **Vercel** platform.
