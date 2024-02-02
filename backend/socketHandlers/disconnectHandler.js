const {removeConnectedUser} = require('../serverStore');

const disconnectHandler = async (socketId) => {
 await removeConnectedUser(socketId)
}

module.exports = disconnectHandler