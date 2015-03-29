$(document).ready(function(){ 
  
	$('#cmd').click(function () {
	 var pdf = new jsPDF('1', 'in', [3.2, 5]);
	    pdf.setProperties({
	    title: 'Mohamed-Ben-Rhaiem-resume',
	    subject: 'This is my resume',
	    author: 'Mohamed-Ben-Rhaiem',
	    keywords: 'generated, javascript, web 2.0, ajax',
	    creator: 'MEEE'
        });
     pdf.addHTML($('#target')[0], function () {
     pdf.save('Mohamed-Ben-Rhaiem-resume.pdf');
     });
   }); 
  });