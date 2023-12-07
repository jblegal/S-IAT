define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
 category1 : { 
		    name : 'Moi', //Will appear in the data.
		    title : {
		      media : {word : 'Moi'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{word : 'Moi'}, 
    			{word : 'Mien'}, 
    			{word : 'Mon'}, 
    			{word : 'Je'}, 
    			{word : 'Moi-même'},
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Masculin', //Attribute label
			title : {
				media : {word : 'Masculin'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli
				{word: 'Fort'},
				{word: 'Puissant'},
				{word: 'Robuste'},
				{word: 'Dynamique'},
				{word: 'Independant'},
	], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Féminin', //Attribute label
			title : {
				media : {word : 'Féminin'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli
				{word: 'Sensible'},
				{word: 'Romantique'},
				{word: 'Empathique'},
				{word: 'Affectueux'},
				{word: 'Sentimental'},
	], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			}
