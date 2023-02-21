import Person from "../src/person.js";
import Validator from "../src/validator.js";
import DataContext from "../src/data-context.js";
import PersonService from "../src/person-service.js";
import sinon from "sinon";
import assert from "assert";

describe("Person Service Specs", () => {
    it("The 'save' method is called if a person is valid", () => {
        const person = new Person(1, "Ivan");

        const validator = new Validator();
        const func = sinon.stub();
        func.withArgs(person).returns(true);
        validator.isValid = func;

        const spy = sinon.spy();
        const dataContext = new DataContext();
        dataContext.savePerson = spy;
        const personService = new PersonService(validator, dataContext);

        personService.save(person);
        assert(spy.calledOnce);
    });
});
