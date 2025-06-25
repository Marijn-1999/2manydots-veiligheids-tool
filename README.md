# DotSecure – Gamified Cybersecurity Training Platform

DotSecure is an interactive, gamified training platform designed to raise **data security awareness** among employees. Through engaging learning modules, progress tracking, and friendly competition, users develop essential cybersecurity skills in a fun and motivating way.

![screenshot](./screenshot-training-page.png)

---

## Features

- Interactive training flow with unlockable modules  
- Realistic incident-based quizzes with instant feedback  
- Leaderboard and reward system to drive engagement  
- Intuitive navigation with dedicated pages for:  
  - Training  
  - Team Overview  
  - Knowledge Hub  
  - User Profile  
- Progress tracking and personalized feedback  

---

## Installation

Clone the project and install dependencies:

```bash
git clone https://github.com/your-username/dotsecure.git
cd dotsecure
npm install
Start the development server:

bash
Copy
Edit
npm run dev
Dependencies:

React

React Router

TailwindCSS

Framer Motion

TypeScript (optional)

## Usage
Launch the app and explore the following pages via the sidebar:

Training Page: Select and complete modules to earn ⭐.

Interactive Quiz: Start a training, answer questions, and track progress.

Team Overview: View team rankings and monthly leaderboards.

Knowledge Hub: Expand cybersecurity knowledge via categorized resources.

Profile: Monitor your learning progress and earned rewards.

Example code to render the TrainingCard component:

jsx
Copy
Edit
<TrainingCard
  title="Bewustwording"
  subtitle="Reageren op incidenten"
  onStart={() => startTraining(3)}
  reward={10}
/>

## Contributing
We welcome contributions! To contribute:

Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add your feature')

Push to the branch (git push origin feature/your-feature)

Open a Pull Request

Please follow our code of conduct and ensure your changes align with the project's design and goals.

## Troubleshooting / FAQ
Q: The quiz doesn't load after clicking 'Start'.
A: Make sure all assets and training questions are properly defined in the training module state.

Q: Styling looks different from the design.
A: Double-check Tailwind classes and compare with the Figma design specs.

Q: Navigation is broken or routes don't load.
A: Ensure that React Router is configured with proper Route components and paths.

## License
This project is licensed under the MIT License.
Feel free to use, share, and modify.

## Changelog
v1.0.0 – Initial Release
Implemented core UI: Training, Team, Knowledge, Profile pages

Added interactive quiz module with progress bar

Integrated gamified elements: points, stars, leaderboard

Responsive layout and navigation

## Acknowledgements
Built using Lovable AI

Design inspired by Figma mockups by our internal UX team

Special thanks to contributors for testing and feedback


