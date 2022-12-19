// import { Router, Request, Response } from "express";
// import { kafka } from "../config/kafka";
// import { Partitioners } from 'kafkajs';


// export const defaultRoute = Router();
// defaultRoute.get("/", async (_: Request, res: Response): Promise<Response> => {
//   return res.status(200).json({
//     status: "success",
//     message: "Connected successfully!",
//   });
// });

// defaultRoute.get("/test", async (_: Request, res: Response): Promise<Response> => {
//   const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner });
//   await producer.connect();
//   await producer.send({
//     topic: 'apireq',
//     messages: [
//       { key: '1', value: 'yo' },
//     ],
//   })

//   return res.status(200).json({
//     status: "success",
//     message: "555",
//   });
// });
