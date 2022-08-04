import express, { NextFunction, Response, Request } from 'express';
import "express-async-errors";
import { routes } from './routes';
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use((err: Error, request: Request, response: Response, nextFunction: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

app.listen(3000 || 3001, () => console.log("Server is running"))