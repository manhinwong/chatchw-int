export async function generateQuestion(answers) {
    // Example processing logic

        try {
            const response = await fetch('http://127.0.0.1:5000/api/question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(answers),
            });
            const result = await response.json();
            return result;

        } catch (error) {

        }
}

export async function runDiagnosis(answers) {
    // Example processing logic
    try {
        const response = await fetch('http://127.0.0.1:5000/api/diagnosis', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(answers),
        });
        const result = await response.json();
        return result;

    } catch (error) {

    }
}

