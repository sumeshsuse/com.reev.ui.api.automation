# Cypress E2E Testing with Cucumber BDD

This repository contains end-to-end (E2E) tests for the application, using **Cypress** for automation and **Cucumber BDD** for behavior-driven development (BDD) syntax.

## Prerequisites

Ensure that both the **UI** and **API** services are up and running locally before running the tests:

- **UI Service**: Should be running at `http://localhost:3000`
- **API Service**: Should be running at `http://localhost:3001`

### Starting the UI and API Services

1. **UI Service**:
   - Navigate to the UI project folder and run:
     ```bash
     npm start
     ```
   - This will start the UI on `http://localhost:3000`.

2. **API Service**:
   - Navigate to the API project folder and run:
     ```bash
     npm start
     ```
   - This will start the API on `http://localhost:3001`.

### Installing Cypress and Cucumber BDD

To get started with Cypress and Cucumber BDD in your project, follow these steps:

1. Clone this repository and navigate to the project folder:
   ```bash
   git clone <repository_url>
   cd <project_folder>

Install :    
npm install cypress --save-dev
npm install cypress-cucumber-preprocessor --save-dev

