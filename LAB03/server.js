const connect = require('connect');
const url = require('url');

const app = connect();

app.use((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { method, x, y } = parsedUrl.query;

    if (method && x && y) {
        const numX = parseFloat(x);
        const numY = parseFloat(y);

        let result;
        let operator;

        switch (method) {
            case 'add':
                result = numX + numY;
                operator = '+';
                break;
            case 'subtract':
                result = numX - numY;
                operator = '-';
                break;
            case 'multiply':
                result = numX * numY;
                operator = '*';
                break;
            case 'divide':
                if (numY !== 0) {
                    result = numX / numY;
                    operator = '/';
                } else {
                    res.end('Error: Division by zero');
                    return;
                }
                break;
            default:
                res.end('Error: Invalid method');
                return;
        }

        res.end(`${numX} ${operator} ${numY} = ${result}`);
    } else {
        res.end('Error: Missing parameters');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
