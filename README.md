# PollNeumo – Voting System

**Live Site:** [https://pollneumo-voting-system.onrender.com](https://pollneumo-voting-system.onrender.com)

## Overview

**PollNeumo** is a simple and interactive web-based voting system. Users can vote for their favorite programming languages and see live vote percentages based on total votes. It's designed with a clean UI, responsive layout, and accurate voting logic using pure JavaScript.

## Features

- Vote for your favorite programming language
- Real-time percentage updates after each vote
- Edge-case handling (e.g., zero votes)
- Fully responsive design
- Clean and readable code structure

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript,React
- **Hosting:** Render

## Core Logic

- Total votes are calculated dynamically
- Percentages are computed per option using:  
  `percentage = (optionVotes / totalVotes) * 100`
- Handles 0-vote scenarios (prevents division by zero)
- Uses DOM manipulation to update results without reload

## Local Setup

No backend setup needed. To run locally:

```bash
git clone https://github.com/your-username/pollneumo.git
cd pollneumo
npm start
```

## Contact

- Email: jeyajothi108@gmail.com
- LinkedIn: https://www.linkedin.com/in/jeya-jothi-841277211

## Author

Jeya Jothi | Web Developer | UI/UX Enthusiast | Learner by Building

---
