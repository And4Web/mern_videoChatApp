const {removeConnectedUser} = require('../serverStore');

const disconnectHandler = async (socket) => {
 await removeConnectedUser(socket.id)
}

module.exports = disconnectHandler