var env={
  production:false,
  socket_server:"http://127.0.0.1",
  auth: {
    saltRounds:10
  },
  port:8000,
  mongo:"mongodb://mongo:27017",
  mqtt_server:"mqtt://127.0.0.1:1883",
  broker:{
    mongo_url:"mongodb://mongo:27017/mqtt",
    port:1883
  },
  weather:{
    token:"Your darksky.net API key",
    location:"lat,long",
  },
}
module.exports=env;
