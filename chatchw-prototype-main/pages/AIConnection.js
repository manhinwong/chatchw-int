export async function generateQuestion(answers) {
    // Example processing logic

        try {
            
            /*const response = await fetch(
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
            return result;*/

            const response = await fetch('http://127.0.0.1:5000/api/endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(answers),
            });
            const result = await response.json();
            console.log(result);
            console.log('aaa')
            return result;

        } catch (error) {

        }
}

export async function runDiagnosis(answers) {
    // Example processing logic
        try {
            const response = await fetch(
                'https://noggin.rea.gent/convenient-shrew-3245',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer rg_v1_jfl8mk718ooqkv74ajfkzzmjddug9eajoc5g_ngk',
                  },
                  body: JSON.stringify({
                    // fill variables here.
                    "information": JSON.stringify(answers),
                  }),
                }
              ).then(response => response.text());
              let result = response;
              let startIndex = result.indexOf("{");
              let endIndex = result.lastIndexOf("}");
              result = result.substring(startIndex, endIndex + 1);
            return result;
        } catch (error) {
            console.log(error);
        }
}

