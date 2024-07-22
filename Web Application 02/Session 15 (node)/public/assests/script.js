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
            .then(function(data){
                window.location.href = '/todo';
            })

        }catch(error){
            console.error(error);
        }

    })
}
