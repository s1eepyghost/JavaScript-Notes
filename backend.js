//--------------------HOW TO GET BETTER AT BACKEND CODING--------------------//

//----------Data Types----------//
    //-----undefined, null, boolean, string, symbol, bigint, number, and object-----//
    
    
    
    
//--------------------HOW TO PUSH TO GITHUB--------------------//
//----- 1. Create a repository on GitHub
//----- 2. Open GitBash
//----- 3. "CD" to the folder that you want to push ("LS" shows list of files in folder)
//----- 4. Once you get to the folder, initialize the folder by writing "git init" (preps your directiory (folder) to be uploaded)
//----- 5. Write "git remote add origin" and paste the URL link to the GitHub repository (to verify if it works, write "git remote -v")
//----- 6. Write "git add ." to add all the files in your directory to a queue to be pushed up to the repository
//----- 7. Write "git commit -m" to write a comment on the push (it helps to describe what you did, if your pushing for the first time, write "first commit")
//----- 8. Write "git push origin master (or main)" to finalize the push
//----- 9. Go back to the GitHub page and refresh it, there you'll see the repository updated with the files added

// Convert Celsuis to Fahrenheit
function convertCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  
  // Change the inputs below to test your code
  convertCtoF(30);

  // Code Explanation
    // Declare the fahrenheit variable.
    // Make sure the proper order of arithmetic operations is followed by using parenthesis (()) when needed.