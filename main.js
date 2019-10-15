
//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let array = dog_string.split(" ")

function nameMatch(){
    for(i = 0; i <= array.length - 1; i++){
        for(j = 0; j = dog_names.length - 1; j++){
            if(array[i] == dog_names[j]){
                console.log("Match")
            }
        else{
            console.log("No Matches")
        }    
        }
    } 
}


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function arrayMatch(){
    for(i = 0, i < arr.length; i += 2){
        console.log("even index")
    }
}


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]