(function (doc,win){
    'strict mode'

    const btnsPage = doc.getElementsByTagName('button')

    var btn = (function btnsKeys(object) {
        for (const key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                const element = object[key];
                console.log(element)
                element.addEventListener('click', e=>{
                    e.preventDefault;
                    if (e.target.id == 'FM0'){
                        const styleSRC = 'css_frameworks/normalize/css/normalize.css'  
                        changeStylesheetSRC(styleSRC)                      
                        console.log('Normalize')
                    }
                    if (e.target.id == 'FM1'){
                        const styleSRC = 'css_frameworks/materialize-v1/css/materialize.min.css'  
                        changeStylesheetSRC(styleSRC)                      
                        console.log('Materialize')
                    }
                    if (e.target.id == 'FM2'){
                        const styleSRC = 'css_frameworks/milligram-v1.4.1/css/milligram.min.css'  
                        changeStylesheetSRC(styleSRC)                      
                        console.log('Millgram')
                    }
                    if (e.target.id == 'FM3'){
                        const styleSRC = 'css_frameworks/picnic/css/picnic.min.css'  
                        changeStylesheetSRC(styleSRC)                      
                        console.log('Picnic')
                    }
                    if (e.target.id == 'FM4'){
                        const styleSRC = 'css_frameworks/skeleton-v2.0.4/css/skeleton.css'  
                        changeStylesheetSRC(styleSRC)                      
                        console.log('Skeleton')
                    }
                    if (e.target.id == 'FM5'){
                        const styleSRC = 'css_frameworks/tacit-v1.5.5/css/tacit-css-1.5.5.min.css'  
                        changeStylesheetSRC(styleSRC)                      
                        console.log('Tacit')
                    }
                    if (e.target.id == 'FM6'){
                        const styleSRC = 'css_frameworks/onsenui-v2.12.8/css/onsenui.min.css'  
                        changeStylesheetSRC(styleSRC)                      
                        console.log('onseui')
                    }
                    if (e.target.id == 'FM7'){
                        const styleSRC = 'css_frameworks/uikit-v3.16.11/css/uikit.min.css'  
                        changeStylesheetSRC(styleSRC)                      
                        console.log('uikit')
                    }
                })            
            }
        }
    })(btnsPage)

    function changeStylesheetSRC  (element){
        const styleSRC = doc.getElementById('styleSRC')
        styleSRC.setAttribute('href',element)
    }

})(document, window)