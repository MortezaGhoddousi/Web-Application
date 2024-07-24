window.onload = function(){
    document.querySelector('button').addEventListener('click', async function(e){
        e.preventDefault();
        var data = document.querySelector('input').value;
        try{
            await fetch('/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({item: data})
            })      
            .then(function(){
                window.location.href = '/todo';
            })

        }catch(error){
            console.error(error);
        }

    })


    var x = document.querySelectorAll('.x');
    x.forEach(function(el){
        el.addEventListener('click', async function(e){
            var preChild = e.target.previousElementSibling;
            console.log(preChild.innerHTML);
            try{
                await fetch('/todo', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({item: preChild.innerHTML})
                })      
                .then(function(){
                    window.location.href = '/todo';
                })
    
            }catch(error){
                console.error(error);
            }           
        })
    })
}
