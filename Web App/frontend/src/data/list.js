import decodeJwt from 'jwt-decode';

class list{
    getList = async () => {
        // Create request
        const request = new Request('http://localhost:8000/custom-unprotected-route', {
          method: 'GET'
        });
        // Fetch request
        const response = await fetch(request);
        const data = await response.json();
        console.log(data)
        return data
      };
}

export default new list();