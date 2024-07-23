async function aiConnect(answers) {
    // Example processing logic
    console.log(answers);
        while (true) {
        try {
            const response = await fetch(
                'https://noggin.rea.gent/doubtful-urial-3233',
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer rg_v1_ej8y4t68zka9z12mvh7duu486jvkowg04byl_ngk',
                },
                body: JSON.stringify({
                    // fill variables here.
                    "information": JSON.stringify(answers),
                }),
                }
            ).then(response => response.text());
            let result = JSON.parse(response);
            return result;
        } catch (error) {

        }
    }
}

export default aiConnect;