define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension) {
    var API = new APIConstructor();

    return iatExtension({
        category1: {
            name: 'Moi',
            title: {
                media: { word: 'Moi' },
                css: { color: '#31b404', 'font-size': '2em' },
                height: 7
            },
            stimulusMedia: [
                { word: 'Moi' },
                { word: 'Mien' },
                { word: 'Mon' },
                { word: 'Je' },
                { word: 'Moi-même' },
            ],
            css: { color: '#31b404', 'font-size': '3em' }
        },

        attribute1: {
            name: 'Masculin',
            title: {
                media: { word: 'Masculin' },
                css: { color: '#31b404', 'font-size': '2em' },
                height: 7
            },
            stimulusMedia: [
                { word: 'Fort' },
                { word: 'Puissant' },
                { word: 'Robuste' },
                { word: 'Dynamique' },
                { word: 'Independant' },
            ],
            css: { color: '#31b404', 'font-size': '3em' }
        },

        attribute2: {
            name: 'Féminin',
            title: {
                media: { word: 'Féminin' },
                css: { color: '#31b404', 'font-size': '2em' },
                height: 7
            },
            stimulusMedia: [
                { word: 'Sensible' },
                { word: 'Romantique' },
                { word: 'Empathique' },
                { word: 'Affectueux' },
                { word: 'Sentimental' },
            ],
            css: { color: '#31b404', 'font-size': '3em' }
        }
    });
});
