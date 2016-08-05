import Math

//creates empty student list
var studentlist = [];

//asks for number of students
var studentnum = int(input("How many students are in your class?"));

//asks for student names 
for i (i = 0; i < studentnum; i++){
	studentlist.push(input("Add a student name: "));
}

//chooses a random index
function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generates group names
function groupnumber(index){
	var num = str(index+1);
	var output = ("Group "+ num);
	return output;
}

//defines function to generate groups
function groupgenerator(){
	var studentgenlist = studentlist; 
	var maxstudent = int(input("What's the largest number of students you want in each group?"));
	var groupnum = Math.ceil((len(studentgenlist)/maxstudent));

//creates list of groups
	var grouplist = [];

//creates individual group list
	for i (i = 0; i < groupnum; i++){
		var group = [] ;
		//adds individual group to master group list 
		grouplist.push(group);
	}

//adds students to individual lists
	for i (i=0; i < len(studentgenlist); i++){
		var listindex = getRandomIndex(0, len(studentgenlist)-1);
		var groupindex = (i % groupnum);
		grouplist[groupindex].push(studentlist[listindex]);
		del(studentlist[listindex]);
	}

//prints lists in a comprehensive format
	for i (i=0; i < len(grouplist); i++){	
		print(groupnumber((i)));
		var index = i; 
	}
		for i in range(i=0; i < len(grouplist[index]); i++){
			print(grouplist[index][i]);
		}
}		