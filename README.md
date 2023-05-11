# FindIntersectionApp - How to run the project
- This project is the UI part and to get the output you need run the backend server
- Backend server can be found by  [FindIntersection Backend](https://github.com/RumiAust/FindIntersect)
- The Spring Boot project by defaults run on 8080 port
- You can use `mvn clean install` to build the project before you run
- You can run the project by clicking run icon or run on debug mode or using the cmd `mvn spring-boot:run` in the terminal
- The project should start running in 8080 port 
- In case the 8080 port is blocked, you can change the port number under resource `application.properties` file `server.port:yourPortNumber`
- Once the backend is running
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
- Insert two list values in comma separated way example list one `1,2,3,4,5`  list two `3,4,5,6,7,8,9`
- The radio button is to decide which list you want to make Hashset or which one to be the iterator 
- You the leave the decision on program `Set large list to Hashset` that will take the large set as Hashset
- In case both set is equal in above option, it will take list one as hashset
- Click on the submit button and the result should appear below
- You can use the reset button to reset all the parameters
- You can find a documentation pdf under documents folder with images of this program output
 


# FindIntersectionApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
