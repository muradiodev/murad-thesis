import Repository from './Repository';

export async function submitData(data) {
    const endPoint = `http://173.212.221.237:39099/api/v1/tickets`;
    return await Repository.post(`${endPoint}`, data)
        .then(response => {
            if (response.data) {
                return response.data;
            } else {
                return {code: 1001, message: 'Unexpected response'}
            }
        })
        .catch(error => {
            console.log(JSON.stringify(error));
            return {code: 1000, message: 'Network error'}
        });
}


