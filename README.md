# EarySystem
A web Application called "Early", which helps people to check their hearing problems.

## Project Description
- When the admin logs in, he creates a few questions with several possible responses for each. There is only one valid response for each question.
- After registering with the system, users cannot log in until the admin approve their account.
- Users are allowed to retake the hearing assistant exam as many as they want. The user must first listen to the audio recording for the multiple-choice questions before choosing the appropriate answer.
- The user displays his or her exam result after completion.
- The user may also see a history of the exams he has previously taken

## Users
1. Admin User
    - [x]  Login/ Logout
    - [x]  Update Profile
    - [x]  Manage other users accounts (CRUD)
    - [x]  Manage hearing assistance questions (CRUD)
    - [x]  Manage answers for each question (CRUD)
2. Normal User
    - [x]  Login/ Logout
    - [x]  Register
    - [x]  Update profile
    - [x]  Take the hearing assistance exam
    - [x]  Show history of Exams

## Tools
- Frontend should be in `React.js`
- Backend should be in (`node.js` & `Express.js`)
- Database (`MySQL`)

## To Use the project
After downloading the project repository and making sure that NodeJS is installed 
1. Navigate to server on your terminal and run this command `npm i` to install backend end dependencies & `npm run dev` to execute
2. Navigate to cliect on your terminal and run this command `npm i` to install front end dependencies & `npm start` to execute

## APIs
You can find all system APIs in this [file](server/EarySystem.postman_collection.json)

## Demo

https://github.com/mahmoudhaney/EarySystem/assets/83553963/b3edc9bf-c68f-4dff-bcd9-2e400597c0f5

