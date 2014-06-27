/*
----------------------------------------------------------------
- Detects the text to be displayed when page loads             -
----------------------------------------------------------------
*/

function text_body(){
   
  var input = document.getElementById('styled');

  if( document.cookie.indexOf("data") >= 0 )
  {
    input.placeholder = "";
    document.getElementById('styled').value = getCookie("data");
  }
  else
  {
    input.placeholder = "Type Here...";
  }

}


/*
-----------------------------------------------------------------
- Saves the data in a cookie - for every new character entered  -
-----------------------------------------------------------------
*/
function OnInput(event){

   expiry = new Date();
   date = new Date();
   expiry.setTime(date.getTime()+(60*60*24*30)); //30 days

   content = document.getElementById('styled').value;

   document.cookie = "data="+content +"; expires="+expiry.toGMTString();
       
}


/*
----------------------------------------------------------------
- Revceives the name of the cookie.                            -
-       Returns the data previously saved. If not returns null -
----------------------------------------------------------------
*/
function getCookie(name)
{
  
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  
  if(value != null) 
  {
   return unescape(value[1]);   
  }
  else
  {
   return null;
  }

}


