# cs465-fullstack
CS-465 Full Stack Development with MEAN

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

Initially, I used the Express HTML approach to code my frontend. This used Handlebars to create partial HTML files that could be reused in many places. In contrast, the SPA used TypeScript to create components that can be reused in the same manner. The components I created had more robust functionality than my partials.

Why did the backend use a NoSQL MongoDB database?

One reason we selected a MongoDB database was its use of BSON and the flexibility it provides. MongoDB allows us to use JSON for our data and that works incredibly well with the stack that we have chosen.

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is not a programming language; it is a notation based off of JavaScript that is used to store data. JSON allows us to take data from our database and put that data dynamically in our webpage.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

One of the biggest places I refactored code was with the trip card component. I created the trip card component to replace the initial HTML that was implemented. I also added a delete button in addition to the edit button to provide the user with more functionality. Reusable components are vital to a sustainable application. They prevent redundancy, reduce errors and make projects more robust.

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Methods for a request dictate what the request is meant to perform. For instance, a GET request receives information from the application. An endpoint is a URL where requests are sent to. "/api/trips" was an endpoint that allowed a GET and a POST method. Authentication is used to ensure that only authorized users can make privileged requests. 

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has prepared me for a huge part of my prospective field. My goal is to become a web developer. I was able to cultivate basic front-end and back-end coding skills on the MEAN stack and learned an immense amount about HTTP requests and how they are processed. 
