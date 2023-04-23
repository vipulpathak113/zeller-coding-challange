# Zeller Coding Challenge

## Setup:
- **Setup project using:**
``` npx create-react-app my-app  --template typescript ```
- **Install dependencies:** ``` npm install @apollo/client graphql aws-amplify @testing-library/react @testing-library/jest-dom @testing-library/user-event ```
- Configure **jest.config** file
- Configure **tsconfig.json** file
- Setup **graphql with Apollo client and aws-amplify** in index.js file
- Setup **error boundary** to catch any javascript errors

## Approach and Optimization:
- Created a custom hook **useCustomers** to fetch data from api so that it can be used anywhere without repeating the code.
- Fetch roles from after fetching data and display to the UI
- Followed **SOLID principles** such as *Single responsibility Principle* and *Open Closed principle* to segregate the view and functionality.
- Created custom hook to convert roles name in capital letters from API into firstletter captalize as per the UI.
- Used **InMemory cache** in Apollo client to cache API requests.




