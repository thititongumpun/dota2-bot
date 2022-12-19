import { Kafka, KafkaConfig, Partitioners } from "kafkajs";
import * as dotenv from "dotenv";
dotenv.config();

const kafkaConfig: KafkaConfig = {
  brokers: [process.env.BROKERURL as string],
  sasl: {
    mechanism: 'scram-sha-256',
    username: process.env.KAFKAUSERNAME || "",
    password: process.env.KAFKAPASSWORD || "",
  },
  ssl: true,
}

const kafka = new Kafka(kafkaConfig);
export const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner })