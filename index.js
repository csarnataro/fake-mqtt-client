const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com'); 

const topic1 = 'test/csarnataro/temperature';
const topic2 = 'test/csarnataro/humidity';

client.on('connect', () => {
  console.log('Connected to MQTT broker');

  setInterval(() => {
    const temperature = Math.floor(Math.random() * 40); // Simulate temperature reading
    client.publish(topic1, temperature.toString());

    const humidity = Math.floor(Math.random() * 100); 
    client.publish(topic2, humidity.toString());

    console.log('Published temperature and humidity:', temperature, humidity);
  }, 2000); 
});