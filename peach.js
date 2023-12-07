define(['pipAPI', 'https://jblegal.github.io/S-IAT/qstiat.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		 category :  
			{
				name : 'Black People', //Category name to be used for feedback and logging.
				title : {
					media : {word : 'Black People'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word: 'Moi'},
					{word: 'Mien'},
					{word: 'Mon'},
					{word: 'Je'},
					{word: 'Moi meme'},
					{word: 'Shanice'}
				],
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
			},	
			attribute1 : 
			{
				name : 'Féminin', //Attribute name to be used for feedback and logging
				title : {
					media : {word : 'Unpleasant'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word: 'Sensible'},
					{word: 'Romantique'},
					{word: 'Empathique'},
					{word: 'Affectueux'},
					{word: 'Sentimental'},
					{word: 'Grief'}
				], 
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
			},
			attribute2 : 
			{
				name : 'Masculin', //Attribute name to be used for feedback and logging
				title : {
					media : {word : 'Pleasant'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word: 'Fort'},
					{word: 'Puissant'},
					{word: 'Robuste'},
					{word: 'Dynamique'},
					{word: 'Indépendant'},
					{word: 'Love'}
				], 
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
						},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
