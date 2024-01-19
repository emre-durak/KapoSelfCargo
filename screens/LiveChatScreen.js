import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

const LiveChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [lastReply, setLastReply] = useState('');

  useEffect(() => {
    if (lastReply !== '') {
      setMessages([...messages, { id: messages.length.toString(), text: lastReply, isUser: false }]);
      setLastReply(''); 
    }
  }, [lastReply, messages]);

  const handleSend = () => {
    if (newMessage.trim() === '') {
      return;
    }

    setMessages([...messages, { id: messages.length.toString(), text: newMessage, isUser: true }]);

    handleSpecialWords(newMessage);

    setNewMessage('');
  };

  const handleSpecialWords = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello')) {
      replyToMessage('Hi there! How can I help you?');
    } else if (lowerCaseMessage.includes('goodbye')) {
      replyToMessage('Goodbye! Have a great day!');
    } else if (lowerCaseMessage.includes('how are you')) {
      replyToMessage('I am just a computer program, but thank you for asking!');
    } else if (lowerCaseMessage.includes('where is my package')) {
      replyToMessage('Your package is currently on its way. Please allow some time for delivery.');
    } else {
    }
  };

  const replyToMessage = (reply) => {
    setLastReply(reply);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.messageList}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.isUser ? styles.userMessage : styles.replyMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          placeholderTextColor="#ddd" 
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  messageList: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#3498db',
    alignSelf: 'flex-end',
  },
  replyMessage: {
    backgroundColor: '#2ecc71',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#fff',
  },
  sendButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LiveChatScreen;
