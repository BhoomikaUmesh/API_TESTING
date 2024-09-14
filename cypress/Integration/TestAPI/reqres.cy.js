describe('ReqResAPI', () => {
    const baseURL = "https://reqres.in/";
    let id;

    
    it('List Users', () => {
        cy.request({
            method: "GET",
            url: baseURL + "api/users"
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.data).to.be.an('array');
        });
    });

    
    it('Single User', () => {
        cy.request({
            method:"GET",
            url:baseURL+"api/users/2",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response)=>{
            expect(response.status).to.eql(200)
        })
    });
    
    
    it('Single User Not Found', () => {
        cy.request({
            method: "GET",
            url: baseURL + "api/users/9999",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eql(404);
        });
    });

    
    it('List Resources', () => {
        cy.request({
            method: "GET",
            url: baseURL + "api/unknown"
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.data).to.be.an('array');
        });
    });

   
    it('Single Resource', () => {
        cy.request({
            method: "GET",
            url: baseURL + "api/unknown/2"
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.data).to.have.property('name');
            expect(response.body.data).to.have.property('year');
        });
    });

    
    it('Single Resource Not Found', () => {
        cy.request({
            method: "GET",
            url: baseURL + "api/unknown/9999",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eql(404);
        });
    });


it('Create User', () => {
    cy.request({
        method: "POST",
        url: baseURL + "api/users",
        body: {
            "name": "Roshi",
            "job": "leader"
        }
    }).then((response) => {
        expect(response.status).to.eql(201);
        expect(response.body).to.have.property('name', 'Roshi');
        expect(response.body).to.have.property('job', 'leader');
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
    });
});

    
    it('Update User (PUT)', () => {
        cy.request({
            method: "PUT",
            url: baseURL + "api/users/2",
            body: {
                "name": "Roshi Updated",
                "job": "leader"
            }
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('name', 'Roshi Updated');
            expect(response.body).to.have.property('job', 'leader');
        });
    });

    
    it('Update User (PATCH)', () => {
        cy.request({
            method: "PATCH",
            url: baseURL + "api/users/2",
            body: {
                "job": "senior leader"
            }
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('job', 'senior leader');
        });
    });

    
    it('Delete User', () => {
        cy.request({
            method: "DELETE",
            url: baseURL + "api/users/2"
        }).then((response) => {
            expect(response.status).to.eql(204);
        });
    });

    
    it('Register - Successful', () => {
        cy.request({
            method: "POST",
            url: baseURL + "api/register",
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('token');
        });
    });

    
    it('Register - Unsuccessful', () => {
        cy.request({
            method: "POST",
            url: baseURL + "api/register",
            body: {
                "email": "eve.holt@reqres.in"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eql(400);
            expect(response.body.error).to.eql("Missing password");
        });
    });

    
    it('Login - Successful', () => {
        cy.request({
            method: "POST",
            url: baseURL + "api/login",
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('token');
        });
    });

    

    it('Login - Unsuccessful', () => {
        cy.request({
            method: "POST",
            url: baseURL + "api/login",
            body: {
                "email": "eve.holt@reqres.in"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eql(400);
            expect(response.body.error).to.eql("Missing password");
        });
    });

    

    it('Delayed Response', () => {
        cy.request({
            method: "GET",
            url: baseURL + "api/users?delay=3"
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.data).to.be.an('array');
        });
    });
});


// describe('ReqResAPI', () => {
//     const baseURL="https://reqres.in/"
//     let id;
//     it('POST', () => {
//         cy.request({
//             method:"POST",
//             url:baseURL+"api/users",
//             body:{

//                 "name": "Bhoomi",
//                 "job": "leader"
                
//             }
//         }).then((response)=>{
//             const res= JSON.parse(JSON.stringify(response.body))
//             id=res.id
//             expect(response.status).to.eql(201)
//             cy.log(id)
//         })
//     });

// });

// 35852d66eaf0b1a0a4edf1df706a9052
// ATTAf1fad2c0896feb77735379373cf537d8facf732d416146225ed32f6bc1d10766D670A8A3