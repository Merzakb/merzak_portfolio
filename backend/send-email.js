
export async function sendEmail(data) {
    try {
        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.error || 'Une erreur s\'est produite lors de l\'envoi de votre message.');
        }
        return responseData;
    } catch (error) {
        throw new Error('Une erreur s\'est produite lors de l\'envoi de votre message.');
    }
}


/*export function sendEmail(data) {
    const apiEndpoint = '/api/email';

    return fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .catch((err) => {
        console.log(err + "erreur send");
        throw err; 
    });
}

*/
