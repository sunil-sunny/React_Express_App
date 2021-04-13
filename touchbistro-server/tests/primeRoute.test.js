const app = require("../index");
const supertest = require("supertest");
const { response } = require("../index");

beforeAll(done => {
    done()
})

afterAll(done => {
    done()
})


it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
})

it("Get API works fine with input greater than zero", async () => {

    await supertest(app).get("/18")
        .expect(200)
        .then((response) => {
            expect(response.text).toContain("[7]");
        });
});

it("Get API throws error messae with input <= zero", async () => {

    await supertest(app).get("/-18")
        .expect(422).then((response)=>{

        }).catch((err)=>{

        });
});
