// describe('Demo API Test', () => {
//     // const baseURL="https://api.trello.com"
//     // const apiKey = '35852d66eaf0b1a0a4edf1df706a9052'
//     // const apiToken = 'ATTAf1fad2c0896feb77735379373cf537d8facf732d416146225ed32f6bc1d10766D670A8A3'
//     const boardName1='On Board';
//     let id;
//     it('creating new trello board', () => {
//         cy.request({
//             method:"POST",
//             url:baseURL+"/1/boards",
//             qs:{
//                 name:"My first board",
//                 key:apiKey,
//                 token: apiToken,
//             }
//         }).then((response)=>{
//             const res= JSON.parse(JSON.stringify(response.body))
//             id=res.id
//             expect(response.status).to.eql(200)
//             cy.log(id)
//         })
//     });
//     it('get trello board details', () => {
//         cy.request({
//             method: "GET",
//             url: `${baseURL}/1/boards/${id}`,
//             qs: {
//                 key: apiKey,
//                 token: apiToken,
//             }
//         }).then((response) => {
//             expect(response.status).to.eql(200);
//             cy.log(JSON.stringify(response.body, null, 2));
//         });
//     });
//     it('update trello board name', () => {
//         cy.request({
//             method: "PUT",
//             url: `${baseURL}/1/boards/${id}`,
//             qs: {
//                 name: "updated",
//                 key: apiKey,
//                 token: apiToken,
//             }
//         }).then((response) => {
//             expect(response.status).to.eql(200);
//             cy.log(`Board updated to: ${response.body.name}`);
//         });
//     });
//     it('delete trello board', () => {
//         cy.request({
//             method: "DELETE",
//             url: `${baseURL}/1/boards/${id}`,
//             qs: {
//                 key: apiKey,
//                 token: apiToken,
//             }
//         }).then((response) => {
//             expect(response.status).to.eql(200);
//             cy.log('Board deleted successfully');
//         });
//     });
// });