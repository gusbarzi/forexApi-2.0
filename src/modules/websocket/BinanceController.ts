import { Request, Response } from "express";
const WebSocket = require('ws');
const ws = new WebSocket('wss://stream.binance.com:9443/ws/gbpusdt@bookTicker');

export class BinanceController {
    async handle(request: Request, response: Response) {
        ws.onmessage = (event: any) => {
            const obj = JSON.parse(event.data);
            console.log(`Symbol: ${obj.s}`)
            console.log(`Symbol: ${obj.a}`)
        }
        response.json()
    }
}