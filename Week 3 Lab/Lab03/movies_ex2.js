function p01Func() {
	
  /* in Ex2, add a getElementById here to get the "description" div 
     and set its innerHTML to <p>...</p>
  */
   document.getElementById("description").innerHTML = "<p> A psychologist is sent to a space station orbiting a planet called Solaris to investigate the death of a doctor and the mental problems of cosmonauts on the station. <p>"


  /* in Ex2, add a getElementById here to get "poster" img and set
     its attribue src to solaris_poster.jpg. Note that movie images are 
	  in the subfolder solarie and inside the images folder.
  */
   document.getElementById("poster").setAttribute("src","images/solaris/solaris_poster.jpg"); 
  
  /* in Ex2, add a getElementById here to get the "poster" img 
     and set the display property of its style to none.
  */
     document.getElementById("poster").setAttribute("style","display: none;"); 
     

  
  /* in Ex2, repeat the above two steps for the "director" and "actors"
     img elements here. For the image that is shown for "director", 
     use solaris_director.jpg. For the image that is shown for "actors",
     use solaris_actors.jpg
  */
     document.getElementById("director").setAttribute("src","images/solaris/solaris_director.jpg");
     document.getElementById("director").setAttribute("style","display: none;"); 
     document.getElementById("actors").setAttribute("src","images/solaris/solaris_actors.jpg");
     document.getElementById("actors").setAttribute("style","display: none;"); 

 
 
  /* the following two lines retrieve the checkboxes with IDs check1
     check2 and check3, and unchecks them.
  */

  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;

}


/* in Ex3, uncomment the following functions & complete them */

/* remove this line

function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
     // add a call to getElementById here to get the "poster" img and 
     // set the display property of its style to "inline"	 	 
  }
  else {
     // add a getElementById here to get "poster" img and 
     // set the display property of its style to "none"	 
  }
}

function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
     // add a getElementById here to get "director" img and 
     // set the display property of its style to "inline"	 
  }
  else {
     // add a getElementById here to get "director" img and 
     // set the display property of its style to "none"	   
  }
}

function checkUncheck3(){
  if (document.getElementById("check3").checked==true) {
     // add a getElementById here to get "actors" img and 
     // set the display property of its style to "inline"	 
  }
  else {
     // add a getElementById here to get "actors" img and 
     // set the display property of its style to "none"	   
  }
}

remove this line */

/* in Ex4, create function p02Func() that is similar to p01Func() */

/* in Ex5, create the functions zoomIn() and zoomOut() */
