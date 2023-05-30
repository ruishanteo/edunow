# EDUNOW

https://edunow.netlify.app

The EDUNOW is a web application that allows users to participate in quizzes, track their scores, and view the leaderboard. It provides an interactive and engaging experience for users to test their knowledge and compete with others.

## Features

EDUNOW offers the following features:

1. **Quiz Participation**: Users can take part in quizzes by answering a series of questions. Each question is presented one at a time, and users can select their chosen option.

2. **Real-time Feedback**: Users receive immediate feedback on whether their chosen option is correct or incorrect for each question.

3. **Score Tracking**: The app keeps track of the user's score as they progress through the quiz. The score is based on the number of correct answers.

4. **Leaderboard**: The leaderboard displays the top users' scores in descending order. Users can see their ranking based on their score compared to other participants.

5. **Authentication**: The app supports user authentication, allowing users to log in and have their scores recorded under their account.

## Usage

To use EDUNOW, follow these steps:

1. **Clone the Repository**: Start by cloning the repository to your local machine.

2. **Install Dependencies**: Navigate to the cloned directory and install the necessary dependencies by running the following command:

   ```
   npm install
   ```

3. **Set Up Firebase**: EDUNOW relies on Firebase for authentication and data storage. Set up a Firebase project and obtain the configuration details.

4. **Configure Firebase**: In the project, locate the Firebase configuration file (usually named `firebaseConfig.js` or similar) and update it with your Firebase project's configuration details.

5. **Start the Application**: Run the following command to start the application locally:

   ```
   npm start
   ```

6. **Access the App**: Open a web browser and visit `http://localhost:3000` to access EDUNOW.

## Dependencies

EDUNOW relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- Redux: A predictable state container for managing application state.
- React Redux: Official React bindings for Redux.
- Material-UI: A popular React UI framework for building responsive and visually appealing components.
- Firebase: A cloud-based platform for building web and mobile applications, used for authentication and data storage.

These dependencies are automatically installed when running the `npm install` command.
