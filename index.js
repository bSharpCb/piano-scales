//optimization and new features wishlist 
//combine makeColor functions into a single function that receives (element, color)

var keys = [];
		keys[0] = Array.from(document.getElementById('whitekeys').children);
		keys[1] = Array.from(document.getElementById('blackkeys').children);

		var naturalNotes = "cdefgab";
		function elemForNote(noteName) {
			var noteNum = naturalNotes.indexOf(noteName[0]);
			var sharp = (noteName.length == 2) ? 1 : 0;

			return keys[sharp][noteNum];
		}

		function reset(elem) {
				elem.style = "";
		}
		
		function makeColor(elem,colorString) {
			elem.style = "background:" + colorString + ";";
		}
		


		//scale intervals
		notes = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b'];
		major = [2,2,1,2,2,2];
		naturalMinor = [2,1,2,2,1,2];
		harmonicMinor = [2,1,2,2,1,3];
		melodicMinor = [2,1,2,2,2,2];
		phrygianDominant = [1,3,1,2,1,2];
		modeDorian = [2,1,2,2,2,1];
		modePhyrigian = [1,2,2,2,1,2];
		modeLydian = [2,2,2,1,2,2];
		modeMixolydian = [2,2,1,2,2,1];
		modeLocrian = [1,2,2,1,2,2];

			function octaveAdjust(n){
			if(n>11){
				return notes[n-12];
			}else{
				return notes[n];
			}
		}

		//chord structure
		function minor7thChord(rootNoteId){
			var note1 = notes.indexOf(rootNoteId);
			var note3 = note1 + 3;
			var note5 = note3 + 4;
			var note7 = note5 + 3;
			var m7th = [note1, note3, note5, note7];

			return m7th;
		}

		//progressions structure
		function minor145(m7thChord){
			var rootChord = notes.indexOf(m7thChord[0]);
			var  fourth = rootChord + 5;
			var fifth = fourth + 2;
			var fourthChord = minor7thChord(fourth);
			var fifthChord = minor7thChord(fifth);
			return m7thChord, fourthChord, fifthChord; 
		}

		function makeKeys(){
			keys[0].forEach(reset);
			keys[1].forEach(reset);
		}

		makeKeys();

		function octaveAdjust(n){
			if(n>11){
				return notes[n-12];
			}else{
				return notes[n];
			}
		}

		function intervals(key,intervalArray){
			var rootNote = notes.indexOf(key);
			var second = rootNote + intervalArray[0];
			var third = second + intervalArray[1];
			var fourth = third + intervalArray[2];
			var fifth = fourth + intervalArray[3];
			var sixth = fifth + intervalArray[4];
			var seventh = sixth + intervalArray[5];

			myScale =[rootNote,second,third,fourth,fifth,sixth,seventh];
			return myScale.map(octaveAdjust);
	    }



	    function blueNote(){
		    	makeKeys();
		    	var key = document.getElementById('keysig').value;
		    	var sc_id = document.getElementById('scale').value;
		    	var intervalArray = ['nothing',major,naturalMinor,harmonicMinor,melodicMinor,phrygianDominant, modeDorian, modePhyrigian, modeLydian, modeMixolydian, modeLocrian];
		    	var scale = intervals(notes[key],intervalArray[sc_id]);
		    	for(var m = 0; m < 7; m++){
		    		makeColor(elemForNote(scale[m]),"blue");	    		
		    	}
		    	var rootN = document.getElementById('rootN');
		    	rootN.value = key;
		    	makeColor(elemForNote(scale[2]),"red");
		    	makeColor(elemForNote(scale[6]),"green");
		    	makeColor(elemForNote(scale[4]),"purple");
		    	;
	    }
		    	