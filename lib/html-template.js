module.exports = {
    generateHtml( teamProfileArr ) {
       const holdHtmlArr = [];
 
       const htmlHeaderAndTitleBar = `
 <!DOCTYPE html>
 <html lang = "en">
 <head>
    <meta charset = "UTF-8">
    <meta name = "viewport" content = "width = device-width, initial scale = 1.0">
    <meta http-equiv = "X-UA-Compatible" content = "ie = edge">
    <title>${teamProfileArr[0]}</title>
    <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel = "preconnect" href = "https://fonts.gstatic.com">
    <link href = "https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Spartan&display=swap" rel = "stylesheet">
    <link rel = "stylesheet" href = "../src/styles.css">
 </head>
 <body>
    <div class = "title-bar">
       <h1>${teamProfileArr[0]} Roster</h1>
    </div>
    <div class = "card-container">
    `;
       holdHtmlArr.push( htmlHeaderAndTitleBar );
 
       for ( let i = 1; i < teamProfileArr.length; i++ ) {
          let teamMemberHtml = `
          <div class = "team-member-card">
             <div class = "team-member-card-top">
                <h2>${teamProfileArr[i].name}</h2>
                `;
 
                if ( teamProfileArr[ i ].role === "Manager" ) {
                   teamMemberHtml += `<h2 class="bi bi-cup">  ${teamProfileArr[i].role}</h2>`;
                }
                else if ( teamProfileArr[ i ].role === "Engineer" ) {
                   teamMemberHtml += `<h2 class="bi bi-lightbulb">  ${teamProfileArr[i].role}</h2>`;
                }
                else if ( teamProfileArr[ i ].role === "Intern" ) {
                   teamMemberHtml += `<h2 class="bi bi-eyeglasses">  ${teamProfileArr[i].role}</h2>`;
                };
 
                teamMemberHtml += `
             </div>
             <div class = "team-member-card-bottom">
                <p><b>Employee ID:</b> ${teamProfileArr[i].id}</p>
                <P><b>Email:</b><br><a href = "mailto:${teamProfileArr[i].email}">${teamProfileArr[i].email}</a></p>
          `;
 
          if ( teamProfileArr[ i ].officeNumber ) {
             teamMemberHtml += `<p><b>Office Number:</b><br>${teamProfileArr[ i ].officeNumber}</p>`;
          }
          
          else if (teamProfileArr[ i ].githubUsername ) {
             teamMemberHtml += `<p><b>GitHub:</b><br><a href = "https://github.com/${teamProfileArr[ i ].githubUsername}">${teamProfileArr[ i ].githubUsername}</a></p>`;
          }
          
          else if ( teamProfileArr[ i ].school ) {
             teamMemberHtml += `<p><b>School:</b><br>${teamProfileArr[ i ].school}</p>`;
          };
 
          teamMemberHtml += `
             </div>
          </div>
          `;
          holdHtmlArr.push( teamMemberHtml );
       };
 
       const htmlFooter = `
    </div>   
 </body>
 </html>
 `;
       holdHtmlArr.push ( htmlFooter );
       return holdHtmlArr;
    }
 };