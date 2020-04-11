import io from 'socket.io-client';

function webSocket() {
    this.socket = null
    this.connect = () => {
        if (this.socket) this.socket.close();
        this.socket = io('http://localhost:9098');
    }
    this.linstener = () => {
        this.socket.on('connect', function(data){
            console.log('建立socket连接，接收到服务端的数据为======', data)
        });
        this.socket.on('MessageEvent', (data) => {
            console.log('messageEvent', data)
        });
    }
    this.sendMessage = (data) => {
        console.log('sendMessage', data)
        this.socket.emit("MessageEvent", data)
    }
    this.sendPacket = (data) => {
        console.log('PacketEvent', data)
        this.socket.emit("PacketEvent", data)
    }
}


export default new webSocket;


// const getSingle = (() => {
//     var instance = null;
//     return {
//         getInstance: (obj) => {
//             if(!instance) {
//                 instance = new obj();
//             }
//             return instance;
//         }
//     }
// })();

// export default getSingle