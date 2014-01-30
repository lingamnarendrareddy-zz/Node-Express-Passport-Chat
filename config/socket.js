/**
 * Created with IntelliJ IDEA.
 * User: narendral
 * Date: 1/28/14
 * Time: 6:24 PM
 */


//var io = io.listen(server);
// usernames which are currently connected to the chat
var usernames = {};
module.exports = function (io) {
    io.set('log level', 2);
    io.sockets.on('connection', function (socket) {
        //Send welcome data to client
        var date = new Date(),
            userDate = date.toDateString() + ',' + date.toLocaleTimeString()

        // store the username in the socket session for this client
        socket.username = user.displayName;

        // add the client's username to the global list
        //usernames[username] = username;

        socket.emit('connect', {'date': userDate, 'name': 'Chat Server', 'data': 'Welcome to the chat client <b> Developed by Lingam Narendra Reddy</b>', 'cilentName': user.displayName});
        socket.emit('update_users', {'cilentName': user.displayName});
        socket.broadcast.emit('data', {'date': userDate, 'name': 'Chat Server', 'data': '<b>' + user.displayName + '</b> joined the chat'});

        //Recieve client data
        socket.on('client_data', function (data) {
            console.log("CLIENT:: " + data.userName + ' said:: ' + data.userText)

            //Reterive the data from client
            var userName = data.userName,
                dataBank = data.userText,
                date = new Date(),
                userDate = date.toDateString() + ',' + date.toLocaleTimeString()

            //User entered data, send the chat item to all the clients
            if (dataBank.trim() != '' && userName.trim() != '')
                io.sockets.emit('data', {'date': userDate, 'name': userName, 'data': dataBank});
        });

        // when the user disconnects.. perform this
        socket.on('disconnect', function () {
            // echo globally that this client has left
            socket.broadcast.emit('data', {'date': userDate, 'name': 'Chat Server', 'data': '<b>' + user.displayName + '</b> left the chat'});
        });
    });
};
