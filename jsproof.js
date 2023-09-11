/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

/*
First half of rider name rarity legend:

Common: Cyclone
Uncommon: Heat, Luna
Rare: Fang

Second half of rider name rarity legend:

Common: Joker
Uncommon: Metal, Trigger
Rare: Accel

Special Name suffix (Very rare to appear, comes after second half of rider name)
Xtreme

Armor Type rarity legend:

Common: Chainmail
Uncommon: Platemail
Rare: Obsidian


*/

//Pool of possible metadata 

//First Half of Rider Name
let nameFirstHalf = ["Cyclone", "Heat", "Luna", "Fang"];

//Second Half of Rider Name
let nameSecondHalf = ["Joker", "Metal", "Trigger", "Accel"];

//Armor Type
let armorTypeList = ["Chainmail", "Platemail", "Obsidian"]

//Weapon Type
let weaponTypeList = ["Staff", "Sword", "Katana", "Bow", "Blaster", "Glaive", "Scythe"];


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (_riderName,_armorType,_weapon) {
   const nftRider = {Name: _riderName,
                   Armor: _armorType,
                   Weapon: _weapon}


   NFTs.push(nftRider);
   console.log("Rider NFT Minted: "+_riderName);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i<NFTs.length; i++){
        console.log("\nNFT #"+(i+1));
        console.log("Name: "+NFTs[i].Name);
        console.log("Armor: "+NFTs[i].Armor);
        console.log("Weapon: "+NFTs[i].Weapon);
        
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Supply Count of NFTs: "+NFTs.length);
}

// call your functions below this line
   /*
   Rarity Array Index Legend:
   
   Index 0 = First half of name
   Index 1 = Second half of name
   Index 2 = Chance of special suffix
   Index 3 = Armor Type
   Index 4 = Weapon
   */       
  
   //Array to hold the rarity rolls 
   var rarity = [0,0,0,0,0];                

   //Variable to store temporary random roll value to be used in the metadata generation for loop
   var tmpRand = 0;

   //Variables used to store the metadata generated from metadata generation for loop to be used as parameters for mintNFT()
   var firstHalf = "temp";
   var secondHalf = "temp";
   var suffix = "";
   var armorType = "temp";
   var weapon = "temp";

//Metadata generation For loop
/*For loop to generate metadata values based on the read rarity rolls from the rarity array 
then call mintNFT() with the generated parameters*/
for(let i = 0; i<5; i++){ 
   
   //Loop to generate rarity rolls for each metadata
   for(let i = 0; i<rarity.length; i++){
      rarity[i] = Math.floor(Math.random() * 100) + 1;
   }


 
  for(let j = 0; j<rarity.length; j++){
      switch(j+1){
         case 1:
               //First Half of name 
                    //Common
                   if((rarity[j] >=1) && (rarity[j] <= 75)){
                        firstHalf = nameFirstHalf[0];
                   }
                    //Uncommon
                   else if((rarity[j] >=76) && (rarity[j] <= 97)){
                        tmpRand = (Math.floor(Math.random() * 2) == 0);
                        if(tmpRand){
                            firstHalf = nameFirstHalf[1];
                        }
                        else{
                            firstHalf = nameFirstHalf[2];
                        }
                    }
                    //Rare
                   else{
                        firstHalf = nameFirstHalf[3];
                   }

               
            break;
         case 2:
               //Second Half of name
                //Common
                if((rarity[j] >=1) && (rarity[j] <= 75)){
                    secondHalf = nameSecondHalf[0];
               }
                //Uncommon
                else if((rarity[j] >=76) && (rarity[j] <= 97)){
                    tmpRand = (Math.floor(Math.random() * 2) == 0);
                    if(tmpRand){
                        secondHalf = nameSecondHalf[1];
                    }
                    else{
                        secondHalf = nameSecondHalf[2];
                    }
                }
                //Rare
               else{
                    secondHalf = nameSecondHalf[3];
               }

               break;
         case 3:
               //Special Suffix
               if(rarity[j] == 100){
                    suffix = "Xtreme";
               }
               break;

         case 4:
               //Armor Type
                //Common
                if((rarity[j] >=1) && (rarity[j] <= 75)){
                    armorType = armorTypeList[0];
                }   
                //Uncommon
                else if((rarity[j] >=76) && (rarity[j] <= 97)){
                    armorType = armorTypeList[1];
                }
                //Rare
                else{
                    armorType = armorTypeList[2];
                }
               break;

         case 5:
               //Weapon Type
               tmpRand = Math.floor(Math.random() * 7) + 1
               switch(tmpRand){
                  case 1:
                        weapon = weaponTypeList[0];
                        break;

                  case 2:
                        weapon = weaponTypeList[1];
                        break;

                  case 3:
                        weapon = weaponTypeList[2];
                        break;

                  case 4:
                        weapon = weaponTypeList[3];
                    break;

                  case 5:
                        weapon = weaponTypeList[4];
                        break;

                  case 6:
                        weapon = weaponTypeList[5];
                        break;

                  default:
                        weapon = weaponTypeList[6];
                        break;
               }
               break;
        
      }
      
   }

   riderName = firstHalf + " " + secondHalf + " " + suffix;
   mintNFT(riderName,armorType,weapon);
}
   listNFTs();
   getTotalSupply();
    
   

