window.onload = function(){
    document.querySelector('button').addEventListener('click', async function(e){
        e.preventDefault();
        var data = document.querySelector('input').value;
        console.log(data);

        try{
            const response = await fetch('/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({item: data})
            })      
            .then(function(responseData){
                window.location.href = '/todo';
            })

        }catch(error){
            console.error(error);
        }

    })
}
