import Person from "./person.js";
import Validator from "./validator.js";
import DataContext from "./data-context.js";
import PersonService from "./person-service.js";

function main() {
    const validator = new Validator();
    const dataContext = new DataContext();
    const personService = new PersonService(validator, dataContext);
    const person = new Person(1, "Ivan");
    personService.save(person);
}

main();
